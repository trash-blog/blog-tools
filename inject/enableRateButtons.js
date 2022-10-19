let rateUp = document.querySelector(
  "a[href^='/process/rate_post/'][href$='2']"
);
let rateDown = document.querySelector(
  "a[href^='/process/rate_post/'][href$='1']"
);
if (rateUp && !rateDown) {
  let a = document.createElement("a");
  a.classList.add("trash-rate-down");
  a.href = rateUp.href.slice(NaN, -1) + "1";
  document.body.appendChild(a);
}