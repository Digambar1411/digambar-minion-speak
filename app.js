var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


function clickHandler(){
    
    outputDiv.innerText= textInput.value +", this is translated !";
}

btnTranslate.addEventListener("click", clickHandler);