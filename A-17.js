// Create a human readable time format using the Date time object
//   - YYYY - MM - DD HH: mm
//     - DD - MM - YYYY HH: mm
//       - DD / MM / YYYY HH: mm

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let days = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();

console.log(`Time in YYYY - MM - DD HH: mm is: ${year} - ${month} - ${days} ${hours} : ${minutes}`);
console.log(`Time in DD - MM - YYYY HH: mm is: ${days} - ${month} - ${year} ${hours} : ${minutes}`);
console.log(`Time in DD / MM / YYYY HH: mm is: ${days} / ${month} / ${year} ${hours} : ${minutes}`);

