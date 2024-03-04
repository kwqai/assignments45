/*

Excercise #41:
==============




Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.

*/
// Function to show magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magician_names = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the function to show magicians
show_magicians(magician_names);
