var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input){
     return serverURL + "?" + "text=" + input 
}
 function errorHandler(){
    console.log("error occured!" , error);
    alert("Something is wrong with the server! try again after sometime")
 }
 function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then( response => response.json())
    .then( json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
 }

btnTranslate.addEventListener("click",clickHandler)