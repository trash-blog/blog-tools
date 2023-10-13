let script = `
document.querySelectorAll(".toggleReply").forEach((btn) => {
  let cmid = btn.parentNode.parentNode.parentNode.dataset.did;

  const createItem = (options) => {
    let elem = document.createElement("a");
    elem.className = "defbut";
    elem.innerHTML = options.innerHTML;
    elem.onclick = options.click;
    commentEditors[cmid]
      .iframe()
      .parentElement.querySelector(".toolbar")
      .appendChild(elem);
  };

  btn.onclick = () => {
    console.log(commentEditors[cmid])
    createItem({
      innerHTML:
        '<img src="/media/images/htmlbox/cleardot.gif" class="defimg" style="background-position:0 -464px;" alt="تصویر">',
      click: () => {
        showBbox("image_selector", (url) => {
          commentEditors[cmid].insertHtml("<img src='" + url + "' />&#8204;");
        });
      },
    });
    createItem({
      innerHTML:
        '<img src="/media/images/htmlbox/cleardot.gif" class="defimg" style="background-position:0 -592px;" alt="تصویر">',
      click: () => {
          const url = prompt("آدرس تصویر را وارد کنید");
          if(url) commentEditors[cmid].insertHtml("<img src='" + url + "' />&#8204;");
      },
    })
    createItem({
      innerHTML:
        '<img src="/media/images/htmlbox/cleardot.gif" class="defimg" style="background-position:0 -752px;" alt="تصویر">',
      click: () => {
          commentEditors[cmid].insertHtml("<blockquote></blockquote>");
      },
    })
    createItem({
      innerHTML:
        '<img src="/media/images/htmlbox/cleardot.gif" class="defimg" style="background-position:0 -528px;" alt="تصویر">',
      click: () => {
          commentEditors[cmid].insertHtml("<pre></pre>");
      },
    })

  };
});
`
let meta = document.body.appendChild(document.createElement("script"));
meta.type = "text/javascript";
meta.innerText = script;
