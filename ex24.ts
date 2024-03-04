// Excercise #9:
// =============


/*

More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, 
    greater than and less than, greater than or equal to,
    and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/


// Tests for equality and inequality with strings

const string1: string = "Hello";
const string2: string = "hello";
console.log(string1 === string2);   //  false
console.log(string1 !== string2);   //  true


/*
console.log("Equality test: Is 'apple' == 'apple'? I predict True.");
console.log('apple' == 'apple'); // True

/*
console.log("Inequality test: Is 'apple' != 'orange'? I predict True.");
console.log('apple' != 'orange'); // True

// Tests using the lower case function
console.log("Lowercase test: Is 'HELLO' converted to lowercase 'hello'? I predict True.");
console.log('HELLO'.toLowerCase() == 'hello'); // True

// Numerical tests
console.log("Numerical equality test: Is 5 == 5? I predict True.");
console.log(5 == 5); // True

console.log("Numerical inequality test: Is 10 != 5? I predict True.");
console.log(10 != 5); // True

console.log("Greater than test: Is 10 > 5? I predict True.");
console.log(10 > 5); // True

console.log("Less than test: Is 5 < 10? I predict True.");
console.log(5 < 10); // True

console.log("Greater than or equal to test: Is 3 >= 3? I predict True.");
console.log(3 >= 3); // True

console.log("Less than or equal to test: Is 5 <= 3? I predict False.");
console.log(5 <= 3); // False

// Tests using "and" and "or" operators
console.log("AND operator test: Is (5 > 3) && (7 < 10)? I predict True.");
console.log((5 > 3) && (7 < 10)); // True

console.log("OR operator test: Is (5 > 3) || (5 > 10)? I predict True.");
console.log((5 > 3) || (5 > 10)); // True

// Test whether an item is in an array
const fruits = ['apple', 'banana', 'orange'];
console.log("Array inclusion test: Is 'banana' in the array ['apple', 'banana', 'orange']? I predict True.");
console.log(fruits.includes('banana')); // True

// Test whether an item is not in an array
console.log("Array exclusion test: Is 'grape' not in the array ['apple', 'banana', 'orange']? I predict True.");
console.log(!fruits.includes('grape')); // True

*/