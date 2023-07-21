window.browser = browser || chrome
browser.webRequest.onHeadersReceived.addListener(
  (data) => {

    data.responseHeaders.forEach(h => {
      if (h.name.toLowerCase() === "content-type" && h.value.includes("text/plain") && !h.value.includes("charset=utf-8")) {
        data.responseHeaders.push({
          name: "content-type",
          value: `text/plain; charset=utf-8`,
        });
      }
    });
    return { responseHeaders: data.responseHeaders };
  },
  { urls: ["https://bayanbox.ir/view/*"] },
  ["blocking", "responseHeaders"]
);