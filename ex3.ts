// Excercise #3:
// =============


//  Name Cases: Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.


// =============== Excercise #3: =============== STARTS FROM HERE ===============
// ==============================================================================



// Store the person's name in a variable
let personName: string = "John Doe";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:", personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));


// =============== Excercise #2: =============== ENDS HERE =======================
// ===============================================================================


// PRACTICE #1: ======== WITH FUNCTION ============== STARTS FROM HERE ===========
// ===============================================================================

// Store the person's name in a variable
let personName: string = "Khalid Wali Qureshi";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:", toTitleCase(personName));


// Function to convert string to titlecase
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


// PRACTICE #1: ======== WITH FUNCTION ============== ENDS HERE ==================
// ===============================================================================
