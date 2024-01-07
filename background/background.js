window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome;
})();

const handleClick = () => {
  browser.tabs.executeScript({ file: "/toolbar/tools/enableRateButtons.js" });
  browser.tabs.executeScript({ file: "/toolbar/toolbar.js" });
  browser.tabs.insertCSS({ file: "/toolbar/toolbar.css", });
}

browser.browserAction.onClicked.addListener(handleClick) 