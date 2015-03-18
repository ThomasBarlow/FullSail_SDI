/*
Thomas Barlow
March 12, 2015
Conditionals Worksheet - Problem 3
*/

// Create a single conditional that would determine if the tires of a given car are up to spec

// GIVENS
// Pressure for each tire of the car in an array

// An aray for the tires, assuming that the first two elements are the front tires
// and the last two elemets are the back tires
var tires = new Array(4);

// Create a for-loop over the array placing the tire pressure inside the value of the array
for (var i = 0; i < tires.length; i++) {
	// Prompt the user for the tire pressure for each tire
	// Since the array is "0" based we add a "1" to the output since we don't have "0" tires
	tires[i] = Number(prompt("Please enter the pressure for tire " + (i + 1) + ":"));
}

// Conditional checks weather the tire pressure is correct for botht the front and back tires
if (tires[0] === tires[1] && tires[2] === tires[3]) {
	// If the condition is true
	console.log("Your pressure is fine for both the front and the back! You may go!");
} else {
	// If the condition is false
	console.log("Please check the tire pressure again and adjust.");
}