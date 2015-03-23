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
// Create array to hold random Florida numbers
var randomFloridaLottery = new Array(6);
// create array to hold random PowerBall numbers
var randomPowerBallLottery = new Array(6);

// Use an if statement to see if the user wants to play the Florida Lottery
if (confirm("Do you want to play the Florida Lottery?")) {

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
	playFloridaLottery(userFloridaNumbers);
  // And an else if if they want to play the PowerBall Lottery
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
	playPowerBallLottery(randomPowerBallLottery);
} 
/********* End User Input Section *********/

/********* Begin Random Lottery Functions *********/



function playFloridaLottery(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = Math.ceil(Math.random() * 53);
	}
	console.log("The Florida Lottery Numbers are: " + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " +
	        										  array[4] + " " + array[5] + "\n" +
	       	    "Your Florida Lottery Numbers are: " + userFloridaNumbers[0] + " " + userFloridaNumbers[1] + " " + userFloridaNumbers[3] + " " + 
	        									   userFloridaNumbers[4] + " " + userFloridaNumbers[5]);
	return array;
}




function playPowerBallLottery(array) {
	for (var i = 0; i < array.length - 1; i++) {
		array[i] = Math.ceil(Math.random() * 59);
	}
	array[5] = Math.ceil(Math.random() * 35);
	console.log("The PowerBall Numbers are: " + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + 
												array[4] + " " + "And the final PowerBall Number is: " + array[5] + "\n" +
			    "Your PowerBall Numbers are " + userPowerBallNumbers[0] + " " + userPowerBallNumbers[1] + " " + userPowerBallNumbers[2] + " " + 
											    userPowerBallNumbers[3] + " " + userPowerBallNumbers[4] + " " + 
				"And your final PowerBall Number is: " + userPowerBallNumbers[5]);
	return array;
}



/********* End Random Lottery Functions *********/








