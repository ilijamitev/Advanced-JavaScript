console.log("========== EXERCISE 01 ========== ");
/*
Generating arrays

Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
*/

let divisibleByThreeArray = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
        divisibleByThreeArray.push(i)
    }
}
console.log("Numbers divisible by 3", divisibleByThreeArray);


let evenAndDivisibleByFour = [];
for (let i = 1; i <= 1000; i++) {
    if ((i % 2 === 0) && (i % 4 === 0)) {
        evenAndDivisibleByFour.push(i)
    }
}
console.log('Even numbers that are divisible by 4', evenAndDivisibleByFour);


let endWithOne = [];
for (let i = 1; i <= 1000; i = i + 10) {
    endWithOne.push(i)
}
console.log('Numbers that end with the digit 1 ', endWithOne);




console.log("");
console.log("========== EXERCISE 02 ========== ");
/*
EXERCISE 02

Clean arrays
Create a function that cleans an array of any values and leaves only STRINGS
Create a function that cleans an array of any values and leaves only NUMBERS
Create a function that cleans undefined, null, NaN, and "" and leaves all other values
Test arrays:
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
*/
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function stringArray(array) {
    let stringArray = []
    for (let i of array) {
        if (typeof i === "string") {
            stringArray.push(i)
        }
    }
    console.log(stringArray);
}
stringArray(test);


function onlyNumbers(array) {
    let numberArray = []
    for (let i of array) {
        if (typeof i === "number" && !isNaN(i)) {
            numberArray.push(i)
        }
    }
    console.log(numberArray);
}
onlyNumbers(test);


function leaveOtherValues(array) {
    let otherValuesArray = [];
    for (let i of array) {
        if (Boolean(i) === true || i === false) {
            otherValuesArray.push(i)
        }
    }
    console.log(otherValuesArray);
}
leaveOtherValues(test)



console.log("");
console.log("========== EXERCISE 03 ========== ");
/*
Random color page
Create an HTML page
On every refresh the page should pick a random color and change the background of the page
The RGB values of the color should be shown in the center of the page on every restart
*/

let background = document.getElementsByTagName('body')[0]
console.log(background);
background.style.backgroundColor = 'white'


let colorName = document.getElementsByTagName('div')[0]


let max = 0xFFFFFF; // 16777215
let randomNumber = Math.random() * max;
randomNumber = Math.floor(randomNumber);
randomNumber = randomNumber.toString(16);
let randomColor = randomNumber.padStart(6, 0);
console.log(randomColor);


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {    //depricated but works // ON LOAD
    console.info("This page is reloaded");
    background.style.backgroundColor = `#${randomColor}`
    colorName.innerText = `The backgroundcolor is #${randomColor}`
}

