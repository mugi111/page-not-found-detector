var atags = document.getElementsByTagName("a");
var hrefs = [];
for (let index = 0; index < atags.length; index++) {
  hrefs.push(atags.item(index).href);
}

console.log("hello", hrefs);