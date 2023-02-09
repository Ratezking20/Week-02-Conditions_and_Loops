var numberOfPeople = prompt("How many people are in the room?")
var isMorning = prompt("Is it Morning")
var message = ""

for(let i = 0; i <= numberOfPeople; i++) {
    if(isMorning === "yes"){
        alert("Good morning!\n")
    } else { alert("Good afternoon!\n")

    }
} alert(message)