// Else If

var kidHeight = 52;
var minHeight = 48;
var parentHeight = 45;


if (kidHeight > minHeight) {
	console.log("You can ride");
} else if (kidHeight >= parentHeight) {
	// You can ride with a parent
	console.log("You can ride with a parent");
} else {
	console.log("Gotta grow buddy!");
}