/*
  Thomas Barlow
  3/16/2015
  Conditionals Assignment
*/

// This calculator will give the calculation of the fourth angle in a quadrilateral
// three other angles.  Since all four sides of a  quadrilateral add up to 360 the math will be 
// quite simple.

// Create variables to hold the three values of the three angles
// Angle A
var angleA = "";
// Angle B
var angleB = "";
// Angle C
var angleC = "";
// Angle D
var angleD = 0;

// Since we need to use the ternary conditional with strings I will ask the user for some 
// addiotional input
// variable for their name
var name = "";
// variable for the time of day in 24 hour
var timeOfDay = "";
// variable for the time of day message
var timeOfDayMessage = "";

// Prompt the user for the input
// First ask for their name with an while statement in case the user entered an empty string
name = prompt("Please enter your first name: ")
// Validation while Loop
while (name === "") {
	// prompt for the user
	name = prompt("Please enter a valid name");
}

// Ask the user what the hour is in 24hr with a while statement to validate it
while (timeOfDay === "") { 
	// The prompt for the user
	timeOfDay = Number(prompt("What is the current hour (in 24h time)"));
}

// A ternary conditional setting the timeOfDayMessage
// If it is less then or equal to 12 (meaning 1am to 12pm) it will say goodmoring
// If it is anything else if will say goodevening
timeOfDayMessage = (timeOfDay < 12) ? "Goodmorning " + name + "," : "Goodevening " + name + ",";

// Prompt for angleA while converting it to a number with a while statement to validate it
while (angleA === "" || angleA === 0) {
	angleA = Number(prompt("What is the first angle:"));
}
// Prompt for angleB while converting it to a number with a while statement to validate it
while (angleB === "" || angleB === 0){
	angleB = Number(prompt("What is the second angle:"));
}
// Prompt for angleC while converting it to a number with a while statement to validate it
while (angleC === "" || angleC === 0) {
	angleC = Number(prompt("What is the third angle:"));
}

// Do the math for angleD which is 360 - all the other angles added together
angleD = 360 - (angleA + angleB + angleC);
console.log(angleD);


if (angleA === angleB && angleC === angleD) {
	console.log("You have a perfect square");
} else if (angleA === 90) {
	console.log("Angle A is a right angle.");
} else if (angleB === 90) {
	console.log("Angle B is a right angle.");
} else if (angleC === 90) {
	console.log("Angle C is a right angle.");
} else if (angleD === 90) {
	console.log("Angle D is a right angle.");
}


console.log(angleA + " " + angleB + " " + angleC);










