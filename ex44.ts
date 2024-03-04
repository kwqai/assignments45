
/*

Excercise #44:
==============  


Sandwiches: Write a function that accepts a array of items a person 
wants on a sandwich. The function should have one parameter that collects 
as many items as the function call provides, and it should print a summary
of the sandwich that is being ordered. Call the function three times, using
a different number of arguments each time.

*/

//  ============== STARTS FROM HERE ===============================================================



function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        //  console.log("You ordered an empty sandwich.");
        console.log("You ordered an empty sandwich. Please add some ingredients.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log(); // Add an empty line for better readability
}

// Call the function with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Swiss', 'Mayonnaise');
makeSandwich('Peanut Butter', 'Jelly');



//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================




/*

Sandwich Summary:
You ordered a sandwich with the following items:
- Ham
- Cheese
- Lettuce
- Tomato

Sandwich Summary:
You ordered a sandwich with the following items:
- Turkey
- Swiss
- Mayonnaise

Sandwich Summary:
You ordered a sandwich with the following items:
- Peanut Butter
- Jelly




*/


//  =============================================================================
//  =============================================================================




