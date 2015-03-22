/*
Functions Worksheet
Thomas Barlow
March 22, 2015
*/

// Calculate the circumference of a circle
// The formula for circumference is C = 2 * Pi * r

// Create the function with the radius parameter
function circumference(radius) {
	// Create a variable "c" that will store the result of the calculation
	var c = 2 * 3.14 * radius;
	// Log the message to the console
	console.log("The circumference of the circle is: " + c + ".");
	// return th result
	return c;
}

// Call the function passing 10 as an argument
circumference(10);

// Takes 8.666666667 stings per pound to kill.
// Create a function that takes pounds as an argument and tells how many beestings to kill

// Create the beeSting function with pounds as a parameter
function beeStingKiller(pounds) {
	// Create a variable to hold the math
	var stings = pounds * 8.666666667;
	// Log message to the console
	console.log("It takes " + stings + " bee stings to kill this animal.");
	// return the value
	return stings;
}

// Call the beeStingKiller function passing an argument
beeStingKiller(140);