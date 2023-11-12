/*
 * Title: Basic NodeApp example
 * Description: Simple node application that print random quotes per second intervel.
 * Author: Forhad Hossain ( callbackMind )
 * Date: 12/11/23 
*/

// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes(){
    // Read the text file containing the quots
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');

    // Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
};

// Export the library
module.exports = quotes;