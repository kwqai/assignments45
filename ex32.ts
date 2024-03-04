/*

Excercise #32:
==============

Checking Usernames: Do the following to create a program that simulates
how websites ensure that everyone has a unique username.

CASE I:
=======

• Make a list of five or more usernames called current_users.

CASE II:
========

======    STARTS FROM HERE    SOLUTION CASE I & CASE II   ========================

// List of current users
const current_users: string[] = ['john', 'alice', 'bob', 'emily', 'charlie'];

// List of new users
const new_users: string[] = ['emily', 'dave', 'john', 'sarah', 'bob'];

console.log("List of current users:", current_users);
console.log("List of new users:", new_users);

=============    ENDS HERE    SOLUTION CASE I & CASE II   ========================


CASE III:
=========

• Make another list of five usernames called new_users.
  Make sure one or two of the new usernames are also in the current_users list.

======    STARTS FROM HERE    SOLUTION CASE I,II,III & IV   ========================






• Loop through the new_users list to see 
  if each new username has already been used. If it has, 
  print a message that the person will need to enter a new username. 
  If a username has not been used,
  print a message saying that the username is available.

• Make sure your comparison is case insensitive.
  If 'John' has been used, 'JOHN' should not be accepted.

*/

//  =================================================================================
//  =================================================================================

/*

// List of current users
const current_users: string[] = ['john', 'alice', 'bob', 'emily', 'charlie'];


// List of new users
const new_users: string[] = ['emily', 'dave', 'john', 'sarah', 'bob'];



//  ==============================================================================
//  ==============================================================================



// Loop through new_users to check if each username is available
for (const new_user of new_users) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    const lowercase_new_user = new_user.toLowerCase();
    const lowercase_current_users = current_users.map(user => user.toLowerCase());

    // Check if the lowercase version of the new username is in the list of lowercase current usernames
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}

*/

//  =================================================================================
//  =================================================================================
/*
// List of current users
const current_users: string[] = ['john', 'alice', 'bob', 'emily', 'charlie'];

// List of new users
const new_users: string[] = ['emily', 'dave', 'john', 'sarah', 'bob'];

// Loop through new_users to check if each username is available
for (const new_user of new_users) {
    // Check if the new username is in the list of current usernames
    if (current_users.includes(new_user)) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}

*/

/*

================================================================================
================================================================================

// List of current users
const current_users: string[] = ['John', 'Alice', 'Bob', 'Emily', 'Charlie'];

// List of new users
const new_users: string[] = ['Emily', 'Dave', 'John', 'Sarah', 'Bob'];

// Convert all usernames in current_users to lowercase for case-insensitive comparison
const lowercase_current_users: string[] = current_users.map(user => user.toLowerCase());

// Loop through new_users to check if each username is available
for (const new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    const lowercase_new_user: string = new_user.toLowerCase();

    // Check if the lowercase version of the new username is in the list of lowercase current usernames
    const index = lowercase_current_users.indexOf(lowercase_new_user);
    if (index !== -1) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}

==================================================================================
==================================================================================

*/