window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome;
})();
if (!!document.querySelector("a[href^='/process/rate_post/'][href$='2']")) {
  document.querySelector("#toggleLike")
}
document.querySelector("#toggleLike").onclick = () => {
  browser.tabs.executeScript({ file: "/inject/enableRateButtons.js" });
  browser.tabs.insertCSS({
    file: "/inject/enableRateButtons.css",
  });
};

document.querySelector("#toggleComment").onclick = () => {
  browser.tabs.executeScript({ file: "/inject/bcomForm.js" });
  browser.tabs.insertCSS({
    file: "/inject/enableRateButtons.css",
  });
};

document.querySelector("#showAds").onclick = () => {
  browser.tabs.insertCSS({
    code: `.post[style] {display: var(--display, block) !important;--theme-color: red;}`,
  });
};

async function getCurrentTab() {
  let [tab] = await browser.tabs.query({ active: true, lastFocusedWindow: true });
  return tab;
}
(async () => {
  let tab = await getCurrentTab();
  let url = new URL(tab.url)
  document.querySelector("#follow").addEventListener("click", () => {
    browser.tabs.create({
      url: `https://blog.ir/panel/-/followed_blogs?follow=${url.host}`
    })
  })
  if (url.href !== "https://blog.ir/changes")
    document.querySelector("#showAds").style.display = "none"
})()