function story() {
    newQuote();
    partTwo();
    mission();
    missionTwo();
    hookPrint();
    villain();
    ally();
    complication();
    plotTwist();
    reward();
}


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

let allyPool = [
    "Aged warrior seeking one last battle",
    "Charismatic leader of a slave revolt",
    "Demon seeking the soul of antagonist",
    "Disgruntled servant of antagonist",
    "Escaped prisoner",
    "Friendly witch",
    "Honorable captain of the guard",
    "Local ruler whose throne was usurped",
    "Naïve and virtuous young warrior",
    "Priest who speaks for the gods",
    "Rival of antagonist",
    "Rogue adventurer seeking the same goal",
    "Strangely intelligent animal",
    "Streetwise urchin",
    "Sybil with an important prophecy",
    "Unworldly scholar with vital information",
    "Vengeful spirit",
    "Victim of antagonist seeking revenge",
    "Villain who wants to be redeemed",
    "Wise sage with useful lore"
]

function ally() {
    let randomNumber = Math.floor(Math.random() * (allyPool.length));
    document.getElementById("ally").innerHTML = allyPool[randomNumber];
}

let complicate = [
    "Armed guards",
    "Assassins",
    "Bandits or pirates",
    "Concealment, deception, or secrecy",
    "Curse (real or imaginary)",
    "Deadly environment",
    "Dishonesty and greed of populace",
    "Great distance",
    "Inscription that needs translated",
    "Lack of supplies",
    "Limited time",
    "Looming natural or unnatural disaster",
    "Magical wards or guards",
    "Monster",
    "Native cannibals or headhunters",
    "Physical barrier",
    "Riddle that must be solved",
    "Roaming savage beasts",
    "Thieves",
    "Wrong or misleading information"
]

function complication() {
    let randomNumber = Math.floor(Math.random() * (complicate.length));
    document.getElementById("complication").innerHTML = complicate[randomNumber];
}

let twist = [
    "Adventure locale is a Potemkin village and supposed mission assigned to main characters is a sinister experiment",
    "Antagonist is a main character from another time or reality",
    "Antagonist is an ally or friend in disguise",
    "Antagonist is actually pursuing a worthy goal",
    "Antagonist is actually the puppet of another (roll on Antagonist table to determine actual Antagonist)",
    "Apparently mundane is actually supernatural",
    "Apparently supernatural is actually mundane",
    "Betrayal by supposed ally or friend",
    "Distortion of time or space in adventure locale",
    "Entire adventure is actually a delusion or dream",
    "Entire adventure is actually the jest of a mad god",
    "Forced to ally with enemy or rival",
    "Goals and motivations of an important secondary characters have been misrepresented",
    "Important secondary character has a twin brother or sister, leading to mass confusion",
    "Original mission is actually a red herring (roll on Mission table to determine actual mission)",
    "Original mission is actually a trap and actual mission is to survive and escape",
    "Original mission is actually a wild goose chase, and new mission is revenge on perpetrator",
    "Portion of adventure is a wild goose chase",
    "Portion of adventure is actually a delusion or dream",
    "Success in mission leads to unexpected and dire consequences"
]

function plotTwist() {
    let randomNumber = Math.floor(Math.random() * (twist.length));
    document.getElementById("plotTwist").innerHTML = twist[randomNumber];
}

let rewardPool = [
"Clue to another adventure",
"Desirable lover",
"Exotic spices or lotuses",
"Favor of a cult or deity",
"Favor of powerful character",
"Lots of gold",
"Loyal henchman",
"Magical armour, shield, or weapon",
"Pardon for crimes",
"Potion or alchemical preparation",
"Precious jewels",
"Rare and wondrous steed",
"Rare furs or silks",
"Scroll of spells, magic ring, magic wand, or other magic item",
"Wench or manservant",
"Property in the town, city or fort in the land",
"Portal to a mystic land",
"Portal to home land of main character",
"New band of allies",
"Nothing but their miserable hides"
]

function reward() {
    let randomNumber = Math.floor(Math.random() * (rewardPool.length));
    document.getElementById("reward").innerHTML = rewardPool[randomNumber];
}


