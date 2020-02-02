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