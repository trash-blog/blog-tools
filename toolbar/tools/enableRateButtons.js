class RateElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `  .trash-rate-down{
      position: fixed;
      left: 5rem;
      bottom: 1rem;
      background: #018a87;
      line-height: 1;
      padding: 0.5em;
      color: #fff;
      font-weight: bold;
      border-bottom: 4px solid #0006;
      text-decoration: navajowhite;
      border-radius: 6px;
    }
    .trash-rate-down::after {
      content: attr(data-text);
    }
    .trash-rate-down:hover,.trash-rate-down:focus {
      background: #015351;
    }`
    shadow.append(style)

    let rateUp = document.querySelector(
      "a[href^='/process/rate_post/'][href$='2']"
    );
    let rateDown = document.querySelector(
      "a[href^='/process/rate_post/'][href$='1']"
    );
    if (rateUp && !rateDown) {
      let a = document.createElement("a");
      let url = rateUp.href.slice(NaN, -1) + "1";
      a.classList.add("trash-rate-down");
      a.textContent = "مخالف"
      a.href = url
      shadow.appendChild(a);
      a.addEventListener("click", async (e) => {
        e.preventDefault()
        this.send_xhr(url,
          (req) => {
            const [upRates, downRates] = JSON.parse("(" + req.responseText + ")");
            a.dataset.text = " (" + downRates + ")";
          },
          (req) => {
            a.dataset.text = " خطا! ";
            console.log(req)
          },
        )
      })
    }

  }

  send_xhr(url, onSuccess, onError) {
    const request = new XMLHttpRequest();
    request.open("GET", url),
      request.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
      request.onreadystatechange = function () {
        4 == request.readyState &&
          (200 != request.status && 304 != request.status ? onError && onError(request) : onSuccess && onSuccess(request));
      },

      4 != request.readyState && request.send(null);
  }
}

window.customElements.define("rate-box", RateElement);