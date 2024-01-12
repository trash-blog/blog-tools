let app = document.createElement("div");
app.classList.add("trash-bcomform");
app.innerHTML = `<header id="trash-header-wrapper">
  <div class="trash-header-text">در حال دریافت rss</div>
  <div class="trash-header-btn">بازگشت</div>
</header>
<div id="trash-form-wrapper"></div>
<div id="trash-post-wrapper"></div>`;

document.body.appendChild(app);

let bcomform = (id) => {
  let html = `
<form class="bComForm trash-bComForm" id="bComFormElem" action="/process/comment_add/${id}" method="post">
              <input placeholder="نام *" type="text" class="text" name="fullname" value="">
              <input placeholder="پست الکترونيک" type="text" class="text ltr" name="email" value="">
              <input placeholder="سایت یا وبلاگ" type="text" class="text ltr" name="website" value="">
              <textarea placeholder="پیام *" name="comment" cols="60" rows="8"></textarea>
            	<input type="hidden" id="commentJsEnabled" name="settings_WITH_JS" value="">
        	    <input type="hidden" id="commentJsError" name="commentJsError" value="">
              <input type="hidden" name="hide_mail" value="1">
              <div>
                  <input id="frm_isprivate" type="checkbox" name="status" value="private" checked="true">
                  <label for="frm_isprivate">خصوصی</label>
              </div>
  <div class="formField2">
      <input type="submit" id="bComSub" class="sendbutton hasCheckbox" value="ارسال">
  </div>
  <div style="clear:both"></div>
  </form>
`;
  app.querySelector("#trash-form-wrapper").innerHTML = html;
  app.classList.add("active-form")
};

app.querySelector(".trash-header-btn").addEventListener("click", () => {
  app.classList.remove("active-form")
  app.querySelector(".trash-header-text").textContent = "مطلب موردنظر رو انتخاب کنید";
})

let fetchRss = async () => {
  try {
    let d = await fetch(window.location.origin + "/rss");
    let e = await d.text();
    return e;
  } catch (e) {
    app.querySelector(".trash-header-text").textContent = "خطا هنام دریافت rss"
  }
};

fetchRss().then((rss) => {
  let parser = new DOMParser();
  let code = parser.parseFromString(rss, "text/xml");
  app.querySelector(".trash-header-text").textContent = "مطلب موردنظر رو انتخاب کنید";
  for (let item of code.querySelectorAll("item")) {
    let post = document.createElement("div");
    let postTitle = item.querySelector("title").textContent;
    let postId = item.querySelector("guid").innerHTML.split("/").reverse()[0];
    post.classList.add("trash-form__post");
    post.setAttribute("data-id", postId);
    post.textContent = postTitle;
    post.onclick = () => {
      app.querySelector(".trash-header-text").textContent = `ارسال نظر به: ${postTitle}`;
      bcomform(postId);
    };
    app.querySelector("#trash-post-wrapper").appendChild(post);
  }
});
