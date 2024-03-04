// Create an array of country objects
var countries = [
    {
        name: "United States",
        population: 331002651,
        capital: "Washington, D.C."
    },
    {
        name: "Canada",
        population: 38005238,
        capital: "Ottawa"
    },
    {
        name: "United Kingdom",
        population: 67886011,
        capital: "London"
    },
    {
        name: "France",
        population: 65273511,
        capital: "Paris"
    },
    {
        name: "Germany",
        population: 83783942,
        capital: "Berlin"
    }
];
// Display the list of countries with their attributes
console.log("List of countries:");
countries.forEach(function (country) {
    console.log("Country: ".concat(country.name, ", Population: ").concat(country.population, ", Capital: ").concat(country.capital));
});
