
/*

Excercise #35:
==============

Animals: Think of at least three different animals that have a common 
characteristic. Store the names of these animals in a list, and then use a for
loop to print out the name of each animal. • Modify your program to print a
statement about each animal, such as A dog would make a great pet. • Add a
line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!


//  ============== STARTS FROM HERE ===============================================================



// Store the names of animals in a list
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal using a for loop
console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nAnimal Characteristics:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================

/*

// Animals:
// Dog
// Cat
// Rabbit

// Animal Characteristics:
// A dog would make a great pet.
// A cat would make a great pet.
// A rabbit would make a great pet.

// What these animals have in common:
// Any of these animals would make a great pet!

*/




