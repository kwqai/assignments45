

/*


Excercise #43:
==============  


Unchanged Magicians: Start with your work from Exercise 41.
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and 
store it in a separate array. 
Call show_magicians() with each array to show that
you have one array of the original names and
one array with the Great added to each magician’s name.


*/


//  ============== STARTS FROM HERE ===============================================================


// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to modify a copy of the array of magicians
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Array of magician's names
const magician_names: string[] = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Modify a copy of the array of magicians
const great_magicians: string[] = make_great([...magician_names]); // Creating a copy of the array using spread operator

// Call the function to show magicians with original names
show_magicians(magician_names);

console.log(""); // Adding a blank line for separation

// Call the function to show magicians with the Great added to each name
show_magicians(great_magicians);

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================


/*

Shahrukh
David Copperfield
Harry Houdini
Penn Jillette
Teller

List of Magicians:
the Great Shahrukh
the Great David Copperfield
the Great Harry Houdini
the Great Penn Jillette
the Great Teller

*/
