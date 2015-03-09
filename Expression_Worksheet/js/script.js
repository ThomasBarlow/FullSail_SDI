/* 
Thomas Barlow
March 9, 2015
Expression Worksheet
*/

/* Calculate the area of a rectangle given the width and height */

// Create a function for area of rectangle with width and height as parameters
function rectangleArea(width, height) {
	// calculate the width x height and place in area var
	var area = width * height;
	// log the results to the console
	console.log("The area of the rectangle is " + area + ".");
}; 

// call the function with two parameters
rectangleArea(10, 10);

/* Calculate how old Sparky the pit bull is in dog years */

// Givens are Sparky's age and the results should be Sparky's age in dog years
// Create a function for the Sparky math
function dogYears(dogAge) {
	//do the math and store in age var
	var age = dogAge * 7;
	// log the results to the console with original and new values
	console.log("Sparky is " + dogAge + " human years old which is " + age + " in dog years");
};

// Call the dogYears function
dogYears(4);

/* Calculate amount of pizza slices everyone ate at a party */

// Givens are Number of slices per pizza, number of people at the party, and the number of pizzas ordered
// Create a function for the pizza math
function slicesPerPerson(pies, slicesPerPie, numberOfPeople) {
	// The math is number of pies x number of slices divided by number of people
	// Note that the parenthesis are not needed, they are only there to seperate the information
	var amount = (pies * slicesPerPie) / numberOfPeople;
	// log the message to the console
	console.log("Each person ate " + amount + " slices of pizza at the party");
};

// Call the slicesPerPerson function
slicesPerPerson(10, 8, 20);

/* Calculate amount of pizza slices Sparky gets to eat at the party */

// Givens are Number of slices per pizza, number of people at the party, and the number of pizzas ordered
// Create a function for the pizza math
function slicesForSparky(pies, slicesPerPie, numberOfPeople) {
	// The math is number of pies x number of slices then use the remainder of operator for Sparky's amount
	// Note that the parenthesis are not needed, they are only there to seperate the information
	var amount = (pies * slicesPerPie) % numberOfPeople;
	// log the message to the console
	console.log("Sparky got " + amount + " slices of pizza.");
};

// Call the slicesForSparky function
slicesForSparky(4, 8, 10);

/* Average shopping bill */
//  Calculate the total amount spent on groceries and the average per week
//  Givens are an array with five weekly grocery bills

//  Create the grocery array
var groceries = [50, 100, 75, 75, 50];

//  Create a function for the calculation
function groceryTotalAndAverage() {
	// create a variable to hold the groceryTotal
	var groceryTotal = 0;
	// create a variable to hold the grocery average
	var groceryAverage;
	// create a for loop to add the elements of the array
	for (var i = 0; i < groceries.length; i++){
		groceryTotal += groceries[i];
	};
	// Calculate the grocery average
	groceryAverage = groceryTotal / groceries.length;
	// log the results to the console
	console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks.  That is an average of $" + groceryAverage + " per week");
};

// call the groceryTotalAndAverage function
groceryTotalAndAverage();

/* Discounts */
// Calculate discounted price of an item

// Create a function that will calculate the discounted price
function discountedItemPrice(originalPrice, discount, salesTax, description) {
	// Create a var that takes the discount amount and multiplys it by .100 to get the percentage amount
	var discountAmount = (discount * .01) * originalPrice;
	// create a var that holds the new price based off the calculations
	var newPrice = originalPrice - discountAmount;
	//Create a var that takes the salesTax amount and get the percentage
	var tax = (salesTax * .01) * newPrice;
	// new var with tax and price
	var newPriceWithTax = tax + newPrice; 
	// Log results to the console
	console.log("Your " + description + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" + newPrice + " without tax, and $" + newPriceWithTax);
}

// Call the discountedItemPrice function
discountedItemPrice(20, 25, 6, "Shirt");























