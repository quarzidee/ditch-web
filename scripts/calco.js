"use strict";

function Calco(op) {
    let FieldA = document.getElementById("a");
    let FieldB = document.getElementById("b");
    let stA = document.getElementById("a").value;
    let stB = document.getElementById("b").value;
    let resultField = document.getElementById("result");

    if(op === 'C') { 
        FieldA.value = "";
        FieldB.value = "";
        resultField.value = "";
        return;
    }

    if ((op === 'sqrt' || op === '^2' || op === '^3') && stA.trim() === "") {
        resultField.value = "Enter A for sqrt!";
        return;
    } 
    
    if (!(op == 'sqrt' || op == '^2' || op == '^3') && (stA.trim() === "" || stB.trim() === "")) {
        resultField.value = "Enter both numbers!";
        return;
    }

    let a = Number(stA);
    let b = Number(stB);
    
    if(isNaN(a) || isNaN(b)) {
        resultField.value = "You entered letters!";
        return;
    }
    
    let result;
    switch(op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': 
            if(b === 0) 
            {
                resultField.value = "Cannot divide by 0";
                return;
            }
            result = a / b; break;
            break;
        case 'sqrt':
            b = String(stB);
            if(FieldB.value.length > 0) {
                FieldB.value = "";
            }
            result = Math.sqrt(a); break;
        case '%':
            result = (a * b) / 100; break;
        case '^2':
            if(FieldB.value.length > 0) {
                FieldB.value = "";
            }
            result = Math.pow(a,2); break;
        case '^3':
            if(FieldB.value.length > 0) {
                FieldB.value = "";
            }
            result = Math.pow(a,3); break;
        case '^n':
            result = Math.pow(a,b); break;
        /*case: 'A':
            result = a;*/
    }
    resultField.value = result.toFixed(4);

}
