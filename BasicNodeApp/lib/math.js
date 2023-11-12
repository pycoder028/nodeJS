/*
 * Title: Basic NodeApp example
 * Description: Simple node application that print random quotes per second intervel.
 * Author: Forhad Hossain ( callbackMind )
 * Date: 12/11/23 
*/

// Math object - Module scaffolding
const math = {};

// Get a random number integer between two integers (generate random number between two numbers in javascript)
math.getRandomNumber = function getRandomNumber(min, max){
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) +min );
};

// Export the library
module.exports = math;