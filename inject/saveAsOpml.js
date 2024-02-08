function dl(text, title) {
  let textToSave = text;
  let hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/xml," + encodeURI(textToSave);
  hiddenElement.target = "_blank";
  hiddenElement.download = title + ".opml";
  hiddenElement.click();
}

function getOpml() {
  let list = {};
  document.querySelectorAll(".logHeadBottom").forEach((blog) => {
    let d = blog.innerText.split(" - ");
    list[d[1].trim()] = d[0].trim();
  });
  const head = `<?xml version="1.0" encoding="utf-8"?><opml version="2.0">
	<head>
		<title>followed_blogs.opml</title>
		<dateCreated>${new Date()}</dateCreated>
		<dateModified>${new Date()}</dateModified>
	</head>
	<body>`;
  let body = "";
  const footer = "</body></opml>";

  const outline = (title, url) => {
    return `<outline htmlUrl="https://${url}" title="${title}" type="rss" version="RSS2" xmlUrl="https://${url}/rss/" />`;
  };

  for (let blog in list) {
    body += outline(blog, list[blog]);
  }

  const opml = head + body + footer;

  return opml;
}

let b = document.createElement("button");
b.onclick = () => {
  dl(getOpml(), "followed_blogs");
};
b.innerHTML = "ذخیرهٔ opml";
document.querySelector(".formField.bottombuttons").appendChild(b);
