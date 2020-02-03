const ping = (url) => {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () =>{};

  xhr.open("GET", url, false);
  try {
    xhr.onload = function () {}
    xhr.send();
    return xhr.status;
  } catch (err) {
    console.error(err);
  }
}

chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId !== 0){
    return;
  }
  const status = ping(details.url);
  console.log(status);
  if(status === 404) {
    chrome.tabs.goBack(details.tabId);
  }
}, {url: [{urlMatches: "http://*/*"}, {urlMatches: "https://*/*"}]});
