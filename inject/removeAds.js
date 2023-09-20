window.browser = browser || chrome

  (async () => {
    let resp = await fetch(browser.runtime.getURL('./inject/adlist.json'))
    let adList = await resp.json()
    let badWords = [].concat(...Object.values(adList));
      for (let a of document.querySelectorAll(".post")) {
        for (let w of badWords) {
          if (a.innerText.toLowerCase().includes(w)) {
            a.style.display = "none";
            break;
          }
        }
      }
    ;
  })();
