
/*

Excercise #37:
==============  

Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and 
a shirt of any size with a different message.


*/

//  ============== STARTS FROM HERE ===============================================================



// Define a function called make_shirt with default values

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

// Call the function with default values
//make_shirt(); // Large shirt with default message
//make_shirt('Medium'); // Medium shirt with default message

// Call the function with different sizes and messages
make_shirt('Small', 'I love TypeScript!');
make_shirt('Large', 'Keep Coding!');
make_shirt('Extra Large', 'Stay Awesome!');



//  ==============  ENDS HERE   =====================================================================




//  ====================== OUT PUT ================================================


/*

The shirt size is Small and it has the message: "I love TypeScript!".
The shirt size is Large and it has the message: "Keep Coding!".
The shirt size is Extra Large and it has the message: "Stay Awesome!".



*/
