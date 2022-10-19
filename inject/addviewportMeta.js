(function(){
  if (!document.head.querySelector("meta[name=viewport]")){
 let meta= document.head.appendChild(document.createElement("meta"));
  meta.name="viewport";
  meta.content="width=device-width, initial-scale=1"
}
})();
