window.browser = (function() {
  return window.msBrowser || window.browser || window.chrome;
})();
if(!!document.querySelector("a[href^='/process/rate_post/'][href$='2']")){
  document.querySelector(".toggleLike")
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
