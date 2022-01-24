console.log("EXERCISE 08");
/*
Create a student registry page
Create an HTML page with student registry form with
First Name
Last Name
Age
Email
Create a student generator function
When the form is submitted, the inputs should be compiled into a new object from the generator function Student
This student should be added to a list called "database"
After submit the database should be printed in the console
The input fields should be cleared
*/



let Student = function (firstName, lastName, age, email) {
    this.name = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

let database = []

document.getElementsByTagName('button')[0].addEventListener('click', function () {
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let age = document.getElementById('age').value
    let email = document.getElementById('email').value

    let newStudent = new Student(firstName, lastName, age, email)
    console.log(newStudent);
    database.push(newStudent)

})



