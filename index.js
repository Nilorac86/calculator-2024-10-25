alert ("Välkommen till kalkylatorn!");


const firstNumber = +prompt("Skriv in ett valfritt tal.");
const secondNumber = +prompt ("skriv in ett valfritt tal till.");
const operator = prompt ("Välj mellan +, -, * eller / för att räkna ihop dina tal.");



if (operator === "+"){
    alert(firstNumber += secondNumber);
} else if (operator === "-"){
    alert(firstNumber -= secondNumber);
} else if (operator === "*"){
    alert(firstNumber *= secondNumber);
} else if (operator === "/"){
    alert(firstNumber /= secondNumber);
}else {
    alert("Något blev fel, prova igen!")
}

alert ("Trevligt att du ville räkna med mig. Välkommen åter!");
