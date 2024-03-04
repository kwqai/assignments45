



// Conditional Tests: Write a series of conditional tests.
//  Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and
//  make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and 
// another 5 tests evaluate to False.


let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car !== '5'? I predict True."); // Corrected comparison
console.log(car !== '5');

console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford');

console.log("Is car < 'volvo'? I predict False.");
console.log(car < 'volvo');

console.log("Does car have 6 characters? I predict False."); // Modified statement
console.log(car.length == 6);

console.log("Does car start with 's'? I predict True."); // Alternative approach
console.log(car[0] === 's');
