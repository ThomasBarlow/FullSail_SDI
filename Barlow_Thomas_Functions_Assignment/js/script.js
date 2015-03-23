/*
Thomas Barlow
March 22, 2015
Function Assignment
*/

/********* Begin User Input Section *********/

var floridaLottery = [];
var powerBallLottery = [];







function playFloridaLottery(array) {
	while(array.length < 6){
  		var randomnumber = Math.ceil(Math.random()*57);
  		var found = false;
  		for(var i = 0; i < array.length; i++) {
			if (array[i] == randomnumber) {
				found = true; 
				break
			}
  		}
  			if (!found) {
  				array[array.length]=randomnumber;
  			}
	}
	console.log("The Florida Lottery Numbers are: " + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " +
	        										  array[4] + " " + array[5]);
	return array;
}


playFloridaLottery(floridaLottery);

// function playPowerBallLottery(array) {
// 	for (var i = 0; i < array.length - 1; i++) {
// 		array[i] = Math.ceil(Math.random() * 59);
// 	}
// 	array[5] = Math.ceil(Math.random() * 35);
// 	console.log("The PowerBall Numbers are: " + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + 
// 												array[4] + " " + "And the final PowerBall Number is: " + array[5]);
			    
// 	return array;
// }

// var arr = []
// while(arr.length < 6){
//   var randomnumber=Math.ceil(Math.random()*57)
//   var found=false;
//   for(var i=0;i<arr.length;i++){
// 	if(arr[i]==randomnumber){found=true;break}
//   }
//   if(!found)arr[arr.length]=randomnumber;
// }
// console.log(arr);



/********* End Random Lottery Functions *********/








