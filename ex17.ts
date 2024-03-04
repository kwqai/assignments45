// Excercise #17:
// ==============


// =============== Excercise #17: =============== STARTS FROM HERE ===============
// ===============================================================================

/*

//  Shrinking Guest List: You just found out that your new dinner table won’t arrive 
//  in time for the dinner, and you have space for only two guests.

// Array of initial guests
let guestListNew: string[] = ["Phool", "Afshaan Iqbal", "Gudiya Baji", "Maria Overseas", "Nelum Mandela", "Huma Tahir"];

// Print the updated final guest list
console.log("Updated Final Guest List:");
let finalGuestList = guestListNew.join(', ');

console.log(finalGuestList);

// Print message indicating that only two people can be invited for dinner
console.log("\nDue to the limited space available, we can only invite two people for dinner.");

*/

//  CASE II:
//  ========

/*


// Array of initial guests
let guestList1: string[] = ["Phool", "Afshaan Iqbal", "Gudiya Baji", "Maria Overseas", "Nelum Mandela", "Huma Tahir"];

// Print the updated final guest list
console.log("Updated Final Guest List:");
console.log(guestList1.join(', '));

// Remove guests until only two names remain
while (guestList1.length > 2) {
    // Remove the last guest from the list
    const removedGuest = guestList1.pop();
    // Print a message to the removed guest
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print message indicating that only two people can be invited for dinner
console.log("\nDue to the limited space available, we can only invite two people for dinner.");

*/

//  CASE II:
//  ========

/*

// Print a message to each of the two people still on your list,
// letting them know they’re still invited.

// Array of initial guests
let guestListNew: string[] = ["Phool", "Afshaan Iqbal", "Gudiya Baji", "Maria Overseas", "Nelum Mandela", "Huma Tahir"];

// Print the updated final guest list
console.log("Updated Final Guest List:");
console.log(guestListNew.join(', '));

// Remove guests until only two names remain
while (guestListNew.length > 2) {
    // Remove the last guest from the list
    const removedGuest = guestListNew.pop();
    // Print a message to the removed guest
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the remaining two guests
guestListNew.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner. Please join us!`);
});

*/


//  ========== WITHOUT FULL LIST BUT SHOWING ONLY 2 GUESTS WHO ARE INVIRED ======

/*

// Array of initial guests
let guestListNew: string[] = ["Phool", "Afshaan Iqbal", "Gudiya Baji", "Maria Overseas", "Nelum Mandela", "Huma Tahir"];

// Remove guests until only two names remain
while (guestListNew.length > 2) {
    // Remove the last guest from the list
    const removedGuest = guestListNew.pop();
    // Print a message to the removed guest
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the remaining two guests
console.log(`Dear ${guestListNew[0]}, you're still invited to dinner. Please join us!`);
console.log(`Dear ${guestListNew[1]}, you're still invited to dinner. Please join us!`);

*/

//  CASE IV:
//  ========

// Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end 
// of your program.

// Array of initial guests
let guestListNew: string[] = ["Phool", "Afshaan Iqbal", "Gudiya Baji", "Maria Overseas", "Nelum Mandela", "Huma Tahir"];

// Remove the last two names from the list
guestListNew.splice(-2);

// Print the final guest list to confirm it's empty
console.log("Final Guest List:");
console.log(guestListNew.join(', '));

















































//  ============== FOR PRACTICE NOT PART OF ASSIGNMENT ===========================

/*

let guestList: string[] = ["Bano Aapa", "Isaac Newton", "New Guest", "Marie Curie", "Nelson Mandela", "Appended Guest"];

// Print the initial guest list
console.log("Initial Guest List:");
guestList.forEach(guest => console.log(guest));

// Shrinking the guest list to accommodate only two guests
let removedGuests = guestList.splice(2);

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList.forEach(guest => console.log(guest));

// Inform guests about the change in plans
console.log("\nDue to unforeseen circumstances, the new dinner table won't arrive in time. We apologize for the inconvenience. Only space for two guests is available.");
console.log("Invitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest},\nYou are cordially invited to dinner with us. We would be honored to have your presence.\n\nSincerely,\n[Your Name]\n`));

// Print the names of the guests who are removed from the list
console.log("\nThe following guests have been removed from the list due to space constraints:");
console.log(removedGuests.join(', '));

*/

//  ============================ OUT PUT =========================================


// Initial Guest List:
// Bano Aapa
// Isaac Newton
// New Guest
// Marie Curie
// Nelson Mandela
// Appended Guest

// Updated Guest List:
// Bano Aapa
// Isaac Newton

// Due to unforeseen circumstances, the new dinner table won't arrive in time. We apologize for the inconvenience. Only space for two guests is available.
// Invitation Messages:
// Dear Bano Aapa,
// You are cordially invited to dinner with us. We would be honored to have your presence.

// Sincerely,
// [Your Name]

// Dear Isaac Newton,
// You are cordially invited to dinner with us. We would be honored to have your presence.

// Sincerely,
// [Your Name]


// The following guests have been removed from the list due to space constraints:
// New Guest, Marie Curie, Nelson Mandela, Appended Guest


//  CASE I:
//  =======


//  Start with your program from Exercise 16. 
//  Add a new line that prints a message saying that 
//  you can invite only two people for dinner.

/*

let guestList: string[] = ["Bano Aapa", "Isaac Newton", "New Guest", "Marie Curie", "Nelson Mandela", "Appended Guest"];

// Print the initial guest list
console.log("Initial Guest List:");
guestList.forEach(guest => console.log(guest));

// Shrinking the guest list to accommodate only two guests
let removedGuests = guestList.splice(2);

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList.forEach(guest => console.log(guest));

// Inform guests about the change in plans
console.log("\nDue to unforeseen circumstances, the new dinner table won't arrive in time. We apologize for the inconvenience.");
console.log("Unfortunately, we can only invite two people for dinner.");

// Print a new set of invitation messages for the remaining guests
console.log("\nInvitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest},\nYou are cordially invited to dinner with us. We would be honored to have your presence.\n\nSincerely,\n[Your Name]\n`));

// Print the names of the guests who are removed from the list
console.log("\nThe following guests have been removed from the list due to space constraints:");
console.log(removedGuests.join(', '));

*/

//  ================== OUT PUT ====================================================

// Initial Guest List:
// Bano Aapa
// Isaac Newton
// New Guest
// Marie Curie
// Nelson Mandela
// Appended Guest

// Updated Guest List:
// Bano Aapa
// Isaac Newton

// Due to unforeseen circumstances, the new dinner table won't arrive in time. We apologize for the inconvenience.
// Unfortunately, we can only invite two people for dinner.

// Invitation Messages:
// Dear Bano Aapa,
// You are cordially invited to dinner with us. We would be honored to have your presence.

// Sincerely,
// [Your Name]

// Dear Isaac Newton,
// You are cordially invited to dinner with us. We would be honored to have your presence.

// Sincerely,
// [Your Name]

// The following guests have been removed from the list due to space constraints:
// New Guest, Marie Curie, Nelson Mandela, Appended Guest


//  ==============================================================================

// CASE II:
// ========


//  Remove guests from your list one at a time until only two names remain
//  in your list. Each time you pop a name from your list, 
//  print a message to that person letting them know 
//  you’re sorry you can’t invite them to dinner.


/*

let guestList: string[] = ["Bano Aapa", "Isaac Newton", "New Guest", "Marie Curie", "Nelson Mandela", "Appended Guest"];

// Print the initial guest list
console.log("Initial Guest List:");
guestList.forEach(guest => console.log(guest));

// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`\nSorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print the remaining guest list
console.log("\nRemaining Guest List:");
guestList.forEach(guest => console.log(guest));

*/

//  ========================== OUT PUT ==========================================

// Initial Guest List:
// Bano Aapa
// Isaac Newton
// New Guest
// Marie Curie
// Nelson Mandela
// Appended Guest

// Sorry, Appended Guest, we can't invite you to dinner.

// Sorry, Nelson Mandela, we can't invite you to dinner.

// Sorry, Marie Curie, we can't invite you to dinner.

// Sorry, New Guest, we can't invite you to dinner.

// Remaining Guest List:
// Bano Aapa
// Isaac Newton


//  ============================================================================

// CASE III:
// =========

//  Print a message to each of the two people still on your list, letting them know
//  they’re still invited.


/*

let guestList: string[] = ["Bano Aapa", "Isaac Newton", "New Guest", "Marie Curie", "Nelson Mandela", "Appended Guest"];

// Print the initial guest list
console.log("Initial Guest List:");
guestList.forEach(guest => console.log(guest));

// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`\nSorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two people still on the list
console.log(`\n${guestList[0]}, you're still invited to dinner.`);
console.log(`${guestList[1]}, you're still invited to dinner.`);

*/


//  ====================== OUT PUT ==============================================

// Initial Guest List:
// Bano Aapa
// Isaac Newton
// New Guest
// Marie Curie
// Nelson Mandela
// Appended Guest

// Sorry, Appended Guest, we can't invite you to dinner.

// Sorry, Nelson Mandela, we can't invite you to dinner.

// Sorry, Marie Curie, we can't invite you to dinner.

// Sorry, New Guest, we can't invite you to dinner.

// Bano Aapa, you're still invited to dinner.
// Isaac Newton, you're still invited to dinner.


// CASE IV:
// ========


//  Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end 
//  of your program.

/*

let guestList: string[] = ["Bano Aapa", "Isaac Newton", "New Guest", "Marie Curie", "Nelson Mandela", "Appended Guest"];

// Print the initial guest list
console.log("Initial Guest List:");
guestList.forEach(guest => console.log(guest));

// Remove the last two names from the list
guestList.splice(-2);

// Print the list to confirm it's empty
console.log("\nUpdated Guest List:");
guestList.forEach(guest => console.log(guest));

*/

//  ===================== OUT PUT ===============================================


// Initial Guest List:
// Bano Aapa
// Isaac Newton
// New Guest
// Marie Curie
// Nelson Mandela
// Appended Guest

// Updated Guest List:

