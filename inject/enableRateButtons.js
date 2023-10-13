let script = `let rateUp = document.querySelector(
  "a[href^='/process/rate_post/'][href$='2']"
);
let rateDown = document.querySelector(
  "a[href^='/process/rate_post/'][href$='1']"
);
if (rateUp && !rateDown) {
  let a = document.createElement("a");
  let url = rateUp.href.slice(NaN, -1) + "1";
  a.classList.add("trash-rate-down");
  a.href = url
  document.body.appendChild(a);
  a.addEventListener("click", async (e) => {
    e.preventDefault()
    ext_xhr(url,
      (req) => {
        const [upRates,downRates] = eval("(" + req.responseText + ")");
         a.dataset.text = " (" + downRates +")";
      },
      (req) => {
        a.dataset.text = " خطا! ";
        console.log(req)
      },
    )
  })
}

window.ext_xhr = (url, onSuccess, onError) => {
  const request = new XMLHttpRequest();
  request.open("GET", url),
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    request.onreadystatechange = function () {
      4 == request.readyState &&
        (200 != request.status && 304 != request.status ? onError && onError(request) : onSuccess && onSuccess(request));
    },

    4 != request.readyState && request.send(null);
}`

let el = document.body.appendChild(document.createElement("script"));
el.type = "text/javascript";
el.appendChild(document.createTextNode(script))
document.head.appendChild(el)
