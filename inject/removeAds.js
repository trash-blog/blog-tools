(function () {
  fetch(chrome.runtime.getURL('./inject/adlist.json'))
    .then((resp) => resp.json())
    .then(function (adList) {
      let adWords = adList["adWords"];
      let kpopWords = adList["kpopWords"];
      let kpopGroups = adList["kpopGroups"];
      let KpopArtists = adList["KpopArtists"];

      let badWords = Array.prototype.concat(adWords, kpopWords, kpopGroups, KpopArtists);

      function remove() {
        for (let a of document.querySelectorAll(".post,.postside")) {
          for (w of badWords) {
            if (a.innerText.toLowerCase().includes(w)) {
              a.style.display = "none";
              break;
            }
          }
        }
      }
      remove();
    });
})();
