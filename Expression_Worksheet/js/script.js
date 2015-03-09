/* 
Thomas Barlow
March 9, 2015
Expression Worksheet
*/

// Calculate the area of a rectangle given the width and height

// Create a function for area of rectangle with width and height as parameters
function rectangleArea(width, height) {
	// calculate the width x height and place in area var
	var area = width * height;
	// log the results to the console
	console.log("The area of the rectangle is " + area + ".");
}; 

// call the function with two parameters
rectangleArea(10, 10);