/*
Thomas Barlow
March 10, 2015
Expression Assignment
*/

// This code will take information from a user about 4 grades they have and will compute the average of
// the grade total based on the 4 grades entered.

/* Variables */

// This is the gradeArray that will hold all of the values for the grades 
var gradesArray = [];
// numberOfGrades will hold the total amount of individual grades the user entered
var numberOfGrades = 4;
// gradesTotal will hold the added total of all the grades entered
var gradesTotal = 0;
// averageOfGrades will hold the mathmatical output of gradesTotal divided by numberOfGrades
var averageOfGrades;

/* Promps for user input */

// Prompt 1 that will hold the first grade number
gradesArray[0] = Number(prompt("What is the first grade?"));
// Prompt 2 that will hold the second grade number
gradesArray[1] = Number(prompt("What is the second grade?"));
// Prompt 3 that will hold the third grade number
gradesArray[2] = Number(prompt("What is the third grade?"));
// Prompt 4 that will hold the fourth grade number
gradesArray[3] = Number(prompt("What is the fourth grade?"));

/* Matmatical Operations */

// Although we did not cover loops yet, it was the fastest and cleanest way to add up all the grades
// within the array.  This code loops over the array of grades adding each element together
// and placing that value into the gradesTotal variable
for (var i = 0; i < gradesArray.length; i++) {
	gradesTotal += gradesArray[i];
}

// This operation takes the gradesTotal from the previous loop and divides if by the numberOfGrades entered
var averageOfGrades = gradesTotal / numberOfGrades;

/* Output */

// Create an output to the console telling the amount of grades entered and the average of the grades
console.log("You have entered " + numberOfGrades + " grades. The average of these grades is " + averageOfGrades + ".");

/*
Tested this code out with multiple values for input.
To test the math I entered the number 50 four times
which gave me a total of 200.  The division was correct
because the average I got from that is 50, which makes sense.
*/


























