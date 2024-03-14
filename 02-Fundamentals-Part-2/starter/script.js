"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) console.log("i can drive");

// const interface = "Audio";
let person = {
  firstName: "John",
  lastName: "Braugerhausen",
  job: "media",
  hasGf: false,
  friends: ["Michael", "Migel", "Mikhail"],
};
const interestedIn = prompt("What do you want to know about John?");
if (person[interestedIn]) {
  console.log(person[interestedIn]);
} else console.log("we don't know that info sorry");

console.log(`${person.firstName} has ${person.friends.length} 
friends. His first friend's name is ${person.friends[0]}`);
