/*

Excercise #41:
==============


Great Magicians: Start with a copy of your program from Exercise 40.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.


*/
// Function to show magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to modify the array of magicians
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Array of magician's names
var magician_names = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Modify the array of magicians
var great_magicians = make_great(magician_names);
// Call the function to show magicians
show_magicians(great_magicians);
