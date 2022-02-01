console.log("============ Exercises ============");
/*
Exercise 1
Make 3 functions:

--- Function that takes a number through a parameter and returns how many digits that number has
--- Function that takes a number through a parameter and returns if its even or odd
--- Function that takes a number through a parameter and returns if its positive or negative

Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.
Ex:
Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative
*/

let numberOfDigits = (number) => {
    let stringNumber = Math.floor(number)
    stringNumber = String(stringNumber)

    if (stringNumber[0] === "-") {
        return stringNumber.length - 1
    }
    return stringNumber.length
}

//  IF DECIMALS ARE COUNTED AS WELL , USE THIS FUNCTION INSTEAD !

// let numberOfDigits = (number) => {
//     let stringNumber = String(number)
//     let digitCounter = stringNumber.length

//     if (stringNumber[0] === "-") {
//         digitCounter--;
//     }
//     if (stringNumber.includes(".")) {
//         digitCounter--;
//     }
//     // console.log('Digit counter', digitCounter);

//     return digitCounter
// }

let evenOdd = (number) => {
    if (number < 0) {
        number = Math.floor(number + 1)  // adjusting the floor method to negative numbers
    }
    else {
        number = Math.floor(number)
    }

    if (number % 2 === 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}

let positiveNegative = (number) => {
    if (number > 0) {
        return "Positive"
    }
    else if (number < 0) {
        return "Negative"
    }
    else {
        return "Zero"
    }
}

let getNumberStats = (number) => {

    return console.log(`The number "${number}" has ${numberOfDigits(number)} Digits, it's ${evenOdd(number)} and ${positiveNegative(number)}`)

}

getNumberStats(22.331)
getNumberStats(-30.9)
getNumberStats(-13.88888)
getNumberStats(0)
getNumberStats(-36.9)



console.log("");
console.log("============ Exercise 02 ============");
/*
Exercise 2
Create 2 variables with arrow functions.

1. First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.

2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.

3. Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.

Ex:
**Input1: ** Person enters 28 **Input2: ** Person enters red **Result: ** The h1 text should change to size 28 and color red
*/


let changeColor = (htmlElement, color) => {
    if (color) {
        return htmlElement.style.color = `${color}`
    }
    return htmlElement.style.color = `black`
}

let changeFontSize = (htmlElement, fontSize) => {
    if (fontSize) {
        return htmlElement.style.fontSize = `${fontSize}px`
    }
    return htmlElement.style.fontSize = `24px`
}

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    let hOne = document.getElementsByTagName('h1')[0];
    let textSize = document.getElementById("text-size").value;
    let color = document.getElementById('color').value;

    changeColor(hOne, color);
    changeFontSize(hOne, textSize);
})



