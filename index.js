const input = document.querySelector("#inputNumber");
const addNumberBTN = document.querySelector("#addNumber");
const numbersBankOutput = document.querySelector("#numberBank output");
const sortAllBTN = document.querySelector("#sortAll");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
let numbers = [];
let odds = [];
let evens = [];



addNumberBTN.addEventListener("click", function (event) {
    event.preventDefault();
    numbers.push(input.value);
    console.log(numbers);
    numbersBankOutput.textContent = numbers.join(" , ");
    input.value="";
});

sortAllBTN.addEventListener("click", function (event) {
    event.preventDefault();
    const finder = numbers.forEach((number) => {
        if (number % 2 == 1) {
            odds.push(number)
            oddsOutput.textContent = odds.join(" , ");
        }
        else {
            evens.push(number);
            evensOutput.textContent = evens.join(" , ");
        }
        numbersBankOutput.textContent="";
    });
    console.log(evens);
    console.log(odds);

});





