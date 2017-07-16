console.log ("hi");

var firstSentence = "You are going to see beautiful Canada.";
var secondSentence = "You are going to majestic Peru.";
var thirdSentence = "After taking an amazing road trip.";
var fourthSentence = "After traveling there thousands of miles by bike.";
var fifthSentence = "Once you get there, you are taking a grand food tour.";
var sixthSentence = "Once you get there, you are going backpacking through a national park.";
var seventhSentence = "When you got home from your trip, you were really happy.";
var eighthSentence = "When you got home from your trip, you were really sad.";

window.onload = function(event) {
	var nameInput = document.getElementById("first_name");
	var nameBtn = document.getElementById("name_btn")
	var firstChoice = document.getElementById("choice-one");
	var secondChoice = document.getElementById("choice-two");
	var thirdChoice = document.getElementById("choice-three");
	var fourthChoice = document.getElementById("choice-four");
	var fifthChoice = document.getElementById("choice-five");
	var sixthChoice = document.getElementById("choice-six");
	var seventhChoice = document.getElementById("choice-seven")
	var eighthChoice = document.getElementById("choice-eight")

	firstChoice.onclick = function(event) {
		createRow(firstSentence);
		document.getElementById("first-step").style.display = "none";
	}

	secondChoice.onclick = function(event) {
		createRow(secondSentence);
		document.getElementById("first-step").style.display = "none";
	}

	thirdChoice.onclick = function(event) {
		createRow(thirdSentence);
		document.getElementById("second-step").style.display = "none";
	}

	fourthChoice.onclick = function(event) {
		createRow(fourthSentence);
		document.getElementById("second-step").style.display = "none";
	}

	fifthChoice.onclick = function(event) {
		createRow(fifthSentence);
		document.getElementById("third-step").style.display = "none";
	}

	sixthChoice.onclick = function(event) {
		createRow(sixthSentence);
		document.getElementById("third-step").style.display = "none";
	}

	seventhChoice.onclick = function(event) {
		createRow(seventhSentence);
		document.getElementById("fourth-step").style.display = "none";
	}

	eighthChoice.onclick = function(event) {
		createRow(eighthSentence);
		document.getElementById("fourth-step").style.display = "none";
	}


	nameBtn.onclick = function(event) {
		console.log(event);	
		console.log(nameInput.value);
		createRow("Welcome aboard, " + nameInput.value + ".");
	}

	console.log(nameInput, nameBtn);
}

//this function creates and adds rows to our app

function createRow(words) {
	console.log(words);
	// we need a new div
	var row = document.createElement("div");
	var col = document.createElement("div");
	var p = document.createElement("p");
	p.innerHTML = words;
	row.append(col); //col is a child element
	row.className = "row"
	col.className = "col s12"
	col.append(p);
	console.log(row);
	//append the whole thing to app
	var app = document.getElementById("app");
	app.append(row);
} 

