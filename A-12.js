// Problem Statment: Use the Date object to do the following activities
//   - What is the year today ?
//     - What is the month today as a number ?
//       - What is the date today ?
//         - What is the day today as a number ?
//           - What is the hours now ?
//             - What is the minutes now ?
//               - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let myDate = new Date();
console.log(`The year today is ${myDate.getFullYear()}`);
console.log(`The month today is ${myDate.getMonth()}`);
console.log(`The date today is ${myDate.getDate()}`);
console.log(`The day today is ${myDate.getDay()}`);
console.log(`The hours today is ${myDate.getHours()}`);
console.log(`The minutes today is ${myDate.getMinutes()}`);
console.log(`The number of seconds elapsed from January 1, 1970 is: ${Math.round(myDate.getTime() / 1000)} seconds`);