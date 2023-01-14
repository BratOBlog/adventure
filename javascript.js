let titlePartOne= [
"Acolyte",
"Beast",
"Blood",
"Children",
"Gods",
"Hand",
"Jewels",
"Master",
"Paths",
"Plague",
"Prophecy",
"Queen",
"Servant",
"Shadow",
"Sign",
"Song",
"Sword",
"Vengeance",
"Wind",
"Whisper"
]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (titlePartOne.length));
    document.getElementById("titlePartOne").innerHTML = titlePartOne[randomNumber];
}

let titlePartTwo= [
 "of Chaos",
"of  Darkness",
"of Death",
"of Doom",
"of Eternity",
"of Midnight",
"of the Night",
"of Silence",
"of Sorcery",
"of Sorrow",
"of the Boreas",
"of the Deeps",
"of the Ice",
"of the Lost",
"of the Moon",
"of the Mountain",
"of the Necropolis",
"of the Stars",
"of the Tomb",
"of the Wastes"
]

function partTwo() {
    let randomNumber = Math.floor(Math.random() * (titlePartTwo.length));
    document.getElementById("titlePartTwo").innerHTML = titlePartTwo[randomNumber];
}

/* Need to work on this later
function titleFull(){
    document.getElementById("titleFull").innerHTML = titlePartOne + " " + titlePartTwo;
} */

