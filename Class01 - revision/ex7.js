console.log("Exercise 07");
/*
List Generator dynamically from inputs
Create 3 inputs:
Color
FontSize
Items

Create a button for generating unordered lists

When the button is clicked generate a new ul element with the color, font size, and items from the inputs

Items should be added separated by, in the input

*/

document.getElementsByTagName('button')[0].addEventListener('click', function () {
    let color = document.querySelector("#color").value
    let fontSize = document.querySelector('#fontSize').value
    let items = document.querySelector('#items').value
    let div = document.getElementsByTagName('div')[0]

    let element = ""
    element += `<ul>
    <li>${color}</li>   
    <li>${fontSize}</li>
    <li>${items}</li></ul>`
    div.innerHTML = element
})










