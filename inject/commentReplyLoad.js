window.browser = (function () {
    return window.msBrowser || window.browser || window.chrome;
  })();
  
function injectScript(src) {
    let el = document.body.appendChild(document.createElement("script"));
    el.type = "text/javascript";
    el.src = browser.runtime.getURL(src)
    document.head.appendChild(el)
}

injectScript("inject/commentReply.js")