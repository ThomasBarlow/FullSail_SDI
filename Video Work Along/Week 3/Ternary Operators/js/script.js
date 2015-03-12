// Ternary Operator

var gpa = 48;

// if the gpa is over the min 2.0 score, the student can graduate
/*
if(gpa > 2.0) {
	console.log("You can graduate");
} else {
	console.log("GPA is too low");
}
*/

(gpa > 2.0) ? console.log("You can graduate") : console.log("GPA is too low");

var age = 11;
var book;

//if child is under ten they get green eggs and ham
//otherwise they get The Time Machine

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";

console.log(book);