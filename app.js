var warning = "You can only use this app 5 times in an hour due to rate limiting problem of the API.\nPlease use it wisely!\nSorry for the inconvenience. 🙂";
alert(warning);

var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#output-box");

var url = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  var inputText = txtInput.value;
  var finalURL = buildFinalURL(inputText);
  console.log("Final URL: " + finalURL);

  fetch(finalURL)
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated;
    outputBox.innerText = translatedText;
    console.log("Translated Text: " + translatedText);
  })
  .catch(error => {
    var errorText = "Some error occured in the server.\nPlease try again after some time !\nSorry for the inconvenience. 🙂";
    alert(errorText);
    console.log("Error Occured:\n" + error);
  })
}

function buildFinalURL(inputText) {
  var encodedURI = encodeURI(inputText);
  console.log("Encoded URI: " + encodedURI);
  return `${url}?text=${encodedURI}`;
}