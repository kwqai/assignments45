// Excercise #6:
// =============
//  Stripping Names: Store a person’s name, and include some whitespace
//  characters at the beginning and end of the name. Make sure you use each
//  character combination, "\t" and "\n", at least once. Print the name once, 
//  so the whitespace around the name is displayed. 
//  Then print the name after striping the white spaces.  
// =============== Excercise #6: =============== STARTS FROM HERE ===============
// ==============================================================================
// Store the person's name with whitespace characters
var nameWithWhitespace = "\t \n Khalid Wali \n\t ";
// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);
// Strip the whitespace from the name
var strippedName = nameWithWhitespace.trim();
// Print the stripped name
console.log("Stripped name:", strippedName);
// =============== Excercise #6: =============== ENDS HERE =======================
// ===============================================================================
