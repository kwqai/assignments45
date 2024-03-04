/*

    Excercise #45:
    ==============

      Cars: Write a function that stores information about a car in a Object.
      The function should always receive a manufacturer and a model name.
      It should then accept an arbitrary number of keyword arguments.
      Call the function with the required information and
      two other name-value pairs, such as a color or an optional feature.
      Print the Object that’s returned to make sure
      all the information was stored correctly.

*/
//  ============== STARTS FROM HERE ===============================================================
// Define a function to store car information
function storeCarInfo(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };
    // Store any additional information provided as key-value pairs
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        carInfo[key] = value;
    });
    return carInfo;
}
// Call the function with required information and additional details
var carDetails = storeCarInfo("Suzuki", "FX-800", ["Color", "Off White"], ["Year", 1984]);
// Print the object to ensure all information is stored correctly
console.log(carDetails);
//  ==============  ENDS HERE   =====================================================================
//  ====================== OUT PUT ================================================
//  { Manufacturer: 'Toyota', Model: 'Camry', Color: 'Red', Year: 2022 }
