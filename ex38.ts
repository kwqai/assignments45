
/*

Excercise #38:
==============


Cities: Write a function called describe_city() that accepts the name of a city
and its country. The function should print a simple sentence, such as 
Karachi is in Pakistan. Give the parameter for the country a default value. 
Call your function for three different cities, 
at least one of which is not in the default country.

*/


//  ============== STARTS FROM HERE ===============================================================

/*

//  Define a function called describe_city with default country value

function describe_city(city: string, country: string = 'DefaultCountry'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo'); // Default country will be used

*/

// Define a function called describe_city() to describe cities
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi"); // This statement describes that Karachi is located in Pakistan. Since no country is specified for Karachi, the default country, which is Pakistan, is used.
describe_city("New York", "USA");
describe_city("Paris", "France"); // Adding a city not in the default country





//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================


/*

Karachi is in Pakistan.
New York is in USA.
Paris is in France.

*/