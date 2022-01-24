console.log("========== EXERCISE 05 ========== ");
/*
Student constructor function

Create a constructor function for Student objects with:
Properties:
firstName
lastName
birthYear
academy
grades - array of numbers

Methods:
getAge() - returns age of student
getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
getGradesAverage() - returns the average of the student grades

Create an array with 3 students
*/
// function Student(params) {

// }
let Student = function (firstName, lastName, birthYear, academy, gradesArray) {
    this.name = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = gradesArray


    this.getAge = function () {
        let currentYear = new Date().getFullYear()
        return currentYear - this.birthYear
    }

    this.getInfo = function () {
        return `This is student ${this.name} ${this.lastName} from the academy ${this.academy}`
    }

    this.getGradesAvg = function () {
        let avgGrade = 0;
        for (let i = 0; i < this.grades.length; i++) {
            avgGrade += this.grades[i]
        }
        return avgGrade / this.grades.length
    }

}

let firstStudent = new Student("ILIJA", "MITEV", 1995, "Code", [10, 9, 8, 10, 10])
console.log(firstStudent);
console.log(firstStudent.getAge());
console.log(firstStudent.getInfo());
console.log(firstStudent.getGradesAvg());

let secondStudent = new Student("ALEKSANDAR", "ALEKSANDROV", 1991, "Graphic desing", [6, 9, 8, 10, 10])

let thirdStudent = new Student("TIJANA", "RADIKJ", 1996, "Cloud ops", [10, 7, 10, 10, 10])

let arrayOfStudents = [firstStudent, secondStudent, thirdStudent]
console.log(arrayOfStudents);






console.log("");
console.log("========== EXERCISE 06 ========== ");
/*
List generator from an array

Create an array of 5 names

Create an HTML page with:
A header
An empty unordered list
A button

When the button is clicked it should fill in the empty unordered list with the names of the array
*/

let arrayOfNames = ["Marko", "Marija", "Mihail", "Sofija", "Luka"];
let uList = document.getElementsByTagName('ul')[0]

document.getElementsByTagName('button')[0].addEventListener('click', function () {
    for (let name of arrayOfNames) {
        uList.innerHTML += `<li>${name}</li>`
    }

})


























