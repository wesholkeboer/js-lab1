// const fullName = "Wes Holkeboer";
// let age = 26;
// const birthday = "July 20";
// const detroitGC = true;
// const lifeEvents = [
//   "I went to college at the University of Michigan.",
//   "While there, I worked as a lifeguard.",
//   "Once night, while drunk, I slipped on the ice and fractured my ankle.",
//   "I was not able to work as a lifeguard with a fractured ankle.",
// ];

// if (detroitGC) {
//   console.log(
//     `My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
//   );
// } else {
//   console.log(
//     `My name is ${fullName} and I am a student at Grand Cirucs in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
//   );
// }

// for (let prop of lifeEvents) {
//   console.log(prop);
// }

// for (let i = 0; i < lifeEvents.length; i++) {
//   console.log(lifeEvents[i]);
// }

// let counter = 0;
// let randomNumber = null;
// // console.log(randomNumber);

// while (randomNumber !== 5) {
//   let randomNumber = Math.floor(Math.random() * 10 + 1);
//   if (randomNumber !== 5) {
//     counter++;
//     console.log(`${randomNumber} !== 5`);
//   } else {
//     counter++;
//     console.log(
//       `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
//     );
//     break;
//   }
// }

let hours = 60;
let wage = 12;
let pay = null;
let weeksToAMill = null;

if (hours <= 40) {
  let pay = hours * wage;
  weeksToAMill = 1000000 / pay;
} else {
  let extraHours = hours - 40;
  let pay = 40 * wage + extraHours * (wage * 1.5);
  weeksToAMill = 1000000 / pay;
}
console.log(weeksToAMill);

console.log(
  "it would take ${weeksToAMill} weeks to earn a million dollars if you are paid "
);
