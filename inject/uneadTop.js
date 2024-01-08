document.querySelectorAll(".followItem").forEach(x => {
    if (x.querySelector("img.unread")) x.classList.add("unread")
})