const input = document.querySelector("#inputNumber");
const addNumberBTN = document.querySelector("#addNumber");
const numbersBankOutput = document.querySelector("#numberBank output");
const sortAllBTN = document.querySelector("#sortAll");
const sortOneBTN = document.querySelector("#sortOne");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
let numbers = [];
let odds = [];
let evens = [];



addNumberBTN.addEventListener("click", function (event) {
    event.preventDefault();
    const newInput = new Number(input.value);
    numbers.push(newInput);
    console.log(numbers);
    numbersBankOutput.textContent = numbers.join(" , ");
    input.value = "";
});

sortAllBTN.addEventListener("click", function (event) {
    event.preventDefault();
    const finder = numbers.forEach((number) => {

        if (number % 2 == 1) {
            odds.push(number)
            oddsOutput.textContent = odds.join(" , ");
        }
        else if (number % 2 == 0) {
            evens.push(number);
            evensOutput.textContent = evens.join(" , ");
        }
        else{
        alert(`${number} is neither even nor odd!`);}
    });
    numbersBankOutput.textContent = null;
    numbers.length = 0;
});

sortOneBTN.addEventListener("click", function (event) {
    event.preventDefault();
    if (numbers[0] % 2 == 1) {
        odds.push(numbers[0])
        oddsOutput.textContent = odds.join(" , ");
    }
    else {
        evens.push(numbers[0]);
        evensOutput.textContent = evens.join(" , ");
    }


    numbers.shift();
    numbersBankOutput.textContent = numbers.join(" , ");
});








