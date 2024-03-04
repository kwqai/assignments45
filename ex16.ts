// Excercise #16:
// ==============


// =============== Excercise #16: =============== STARTS FROM HERE ===============
// ===============================================================================



//  More Guests: You just found a bigger dinner table, so now more space is 
//  available. Think of three more guests to invite to dinner.

/*

let guestList: string[] = ["Afshaan Iqbal", "Maria Overseas", "Nelum Mandela"];

// Print the initial guest list
console.log("Initial Guest List:");
guestList.forEach(guest => console.log(guest));

// Add three more guests
guestList.push("Ghazal Aftab", "Roshan Parks", "Abida Love");

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList.forEach(guest => console.log(guest));

*/


//  CASE I:
//  =======

//  • Start with your program from Exercise 15. Add a print statement
//  to the end of your program informing people that
//  you found a bigger dinner table.

/*

let guestListNew: string[] = ["Afshaan Iqbal", "Maria Overseas", "Nelum Mandela"];

//  Print the initial guest list
//  console.log("Initial Guest List:");
//  guestListNew.forEach(guest => console.log(guest));

// Add three more guests
guestListNew.push("Ghazal Aftab", "Roshan Parks", "Abida Love");

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestListNew.forEach(guest => console.log(guest));

// Inform people about finding a bigger dinner table
console.log("\nWe have found a bigger dinner table! There's more space available for our guests.");

*/

//  ===========================================================================
//  ===========================================================================





//  ===========================================================================
//  ===========================================================================


//  CASE II:
//  ========

//  • Add one new guest to the beginning of your array.

// Array of initial guests

/*

let guestListNew: string[] = ["Afshaan Iqbal", "Maria Overseas", "Nelum Mandela"];

// Add "Phool" to the beginning of the array
guestListNew = ["Phool", ...guestListNew];

// Add three more guests
guestListNew.push("Ghazal Aftab", "Roshan Parks", "Abida Love");

// Print the updated guest list
console.log("Updated Guest List:");
guestListNew.forEach(guest => console.log(guest));

// Inform people about finding a bigger dinner table
console.log("\nWe have found a bigger dinner table! There's more space available for our guests.");

*/


//  CASE IiI:
//  =========

//  • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.

/*

// Array of initial guests
let guestListNew: string[] = ["Phool", "Afshaan Iqbal", "Maria Overseas", "Nelum Mandela"];

// Add one new guest to the middle of the array
guestListNew.splice(Math.ceil(guestListNew.length / 2), 0, "Gudiya Baji");

// Append one new guest to the end of the list
guestListNew.push("Huma Tahir");

// Print invitation messages for each person in the list
console.log("Invitation Messages:");
guestListNew.forEach(guest => console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of good food and conversation.`));

*/





// BELOW NOT REQUIRED FOR ASSIGRNMENT JUST FOR PRACTICE PURPOSE.

//  =======STARTS============== CASE III  WITH FINAL LIST ======================================

// Array of initial guests
let guestListNew: string[] = ["Phool", "Afshaan Iqbal", "Maria Overseas", "Nelum Mandela"];

// Add one new guest to the middle of the array
guestListNew.splice(Math.ceil(guestListNew.length / 2), 0, "Gudiya Baji");

// Append one new guest to the end of the list
guestListNew.push("Huma Tahir");

// Print invitation messages for each person in the list
console.log("Invitation Messages:");
guestListNew.forEach(guest => console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of good food and conversation.`));

// Print the updated final guest list
console.log("\nUpdated Final Guest List:");
let finalGuestList = '';
for (let i = 0; i < guestListNew.length; i++) {
    finalGuestList += guestListNew[i];
    if (i !== guestListNew.length - 1) {
        finalGuestList += ', ';
    }
}
console.log(finalGuestList);


//  ========ENDS============= CASE III  WITH FINAL LIST ======================================
