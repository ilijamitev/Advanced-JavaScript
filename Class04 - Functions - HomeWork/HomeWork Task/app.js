console.log("========== May The Force Be With You ==========");
/*
Homework 1
Task 1
Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

Planet Name
Population
Climate
Gravity

1.There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) 
2. There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

Task 2
After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

**API URL: ** https://swapi.dev/api/planets/?page=2
*/

let table = document.getElementById("show-planets-table");
let showPlanetsElement = document.getElementById("display-api-info");
let nextPrevDiv = document.getElementById("next-prev-btn-div");

let nextUrl = null;
let previousUrl = null;


let showPlanets = (planetsInfo, htmlElement, nextUrl, previousUrl) => {
    htmlElement.innerHTML = "";

    for (let planet of planetsInfo.results) {
        htmlElement.innerHTML += `
        <tr>
            <td style="color:red;">${planet.name}</td> <td>${planet.population}</td> <td>${planet.climate}</td> <td>${planet.gravity}</td>
        </tr>`
    }

    let element = "";
    if (nextUrl !== null) {
        element += `<button id="next" name="${nextUrl}">Next Planets</button>`
    }
    if (previousUrl !== null) {
        element += `<button style = "margin-left: 10px" id="previous" name="${previousUrl}">Previous Planets</button>`
    }
    nextPrevDiv.innerHTML = element

};


let getPlanetsApi = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(planetsInfo => {
            console.log(planetsInfo);

            table.removeAttribute('hidden')
            nextUrl = planetsInfo.next;
            previousUrl = planetsInfo.previous;
            showPlanets(planetsInfo, showPlanetsElement, nextUrl, previousUrl)
        })
        .catch(err => {
            console.log("There is a problem!");
        });

};


// EVENTS

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    getPlanetsApi("https://swapi.dev/api/planets/?page=1")
})

nextPrevDiv.addEventListener('click', (event) => {
    let id = event.target.id;
    let name = event.target.name;

    if (id === "next") {
        getPlanetsApi(name)
    }
    if (id === "previous") {
        getPlanetsApi(name)
    }
})

