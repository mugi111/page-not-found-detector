const ping = (url) => {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () =>{};

  xhr.open("GET", url, true);
  try {
    xhr.send(null);
  } catch (err) {
    console.log(err);
  }

}

var atags = document.getElementsByTagName("a");
var hrefs = [];
for (let index = 0; index < atags.length; index++) {
  href = atags.item(index).href;
  chrome.runtime.sendMessage({href});
  hrefs.push(atags.item(index).href);
};

console.log("hello", hrefs);