/*
Thomas Barlow
March 22, 2015
Function Assignment
*/

// Variable to hold the floridaLottery numbers
var floridaLottery = [];
// Variable to hold the powerBallLottery numbers
var powerBallLottery = [];

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
  			// This if statement checks any of the current iterations of the array contain the random number it has stored
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
	// Log to the console the results of the array
	console.log("The Florida Lottery Numbers are: " + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " +
	        										  array[4] + " " + array[5]);
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
  			// This if statement checks any of the current iterations of the array contain the random number it has stored
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
	// Log to the console the results of the array
	console.log("The PowerBall Numbers are: " + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + 
												array[4] + "\n" + "And the final PowerBall Number is: " + array[5]);
	// return the array so that it may be assigned into a variable		    
	return array;
}

playFloridaLottery(floridaLottery);
playPowerBallLottery(powerBallLottery);









