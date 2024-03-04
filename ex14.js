// Excercise #14:
// =============
//  Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people 
//  you’d like to invite to dinner. Then use your list to print a message
//  to each person, inviting them to dinner.
// =============== Excercise #14: =============== STARTS FROM HERE ==============
// ==============================================================================
var guestList = ["Laiqua Habib", "Maria Overseas", "Nelum Mandela"];
// Print invitation message to each guest
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner with us. We would be honored to have your presence.\n\nSincerely,\n[Your Name]")); });
// =============== Excercise #14: =============== ENDS HERE =======================
// ===============================================================================
