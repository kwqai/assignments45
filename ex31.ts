/*

Excercise #31:
==============

// Array of usernames
let usernames: string[] = [];

// Function to greet users
function greetUsers(usernames: string[]): void {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }

    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Calling the function to greet users
greetUsers(usernames);

// Removing all usernames
usernames = [];

// Calling the function again with an empty array
greetUsers(usernames);


