window.browser = browser || chrome

var adsLength = 0;

fetch(browser.runtime.getURL('./inject/adlist.json'))
  .then(resp => resp.json())
  .then(adList => {
    let badWords = [].concat(...Object.values(adList));
    for (let a of document.querySelectorAll(".post")) {
      for (let w of badWords) {
        if (a.innerText.toLowerCase().includes(w)) {
          ++adsLength;
          a.style.display = "none";
          break;
        }
      }
    }

    let $item = document.createElement("div")
    $item.className = "item_success";
    $item.textContent = `${document.querySelectorAll(".post[style]").length} تبلیغ حذف شد!`

    let $btn = document.createElement("a")
    $btn.style.cssText = "";
    $btn.id = "trash_styleToggle"
    $btn.textContent = `نمایش تبلیغات`;
    $btn.style.float = "left"
    $btn.onclick = () => {
      document.body.classList.toggle("showAds")
    };

    let styleText = `
    .showAds .post[style] {display: var(--display, block) !important;--theme-color: red;}
    #trash_styleToggle{float:left;background:#000a;border-radius:4px;color:#fff;padding: 0px 4px;cursor: pointer;}
    .showAds #trash_styleToggle:before{content:"عدم "}`
    let $style = document.createElement("style")
    $style.textContent = styleText
    document.body.appendChild($style)
    

    $item.appendChild($btn)

    document.querySelector(".field").prepend($item)
  })