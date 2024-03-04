//  EXCERCISE #29:
//  ==============

/*

Favorite Fruit: Make a array of your favorite fruits, and
then write a series of independent if statements that check for certain 
fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether 
a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!

*/

//  ==========================  STARTS HERE ======================================


// Define an array of favorite fruits

let favoriteFruits: string[] = ["apple", "banana", "watermelon"];

// Check for certain fruits using independent if statements
if (checkForFruit("apple")) {
    console.log("You really like apples!");
}

if (checkForFruit("banana")) {
    console.log("You really like bananas!");
}

if (checkForFruit("watermelon")) {
    console.log("You really like watermelon!");
}

if (checkForFruit("orange")) {
    console.log("You really like oranges!");
} else {
    console.log("You don't like oranges!");
}

if (checkForFruit("kiwi")) {
    console.log("You really like kiwis!");
} else {
    console.log("You don't like kiwis!");
}

// Function to check if a fruit exists in the favoriteFruits array

function checkForFruit(fruit: string): boolean {
    for (let i = 0; i < favoriteFruits.length; i++) {
        if (favoriteFruits[i] === fruit) {
            return true;
        }
    }
    return false;
}


//  ==========================  ENDS HERE ========================================
