/*
 * Title: Basic NodeApp example
 * Description: Simple node application that print random quotes per second intervel.
 * Author: Forhad Hossain ( callbackMind )
 * Date: 12/11/23 
*/

// Dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Funciton that prints a random quote
app.printAQoute = function printAQoute(){
    // Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get the length of quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at the position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQoute function as it goes
app.indefiniteLoop = function indefiniteLoop(){
    // Create the interval, using the config variable defined above
    setInterval(app.printAQoute, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();