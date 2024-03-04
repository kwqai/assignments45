// Excercise #18:
// ==============
//  Seeing the World: Think of at least five places in the world 
//  you’d like to visit.
// =============== Excercise #18: =============== STARTS FROM HERE ===============
// ===============================================================================
// Define a list of five places in the world to visit
/*
let placesToVisit: string[] = [
    "Paris, France",
    "Kyoto, Japan",
    "Santorini, Greece",
    "Machu Picchu, Peru",
    "Great Barrier Reef, Australia"
];

// Print the list of places to visit
console.log("Places I'd Like to Visit:");
placesToVisit.forEach(place => console.log(place));

*/
// =============== Excercise #18: =============== ENDS HERE =======================
// ===============================================================================
//  CASE I:
//  =======
//  Store the locations in a array.
//  Make sure the array is not in alphabetical order. 
// CASE I: STARTS FROM HERE ===============
// ========================================
// Define a list of places in the world to visit (not in alphabetical order)
/*

let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Print the list of places to visit
console.log("Places I'd Like to Visit:");
placesToVisit.forEach(place => console.log(place));

*/
// CASE I: ENDS HERE ============================================================
// ==============================================================================
//  CASE II:
//  ========
//  Print your array in its original order.
// CASE II: STARTS FROM HERE ==============
// ========================================
// Define a list of places in the world to visit (not in alphabetical order)
/*

let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Print the list of places to visit in its original order
console.log("Places I'd Like to Visit (Original Order):");
for (let place of placesToVisit) {
    console.log(place);
}

*/
// CASE II: ENDS HERE ============================================================
// ===============================================================================
//  CASE III:
//  ========
//  Print your array in alphabetical order without modifying the actual list.
// CASE III: STARTS FROM HERE ===============
// ==========================================
// Define a list of places in the world to visit (not in alphabetical order)
/*

let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Create a copy of the original array
let sortedPlaces: string[] = [...placesToVisit];

// Sort the copy in alphabetical order
sortedPlaces.sort();

// Print the sorted array without modifying the original list
console.log("Places I'd Like to Visit (Alphabetical Order):");
for (let place of sortedPlaces) {
    console.log(place);
}

*/
// CASE III: ENDS HERE ==========================================================
// ==============================================================================
//  CASE IV:
//  ========
//  Show that your array is still in its original order by printing it.
// CASE IV: STARTS FROM HERE ===============
// ==========================================
/*

// Define a list of places in the world to visit (not in alphabetical order)
let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Create a copy of the original array
let sortedPlaces: string[] = [...placesToVisit];

// Sort the copy in alphabetical order
sortedPlaces.sort();

// Print the sorted array without modifying the original list
console.log("Places I'd Like to Visit (Alphabetical Order):");
for (let place of sortedPlaces) {
    console.log(place);
}

// Print the original array to show it is still in its original order
console.log("\nOriginal Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

*/
// CASE IV: ENDS HERE ===========================================================
// ==============================================================================
//  CASE  V:
//  ========
//  Print your array in reverse alphabetical order without 
//  changing the order of the original list.
// CASE V: STARTS FROM HERE =================
// ==========================================
/*

// Define a list of places in the world to visit (not in alphabetical order)
let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Create a copy of the original array
let reverseSortedPlaces: string[] = [...placesToVisit];

// Sort the copy in reverse alphabetical order
reverseSortedPlaces.sort((a, b) => b.localeCompare(a));

// Print the sorted array without modifying the original list
console.log("Places I'd Like to Visit (Reverse Alphabetical Order):");
for (let place of reverseSortedPlaces) {
    console.log(place);
}


*/
// CASE  V: ENDS HERE ===========================================================
// ==============================================================================
//  CASE  VI:
//  =========
//  Show that your array is still in its original order by printing it again.
// CASE VI: STARTS FROM HERE =================
// =================================I=========
/*

// Define a list of places in the world to visit (not in alphabetical order)
let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Create a copy of the original array
let reverseSortedPlaces: string[] = [...placesToVisit];

// Sort the copy in reverse alphabetical order
reverseSortedPlaces.sort((a, b) => b.localeCompare(a));

// Print the sorted array without modifying the original list
console.log("Places I'd Like to Visit (Reverse Alphabetical Order):");
for (let place of reverseSortedPlaces) {
    console.log(place);
}

// Print the original array to show it is still in its original order
console.log("\nOriginal Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

*/
// CASE VI: ENDS HERE ===========================================================
// ==============================================================================
//  CASE  VII:
//  ==========
//  Reverse the order of your list. 
//  Print the array to show that its order has changed.
// CASE VII: STARTS FROM HERE =================
// ==================================I=========
/*

// Define a list of places in the world to visit (not in alphabetical order)
let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Reverse the order of the list
placesToVisit.reverse();

// Print the reversed array to show the changed order
console.log("Reversed Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

*/
// CASE VII: ENDS HERE ==========================================================
// ==============================================================================
//  CASE  VIII:
//  ===========
//  Reverse the order of your list again. 
//  Print the list to show it’s back to its original order.
// CASE VIII: STARTS FROM HERE =================
// ===================================I=========
/*

// Define a list of places in the world to visit (not in alphabetical order)
let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();

// Print the array to show it's back to its original order
console.log("Original Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

*/
// CASE VIII: ENDS HERE ==========================================================
// ===============================================================================
//  CASE  IX:
//  =========
//  Sort your array so it’s stored in alphabetical order.
//  Print the array to show that its order has been changed.
// CASE IX: STARTS FROM HERE ===================
// ===================================I=========
/*

// Define a list of places in the world to visit (not in alphabetical order)
let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];

// Sort the array in alphabetical order
placesToVisit.sort();

// Print the sorted array to show the changed order
console.log("Sorted Order of Places to Visit:");
for (let place of placesToVisit) {
    console.log(place);
}

*/
// CASE IX: ENDS HERE ============================================================
// ===============================================================================
//  CASE   X:
//  =========
//  Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.
// CASE  X: STARTS FROM HERE ===================
// ===================================I=========
// Define a list of places in the world to visit (not in alphabetical order)
var placesToVisit = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Paris, France",
    "Great Barrier Reef, Australia"
];
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
// Print the sorted array to show the changed order
console.log("Reverse Alphabetical Order of Places to Visit:");
for (var _i = 0, placesToVisit_1 = placesToVisit; _i < placesToVisit_1.length; _i++) {
    var place = placesToVisit_1[_i];
    console.log(place);
}
// CASE  X: ENDS HERE ============================================================
// ===============================================================================
