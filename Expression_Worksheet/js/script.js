/* 
Thomas Barlow
March 9, 2015
Expression Worksheet
*/

/* Calculate the area of a rectangle given the width and height */

// Create a function for area of rectangle with width and height as parameters
function rectangleArea(width, height) {
	// calculate the width x height and place in area var
	var area = width * height;
	// log the results to the console
	console.log("The area of the rectangle is " + area + ".");
}; 

// call the function with two parameters
rectangleArea(10, 10);

/* Calculate how old Sparky the pit bull is in dog years */

// Givens are Sparky's age and the results should be Sparky's age in dog years
// Create a function for the Sparky math
function dogYears(dogAge) {
	//do the math and store in age var
	var age = dogAge * 7;
	// log the results to the console with original and new values
	console.log("Sparky is " + dogAge + " human years old which is " + age + " in dog years");
};

// Call the dogYears function
dogYears(4);