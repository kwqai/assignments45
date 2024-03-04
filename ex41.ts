
/*

Excercise #41:
==============  




Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.

*/

//  ============== STARTS FROM HERE ===============================================================


// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magician_names: string[] = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the function to show magicians
show_magicians(magician_names);

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================




/*


List of Magicians:
Shahrukh
David Copperfield
Harry Houdini
Penn Jillette
Teller


*/