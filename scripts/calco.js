"use strict";

function Input(element) {
    let inputField = document.getElementById("inputValue");
    inputField.value += element;
}
function Clear() {
    document.getElementById("inputValue").value = "";
    document.getElementById("result").value = "";
}
function Calculate() {
    let task = document.getElementById("inputValue").value;
    let resultOutput = document.getElementById("result");

    task = task.replace(/(\d|\))(?=Math|\()/g, '$1*');
                
                // Приклад: )( -> )*( або )5 -> )*5
                task = task.replace(/\)(?=\d|\()/g, ')*');

                // 2. Авто-закриття дужок
                let countOpen = (task.match(/\(/g) || []).length;
                let countClose = (task.match(/\)/g) || []).length;
                while(countOpen > countClose) {
                    task += ")";
                    countClose++;
                }

    try {
        let countOpen = (task.match(/\(/g) || []).length;
                let countClose = (task.match(/\)/g) || []).length;
                while(countOpen > countClose) {
                    task += ")";
                    countClose++;
                }
        let result = eval(task);
        resultOutput.value = result;
    } catch(error) {
        resultOutput.value = "error!";
    }
}

