// Store the person's name in a variable
var personName = "Khalid Wali Qureshi";
// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Print the person's name in titlecase
console.log("Titlecase:", toTitleCase(personName));
// Function to convert string to titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
