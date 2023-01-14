let titlePartOne= [1,2,3,4,5,6,7]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (titlePartOne.length));
    document.getElementById("titlePartOne").innerHTML = titlePartOne[randomNumber];
}

let titlePartTwo= [8,9,10,11,12,13,15]

function partTwo() {
    let randomNumber = Math.floor(Math.random() * (titlePartTwo.length));
    document.getElementById("titlePartTwo").innerHTML = titlePartTwo[randomNumber];
}

/* Need to work on this later
function titleFull(){
    document.getElementById("titleFull").innerHTML = titlePartOne + " " + titlePartTwo;
} */

