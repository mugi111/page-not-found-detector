const ping = (url) => {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () =>{};

  xhr.open("GET", url, true);
  try {
    xhr.onload = function () {
      console.log(xhr.status);
      return xhr.status;
    }
    xhr.send();
  } catch (err) {
    console.log(err);
  }
}

chrome.webNavigation.onCommitted.addListener(function(details) {
  if (details.frameId !== 0){
    return;
  }
  ping(details.url);
}, {url: [{urlMatches: "http://*/*"}, {urlMatches: "https://*/*"}]});
