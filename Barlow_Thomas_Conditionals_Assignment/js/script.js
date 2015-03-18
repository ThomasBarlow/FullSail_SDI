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
var angleA = 0;
// Angle B
var angleB = 0;
// Angle C
var angleC = 0;

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
while (name === "") {
	name = prompt("Please enter a valid name");
}

// Ask the user what the hour is in 24hr 
timeOfDay = Number(prompt("What is the current hour (in 24h time)"));

// A ternary conditional setting the timeOfDayMessage
// If it is less then or equal to 12 (meaning 1am to 12pm) it will say goodmoring
// If it is anything else if will say goodevening
timeOfDayMessage = (timeOfDay < 12) ? "Goodmorning " + name + "," : "Goodevening " + name + ",";



