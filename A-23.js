// Problem Statement: Write a program which tells the number of days in a month, now consider leap year.

// Same code Assignment 22 leap years are included in the code.

let getDaysInMonth = function (month, year) {

  // here january is 1 based
  // Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate();
  // here january is 0 based
  // return new Date(year, month + 1, 0).getDate();
}
console.log(getDaysInMonth(8, 2022));
console.log(getDaysInMonth(2, 2022));
console.log(getDaysInMonth(2, 2016));
console.log(getDaysInMonth(2, 2020));
console.log(getDaysInMonth(10, 2020));
