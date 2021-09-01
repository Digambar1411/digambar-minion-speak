var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverUrl= "https://api.funtranslations.com/translate/minion.json"


function urlConstruct(text){
    return serverUrl+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured"+error);
    alert("soething went wrong ! try again after sometime");
}
function clickHandler(){
    var inputText = txtInput.value; //takimg input

    //calling server for processing
    fetch(urlConstruct(inputText))
    .then(response=>response.json()) 
    .then(json=>outputDiv.innerText=json.contents.translated)
    .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler);