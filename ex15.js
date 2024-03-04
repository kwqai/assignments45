// Excercise #15:
// ==============
//  Changing Guest List: You just heard that one of your guests can’t make the
//  dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
//  CASE I:
//  =======
//  • Start with your program from Exercise 14. 
//  Add a print statement at the end of your program 
//  stating the name of the guest who can’t make it.
// =============== Excercise #15: =============== STARTS FROM HERE ===============
// ==============================================================================
/*

let guestList: string[] = ["Laiqua Habib", "Maria Overseas", "Nelum Mandela"];

// Print invitation message to each guest
guestList.forEach(guest => console.log(`Dear ${guest},\nYou are cordially invited to dinner with us. We would be honored to have your presence.\n\nSincerely,\n[Your Name]`));

// Simulating a guest who can't make it
let unableToAttend: string = "Laiqua Habib";

console.log(`\nUnfortunately, ${unableToAttend} can't make it to the dinner.`);


*/
// =============== Excercise #15: =============== ENDS HERE =======================
// ===============================================================================
//  ============================ OR =============================================
//  =============================================================================
/*

let guestList: string[] = ["Laiqua Habib", "Maria Overseas", "Nelum Mandela"];

// Print invitation message to each guest
guestList.forEach(guest => console.log(`Dear ${guest},\nYou are cordially invited to dinner with us. We would be honored to have your presence.\n\nSincerely,\n[Your Name]`));

// Simulating a guest who can't make it
let unableToAttend: string = "Laiqua Habib";

console.log(`\nUnfortunately, ${unableToAttend} can't make it to the dinner.`);

// Update guest list
guestList = guestList.filter(guest => guest !== unableToAttend);

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList.forEach(guest => console.log(guest));

*/
//  =============================================================================
//  CASE II:
//  ========
//  Modify your list, replacing the name of the guest who can’t make it
//  with the name of the new person you are inviting.
/*

let guestList: string[] = ["Laiqua Habib", "Maria Overseas", "Nelum Mandela"];

// Print invitation message to each guest
guestList.forEach(guest => console.log(`Dear ${guest},\nYou are cordially invited to dinner with us. We would be honored to have your presence.\n\nSincerely,\n[Your Name]`));

// Simulating a guest who can't make it
let unableToAttend: string = "Laiqua Habib";
let newInvitee: string = "Afshaan Iqbal";

console.log(`\nUnfortunately, ${unableToAttend} can't make it to the dinner.`);

// Replace the name of the guest who can't make it with the name of the new person being invited
guestList = guestList.map(guest => guest === unableToAttend ? newInvitee : guest);

// Print the updated guest list
console.log("\nUpdated Guest List:");
guestList.forEach(guest => console.log(guest));

*/
//  ==============================================================================
//  CASE III:
//  =========
//  Print a second set of invitation messages,
//  one for each person who is still in your list.
var guestList = ["Afshaan Iqbal", "Maria Overseas", "Nelum Mandela"];
// Print invitation message to each guest
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner with us. We would be honored to have your presence.\n\nSincerely,\n[Your Name]\n")); });
// Print the updated guest list
console.log("Updated Guest List:");
guestList.forEach(function (guest) { return console.log(guest); });
// Print invitation message to each guest still on the list
console.log("\nSecond Set of Invitation Messages:");
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ",\nYou are heartily invited to dinner with us. We would be honored to have your presence.\n\nSincerely,\n[Your Name]\n")); });
//  =============================================================================
//  ======================== OUT PUT ============================================
