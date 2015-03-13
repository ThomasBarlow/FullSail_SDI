/*
Thomas Barlow
March 12, 2015
Conditionals Worksheet - Problem 2
*/

// Determine the appropriate letter grade for the number using conditional statements

/*
 GIVENS
 grade
*/

// Create a variable that gets the grade from a prompt from the user
var grade = prompt("Please enter the grade.");

// Create conditionals to check the grade 
if (grade <=100 && grade >=95) {
	console.log("You have an " + grade + "% which means you have earned an A+ in the class!");
} else if (grade <= 94 && grade >=90) {
	console.log("You have an " + grade + "% which means you have earned an A in the class!");
} else if (grade <= 89 && grade >=85) {
	console.log("You have an " + grade + "% which means you have earned an B+ in the class!");
} else if (grade <= 84 && grade >= 80) {
	console.log("You have an " + grade + "% which means you have earned an B in the class!");
} else if (grade <= 79 && grade >= 76) {
	console.log("You have an " + grade + "% which means you have earned an C+ in the class!");
} else if (grade <= 75 && grade >= 73) {
	console.log("You have an " + grade + "% which means you have earned an C in the class!");
} else if (grade <= 72 && grade >= 70) {
	console.log("You have an " + grade + "% which means you have earned an D in the class!");
} else if (grade <= 69 && grade >= 0) {
	console.log("You have an " + grade + "% which means you have earned an F in the class!");
} else {
	console.log("Please enter a valid grade");
}