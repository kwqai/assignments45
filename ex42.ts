

/*

Excercise #41:
==============  


Great Magicians: Start with a copy of your program from Exercise 40.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.


*/

//  ============== STARTS FROM HERE ===============================================================



// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to modify the array of magicians
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Array of magician's names
const magician_names: string[] = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Modify the array of magicians
const great_magicians: string[] = make_great(magician_names);

// Call the function to show magicians
show_magicians(great_magicians);

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================



/*

List of Magicians:
the Great Shahrukh
the Great David Copperfield
the Great Harry Houdini
the Great Penn Jillette
the Great Teller

*/