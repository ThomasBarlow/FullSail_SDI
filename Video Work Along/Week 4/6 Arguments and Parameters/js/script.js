// Arguments and Parameters

var width = 5;

function calcArea(w, h) {
	var area = w * h;
	return area;// function spitting the info out
}




var total = calcArea(30, 20);

function dogYears(age) { //parameters
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old");
}

dogYears(4);//arguments
dogYears(5);