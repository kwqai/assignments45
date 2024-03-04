/*


Excercise #43:
==============


Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and
store it in a separate array.
Call show_magicians() with each array to show that
you have one array of the original names and
one array with the Great added to each magician’s name.


*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  ============== STARTS FROM HERE ===============================================================
// Function to show magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to modify a copy of the array of magicians
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
// Modify a copy of the array of magicians
var great_magicians = make_great(__spreadArray([], magician_names, true)); // Creating a copy of the array using spread operator
// Call the function to show magicians with original names
show_magicians(magician_names);
console.log(""); // Adding a blank line for separation
// Call the function to show magicians with the Great added to each name
show_magicians(great_magicians);
//  ==============  ENDS HERE   =====================================================================
//  ====================== OUT PUT ================================================
/*

List of Magicians:
David Copperfield
Harry Houdini
Penn Jillette
Teller

List of Magicians:
the Great David Copperfield
the Great Harry Houdini
the Great Penn Jillette
the Great Teller

*/
