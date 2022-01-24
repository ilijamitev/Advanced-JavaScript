console.log("EXERCISE 09");
/*
Movies renting App
Create a movie renting app

There should be an array of movie names
There should be an input and a search button

When the person enters a name of a movie it should search the array

If the name exists it should show an H1 element that says: "The movie can be rented" in green text

If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text

The input should not be case sensitive ( it should find the movie regardless of capital or small letters )
*/




document.getElementsByTagName('button')[0].addEventListener('click', function () {

    let movies = ["JUMANJI", "RED NOTICE", "YES DAY", "RUSH HOUR"]
    let div = document.getElementsByTagName('div')[0]
    let inputMovie = document.getElementById('search').value
    inputMovie = inputMovie.toUpperCase()
    console.log(inputMovie);
    console.log(movies);

    if (movies.includes(inputMovie) === true) {
        div.innerHTML = `<h1>The movie can be rented</h1>`
        div.style.color = 'green'
    }
    else {
        div.innerHTML = `<h1>The movie can't be rented</h1>`
        div.style.color = 'red'
    }

})




