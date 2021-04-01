// Each room has a specific murder weapon assigned to it. //
// Additionally every suspect was accounted for at the time of the murder in their respective rooms. //
// This compares the murder room, with the suspect who was in that room as well as what weapon was available. //
// Set the value of room to come to a complete answer at the end. //

// List possible rooms //
let roomList = ['dining room', 'gallery', 'ballroom', 'billiards room']
// List possible suspects //
let suspectList = ['Mr. Parkes', 'Ms. Van Cleve', 'Mrs. Sparr', 'Mr. Kalehoff']
// List possible weapons //
let weaponList = ['knife', 'pool stick', 'trophy', 'poison']

let room = 'dining room';
let weapon;
let suspect;
let solved = false;


if (room = roomList[1]) {
    weapon = weaponList[1]
    suspect = suspectList[1]
} else if (room = roomList[2]) {
    weapon = weaponList[2]
    suspect = suspectList[2]
} else if (room = roomList[3]) {
    weapon = weaponList[3]
    suspect = suspectList[3]
} else if (room = roomList[0]) {
    weapon = weaponList[0]
    suspect = suspectList[0]
} else {
    console.log(`Please identify if the murder room was one of the following options: ${roomList}`)
}
if (weapon != false) {
    solved = true
} else {
    solved = false
}

if (solved = true) {
    console.log(`You have solved the mystery! ${suspect} did the murder in the ${room} using the ${weapon}.`)
}





