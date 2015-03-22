/*
Thomas Barlow
March 22, 2015
Function Assignment
*/


var userFloridaNumbers = new Array(6);
var userPowerBallNumbers = new Array(6);

for (var i = 0; i < userFloridaNumbers.length; i++) {
	userFloridaNumbers[i] = Number(prompt("For the Florida Lottery slot #" + (i + 1) + " Please enter a number from 1 - 53: "));
	while (userFloridaNumbers[i] === 0 || userFloridaNumbers[i] > 53) {
		userFloridaNumbers[i] = Number(prompt("Please enter a VALID number from 1 - 53: "));
	}
}

for (var i = 0; i < userPowerBallNumbers.length - 1; i++) {
	userPowerBallNumbers[i] = Number(prompt("For the PowerBall Lottery slot #" + (i + 1) + " Please enter a number from 1 - 59: "));
	while (userPowerBallNumbers[i] === 0 || userPowerBallNumbers[i] > 59) {
		userPowerBallNumbers[i] = Number(prompt("Please enter a VALID number from 1 - 59: "));
	}
}


userPowerBallNumbers[5] = Number(prompt("And for the PowerBall FINAL number: Please enter a number between 1 - 35:"))
while (userPowerBallNumbers[5] === 0 || userPowerBallNumbers[5] > 35) {
	userPowerBallNumbers[5] = Number(prompt("Please enter a VALID PowerBall FINAL number: Please enter a number between 1 - 35:"));
}







//for (var i = 0; i < array.length; i++) {
//	array[i] = Math.ceil(Math.random() * 59));
//	
//}
