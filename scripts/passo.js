"use strict";

function Passo(a) {
    let lengthInput = document.getElementById("a");
    const length = Number(lengthInput.value);

    let resultField = document.getElementById("result");

    let useBigLetters = document.getElementById("Caps").checked;
    let useNumbers = document.getElementById("Numbers").checked;
    let useSymbols = document.getElementById("Symbols").checked;

    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@$%^*()[]?/.,";
    
    let passwordPool = smallLetters;
    if(useBigLetters) passwordPool += bigLetters;
    if(useNumbers) passwordPool += numbers;
    if(useSymbols) passwordPool += symbols;

    let password = "";
    for(let i = 0; i < length; i++) {
        let Index = Math.floor(Math.random() * passwordPool.length);
        password += passwordPool[Index];
    }
    resultField.value = password;
}
function CopyPassword() {
    const passwordText = document.getElementById("result").value;
    navigator.clipboard.writeText(passwordText);
    alert("copied");

}
