/*
Thomas Barlow
March 12, 2015
Conditionals Worksheet - Problem 1
*/

// Convert a temp to either C or F depending on what the user has entered
// If the user puts a "C", the calculator should convert to C
// If the user puts a "F", the calculator should convert to F
/* 
 GIVENS 
 Degrees in F or C
 a string holding a "C" or "F"
 */

 // create a variable to hold the number for degrees, a float to have a decimal point
 var temp = Number(prompt("What temperature would you like to convert"));
 // create a variable to hold the type they would like to convert
 var type = prompt("For Celsius type: 'C' for Fahrenheit type: 'F'");
// create a variable to hold the new temperatrure
var newTemp = 0;
if (type === "C") {
	newTemp = (temp - 32) * 5 / 9;
	console.log("The temperature is " + newTemp + " degrees in Celsius.");
} else if (type === "F") {
	newTemp = temp * 9 / 5 + 32;
	console.log("The temperaure is " + newTemp + " degrees in Fahrenheit.");
}

