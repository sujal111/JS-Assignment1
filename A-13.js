// problem Statement: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle(area = 0.5 x b x h).
let b = prompt("Enter the base of a triangle");
let h = prompt("Enter the height of a triangle");
console.log(`The area of a triangle is: ${0.5 * b * h}`);

// it will not run in node.js runtime environment as prompt is a window object, it will run in console.log