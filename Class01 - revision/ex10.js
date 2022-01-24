console.log("======= EXERCISE 10 =======");
/*
Reminder App
Create a reminder app

There should be:
1. An input for entering the title
2. An input for entering priority
3. An input for color
4. A textarea for adding a description
5. A button for adding the reminder
6. A button for showing all reminders

When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )

The object should then be added to an array of reminders

When the button for showing all reminders is clicked it should show a table with title, priority, and description columns

The title should be the color of the "color" property

*/

let addReminderBtn = document.getElementById('addReminder')
let showAllBtn = document.getElementById('showAll')
let arrayOfReminders = []
let tableDiv = document.getElementsByTagName('div')[0]


function Reminder(title, priority, color, text) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.text = text;
}

addReminderBtn.addEventListener('click', function addReminder() {
    let title = document.getElementById('title').value;
    let priority = document.getElementById('priority').value;
    let color = document.getElementById('color').value;
    // console.log(color);
    let text = document.getElementById('text').value;

    if (title !== "" && priority !== "" && text !== "") {
        let newReminder = new Reminder(title, priority, color, text);
        arrayOfReminders.push(newReminder);
    }
    console.log(arrayOfReminders);

    document.getElementById('title').value = "";
    document.getElementById('priority').value = "";
    document.getElementById('color').value = "#000000";
    document.getElementById('text').value = "";




    showAllBtn.addEventListener('click', function () {

        let element = "";

        element += `<table>`
        element += `<tr>`
        element += `<td>Title</td>`
        element += `<td>Priority</td>`
        element += `<td>Text</td>`
        element += `</tr>`

        for (let i = 0; i < arrayOfReminders.length; i++) {

            element += `<tr>`
            element += `<td style = "color:${arrayOfReminders[i].color};">${arrayOfReminders[i].title}</td>`
            element += `<td>${arrayOfReminders[i].priority}</td>`
            element += `<td>${arrayOfReminders[i].text}</td>`
            element += `</tr>`
        }

        element += `</table>`

        tableDiv.innerHTML = element
    })

})









