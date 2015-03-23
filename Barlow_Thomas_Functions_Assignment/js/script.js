/*
Thomas Barlow
March 22, 2015
Function Assignment
*/

/********* Begin User Input Section *********/

// Create an array to hold the user entered Florida numbers
var userFloridaNumbers = new Array(6);
// Create an array to hold the user entered PowerBall numbers
var userPowerBallNumbers = new Array(6);

if (confirm("Do you want to play the Florida Lottory?")) {

	/* Floria User Input */
	// Create a for loop to enter values in the userFloridaNumbers array
	for (var i = 0; i < userFloridaNumbers.length; i++) {
		// At each iteration ask the user to enter a valid number, also outputting the different slots for each time
		userFloridaNumbers[i] = Number(prompt("For the Florida Lottery slot #" + (i + 1) + " Please enter a number from 1 - 53: "));
		// Use a while loop to check that the user as input a valid number
		while (userFloridaNumbers[i] === 0 || userFloridaNumbers[i] > 53) {
			// If the user did not enter valid input, ask again with a different statement
			userFloridaNumbers[i] = Number(prompt("Please enter a VALID number from 1 - 53: "));
		}
	}
} else if (confirm("Do you want to play the PowerBall Lotery?")) {
	/* PowerBall User Input */
	// Create a for loop to enter values in the userPowerBallNumbers array
	for (var i = 0; i < userPowerBallNumbers.length - 1; i++) {
		// At each iteration ask the user to enter a valid number, also outputting the different slots for each time
		userPowerBallNumbers[i] = Number(prompt("For the PowerBall Lottery slot #" + (i + 1) + " Please enter a number from 1 - 59: "));
		// Use a while loop to check that the user as input a valid number
		while (userPowerBallNumbers[i] === 0 || userPowerBallNumbers[i] > 59) {
			// If the user did not enter valid input, ask again with a different statement
			userPowerBallNumbers[i] = Number(prompt("Please enter a VALID number from 1 - 59: "));
		}
	}
	// This will fill the final PowerBall number slot with user input
	userPowerBallNumbers[5] = Number(prompt("And for the PowerBall FINAL number: Please enter a number between 1 - 35:"))
	// Use a while loop to check that the user as input a valid number
	while (userPowerBallNumbers[5] === 0 || userPowerBallNumbers[5] > 35) {
		// If the user did not enter valid input, ask again with a different statement
		userPowerBallNumbers[5] = Number(prompt("Please enter a VALID PowerBall FINAL number: Please enter a number between 1 - 35:"));
	}
} 
/********* End User Input Section *********/







//for (var i = 0; i < array.length; i++) {
//	array[i] = Math.ceil(Math.random() * 59));
//	
//}
