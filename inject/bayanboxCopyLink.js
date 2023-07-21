function ce(tag, attrs, ...childs) {
    const el = document.createElement(tag);
    for (const x in attrs) {
        el[x] = attrs[x];
    }
    for (const c of childs) {
        el.appendChild(c);
    }
    return el;
}

let dlink = document.querySelector('a[href*="bayanbox.ir/download"]').href

function cp() {
    navigator.clipboard.writeText(dlink)
    btn.textContent = "کپی شد"
    setTimeout(() => { btn.textContent = "کپی لینک دانلود" }, 1000)
}

let btn = ce(
    "div",
    {
        style: "background: dodgerblue;cursor: pointer;width: max-content;margin: auto;color: #fff;line-height: 1;padding: 1em;border-radius: .5em;font-weight: bold;",
        textContent: "کپی لینک دانلود",
        onclick: cp,
    }
)

document.querySelector(".bbDlLnk").appendChild(btn)