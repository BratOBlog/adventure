let titlePartOne = [
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

let titlePartTwo = [
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

let missionPool = [
    "Attack (roll place to be attacked)",
    "Decipher (roll thing to be deciphered)",
    "Destroy (roll thing to be destroyed)",
    "Elude (roll person to be eluded)",
    "Escape (roll place to be escaped)",
    "Escort (roll person to be escorted)",
    "Explore (roll place to be explored)",
    "Find (roll thing to be found)",
    "Guard (roll thing to be guarded)",
    "Kidnap (roll person to be kidnapped)",
    "Kill (roll person to be killed)",
    "Locate (roll person to be located)",
    "Protect (roll person to be protected)",
    "Question (roll person to be questioned)",
    "Recover (roll thing to be recovered)",
    "Rescue (roll person to be rescued)",
    "Seek (roll place to be sought)",
    "Steal (roll thing to be stolen)",
    "Transport (roll thing to be transported)",
    "Watch (roll place to be watched)"
]


function mission() {
    let randomNumber = Math.floor(Math.random() * (missionPool.length));
    document.getElementById("mission").innerHTML = missionPool[randomNumber];
}

let missionSubject = [
"Artist / Abyss / Bottle",
"Assassin / Bazaar / Chest"
]


function missionSubject() {
    let randomNumber = Math.floor(Math.random() * (missionSubject.length));
    document.getElementById("missionSubject").innerHTML = missionSubject[randomNumber];
}