// Problem Statement: Figure out the result of the following comparison expression first without using console.log().After you decide the result confirm it using console.log()
//   - 4 > 3
//   - 4 >= 3
//   - 4 < 3
//   - 4 <= 3
//   - 4 == 4
//   - 4 === 4
//   - 4 != 4
//   - 4 !== 4
//   - 4 != '4'
//   - 4 == '4'
//   - 4 === '4'
//   - Find the length of python and jargon and make a falsy comparison statement.

// - 4 > 3 : true
// - 4 >= 3 : true
// - 4 < 3 : false
// - 4 <= 3 : false
// - 4 == 4 : true
// - 4 === 4 : true
// - 4 != 4 : false
// - 4 !== 4 : false
// - 4 != '4' : false
// - 4 == '4' : true
// - 4 === '4' : false

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4');

let word1 = 'python';
let word2 = 'jargon';

console.log(`Falsy comparison is: ${String(word1.length) === word1.length}`);
console.log(`Falsy comparison is: ${String(word2.length) === word2.length}`);
