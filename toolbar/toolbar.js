window.customElements.define("rate-box", RateElement);

let isBlog = document.querySelector("meta[name=generator]").content === "blog.ir"
let buttons = []

let toolbar = document.createElement("div")
toolbar.classList.add("toolbar")

if (isBlog) {
    document.body.prepend(toolbar)
}


if (document.querySelector("a[href^='/process/rate_post/'][href$='2']") && !(document.querySelector("a[href^='/process/rate_post/'][href$='1']"))) {
    buttons.push({
        "name": "toggleLike",
        "label": "toggle rate",
        "icon": "👍",
        "fn": () => {
            document.body.append(document.createElement("rate-box"))
        }
    })
}


buttons.push({
    "name": "toggleComment",
    "label": "toggle cm",
    "icon": "💬",
    "js": "/inject/bcomForm.js",
    "css": "/inject/enableRateButtons.css"
})

buttons.push({
    "name": "follow",
    "label": "follow",
    "icon": "➕",
    "type": "link",
    "href": `https://blog.ir/panel/-/followed_blogs?follow=${window.location.origin}`
})

if (isBlog) {
    for (let btn of buttons) {
        let type = btn.type == "link" ? "a" : "button"
        let b = document.createElement(type)
        b.classList.add("toolbar__btn")
        b.id = b.name
        if (btn.js) b.addEventListener("click", () => { injectScript(btn.js) })
        if (btn.css) injectStyle(btn.css)
        if (btn.fn) b.addEventListener("click", btn.fn)
        if (btn.href) b.href = btn.href
        b.title = b.label
        b.textContent = btn.icon
        toolbar.append(b)
    }
}

function injectScript(src) {
    let el = document.body.appendChild(document.createElement("script"));
    el.type = "text/javascript";
    el.src = browser.runtime.getURL(src)
    document.head.appendChild(el)
}

function injectStyle(src) {
    let el = document.body.appendChild(document.createElement("link"));
    el.rel = "stylesheet"
    el.type = "text/css";
    el.href = browser.runtime.getURL(src)
    document.head.appendChild(el)
}
