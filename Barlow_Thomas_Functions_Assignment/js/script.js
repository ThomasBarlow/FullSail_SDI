/*
Thomas Barlow
March 22, 2015
Function Assignment
*/

/******** Variables ********/

// Variable to hold the floridaLottery numbers
var newFloridaLottery = [];
// Variable to hold the powerBallLottery numbers
var newPowerBallLottery = [];
// Create a variable for the user prompt
var userPrompt;
// variable to hold the result of the function
var floridaLottery ;
// variable to hold the result of the function
var powerBallLottery;

/******** User Input If and While statements ********/

// Prompt the user to enter a value for the userPrompt variable converting the string to lowercase
userPrompt = prompt("Please enter either 'FL' for the Florida Lottery or 'PB' for the PowerBall").toLowerCase();
// While loop to check if the user entered an empty string
while (userPrompt == "") {
	// if an empty string is entered loop for a new response converting the string to lowercase
	userPrompt = prompt("Please enter a valid response 'FL' or 'PB'").toLowerCase();
}
// If loop to run the function if the user wants the Florida Lottery
if (userPrompt == 'fl') {
	// Call the lottery function passing the floridaLottery array
	floridaLottery = playFloridaLottery(newFloridaLottery);
	// Output the results to the console using the updated floridaLottery array
	console.log("The Florida Lottery Numbers are: " + floridaLottery[0] + " " + floridaLottery[1] + " " + floridaLottery[2] + 
												" " + floridaLottery[3] + " " + floridaLottery[4] + " " + floridaLottery[5]);
  // else if they want the PowerBall Lottery		
} else if (userPrompt == 'pb') {
	// call the powerBallLottery function passing the powerBallLottery array
	powerBallLottery = playPowerBallLottery(newPowerBallLottery);
	// Log to the console the results of the array
	console.log("The PowerBall Numbers are: " + powerBallLottery[0] + " " + powerBallLottery[1] + " " + powerBallLottery[2] + 
										  " " + powerBallLottery[3] + " " + powerBallLottery[4] + "\n" 
										      + "And the final PowerBall Number is: " + powerBallLottery[5]);
}

/******** Functions ********/

// Create a function for the Florida Lottery
function playFloridaLottery(array) {
	// Create a while loop to go over the Florida array while the array has less then 6 variables
	while(array.length < 6){
		// Create a variable that holds a random number from 1 to 53
  		var randomnumber = Math.ceil(Math.random() * 53);
  		// The found variable holds a boolean value which we will use to determine weather a number is already in the array
  		var found = false;
  		// Start a for loop iterating over the length of the array
  		for(var i = 0; i < array.length; i++) {
  			// This if statement checks if any of the current iterations of the array contain the random number it has stored
			if (array[i] == randomnumber) {
				// If it does find a match found is set to false
				found = true; 
				// and the for loop breaks out back up to the while loop generating a new random number and checking again
				break;
			}
  		}
 			// If the found variable is false and the random number does not exist in the array 		
  			if (!found) {
  				// Add that random number to the end of the array
  				array[array.length]=randomnumber;
  			}
	}
	// return the array so that it may be assigned into a variable
	return array;
}

// Create a function for the PowerBall Lottery
function playPowerBallLottery(array) {
	// Create a while loop to go over the powerBall array while the array has less then 5 variables
	while(array.length < 5) {
		// Create a variable that holds a random number from 1 to 53
  		var randomnumber = Math.ceil(Math.random() * 59);
  		// The found variable holds a boolean value which we will use to determine weather a number is already in the array
  		var found = false;
  		// Start a for loop iterating over the length of the array
  		for(var i = 0; i < array.length; i++) {
  			// This if statement checks if any of the current iterations of the array contain the random number it has stored
			if (array[i] == randomnumber) {
				// If it does find a match found is set to false
				found = true;
				// and the for loop breaks out back up to the while loop generating a new random number and checking again 
				break;
			}
  		}
  			// If the found variable is false and the random number does not exist in the array 		
  			if (!found) {
  				// Add that random number to the end of the array
  				array[array.length]=randomnumber;
  			}
	}
	// Fill the final power ball slot with a number from 1 - 35
	array[5] = Math.ceil(Math.random() * 35);
	// return the array so that it may be assigned into a variable		    
	return array;
}








