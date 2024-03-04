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
function storeCarInfo(manufacturer: string, modelName: string, ...extras: [string, any][]): object {
    let carInfo: {[key: string]: any} = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };

    // Store any additional information provided as key-value pairs
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo;
}

// Call the function with required information and additional details
let carDetails = storeCarInfo("Suzuki", "FX-800", ["Color", "Off White"], ["Year", 1984]);

// Print the object to ensure all information is stored correctly
console.log(carDetails);

//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================

/*

{
    Manufacturer: 'Suzuki',
    Model: 'FX-800',       
    Color: 'Off White',    
    Year: 1984
  }

*/  

//  =============================================================================
//  =============================================================================