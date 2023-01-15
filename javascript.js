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
"Assassin / Bazaar / Chest",
"Beggar / Brothel / Cloak",
"Craftsman / Catacombs / Crown",
"Dancer / Cavern / Crystal",
"Eunuch / Fortress / Dagger",
"Foreigner / Garden / Helm",
"Harlot / Island / Idol",
"Merchant / Mansion / Jewel",
"Noble / Mountain / Lens",
"Peasant / Oasis / Mask",
"Pirate / Palace / Meteorite",
"Poet / Pool / Ring",
"Priest / Prison / Sarcophagus",
"Scholar / Sanctuary / Scroll",
"Servant / Shrine / Seal",
"Slave / Storehouse / Skull",
"Sorcerer / Tomb / Sword",
"Thief / Tower / Tablet",
"Warrior / Valley / Tome",
]


function missionTwo() {
    let randomNumber = Math.floor(Math.random() * (missionSubject.length));
    document.getElementById("missionTwo").innerHTML = missionSubject[randomNumber];
}

let hook = [
"Ambushed and left for dead",
"Arrested and pressed into service of local warlord",
"Asked as a favor",
"Blackmailed",
"Cursed by a god",
"Dared or had courage questioned",
"Found old map",
"Geased by a sorcerer",
"Had a dream or vision",
"Heard a prophecy",
"Heard a song or poem",
"Hired as mercenary",
"Lost or shipwrecked",
"Made a wager",
"Ordered by superior",
"Overheard conversation",
"Read ancient scroll or tablet",
"Repaying a debt",
"Stumbled into situation",
"Wronged and seeking revenge"
]

function hookPrint() {
    let randomNumber = Math.floor(Math.random() * (hook.length));
    document.getElementById("hookPrint").innerHTML = hook[randomNumber];
}

let villainPool = [
    "Angry ghost",
    "Bandit chieftain",
    "Brutal warlord",
    "Corrupt official",
    "Cult leader",
    "Cunning madman",
    "Debauched noble",
    "Demonized wretch",
    "Depraved monk",
    "Deranged alchemist",
    "Evil sorcerer",
    "Fanatical priest",
    "Greedy merchant",
    "King of thieves",
    "Obsessed scholar",
    "Pirate captain",
    "Ruthless slaver",
    "Sadistic torturer",
    "Sardonic harlequin",
    "Sinister revenant"
    ]
    
    function villain() {
        let randomNumber = Math.floor(Math.random() * (villainPool.length));
        document.getElementById("villain").innerHTML = villainPool[randomNumber];
    }