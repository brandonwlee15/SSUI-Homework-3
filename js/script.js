// Products Page
// i=0;
function addCartQuantity(){
	// console.log(i);
	var cartString = document.getElementById("cart").innerHTML;
	// console.log(cartString);
	var cartQuantity = cartString.substring(cartString.length-2, cartString.length);
	// console.log(cartQuantity);
	// Cast to int then increment by 1
	var cartQuantity = parseInt(cartQuantity) + 1;
	var newString = cartString.substring(0,45) + " " + cartQuantity;
	document.getElementById("cart").innerHTML  = newString;
	// console.log(newString);
	// i=i+1;
}

// Product Details Page
function resetColorSelected(){
	var strawberry = document.getElementById("strawberry");
	strawberry.style.outline = "";
	var blackberry = document.getElementById("blackberry");
	blackberry.style.outline = "";
	var crazyberry = document.getElementById("crazyberry");
	crazyberry.style.outline = "";
	var camouflage = document.getElementById("camouflage");
	camouflage.style.outline = "";
	var nightmoon = document.getElementById("nightmoon");
	nightmoon.style.outline = "";
	var fireorange = document.getElementById("fireorange");
	fireorange.style.outline = "";
}

function strawberrySelected(){
	resetColorSelected();
	var strawberry = document.getElementById("strawberry");
	strawberry.style.outline = "2px solid black";
}

function blackberrySelected(){
	resetColorSelected();
	var blackberry = document.getElementById("blackberry");
	blackberry.style.outline = "2px solid black";
}

function crazyberrySelected(){
	resetColorSelected();
	var crazyberry = document.getElementById("crazyberry");
	crazyberry.style.outline = "2px solid black";
}

function camouflageSelected(){
	resetColorSelected();
	var camouflage = document.getElementById("camouflage");
	camouflage.style.outline = "2px solid black";
}

function nightmoonSelected(){
	resetColorSelected();
	var nightmoon = document.getElementById("nightmoon");
	nightmoon.style.outline = "2px solid black";
}

function fireorangeSelected(){
	resetColorSelected();
	var fireorange = document.getElementById("fireorange");
	fireorange.style.outline = "2px solid black";
}


function resetSizesSelected(){
	var tiny = document.getElementById("tiny");
	tiny.style.outline = "";
	var small = document.getElementById("small");
	small.style.outline = "";
	var medium = document.getElementById("medium");
	medium.style.outline = "";
	var large = document.getElementById("large");
	large.style.outline = "";
}

function tinySelected(){
	resetSizesSelected();
	var tiny = document.getElementById("tiny");
	tiny.style.outline = "2px solid black";
}

function smallSelected(){
	resetSizesSelected();
	var small = document.getElementById("small");
	small.style.outline = "2px solid black";
}

function mediumSelected(){
	resetSizesSelected();
	var medium = document.getElementById("medium");
	medium.style.outline = "2px solid black";
}

function largeSelected(){
	resetSizesSelected();
	var large = document.getElementById("large");
	large.style.outline = "2px solid black";
}

// Cart Page

function decreaseSubtotal(){
	var subtotal = document.getElementById("subtotalPrice").innerHTML;
	subtotal = parseFloat(subtotal.substring(1,subtotal.length));
	// console.log(subtotal);
	// console.log(subtotal - 11.99);
	subtotal = Number((subtotal - 11.99).toFixed(2));
	document.getElementById("subtotalPrice").innerHTML = "$" + subtotal;
	// console.log(subtotal);
}

function decreaseCartQuantity(){
	// console.log(i);
	var cartString = document.getElementById("cart").innerHTML;
	// console.log(cartString);
	var cartQuantity = cartString.substring(cartString.length-2, cartString.length);
	// console.log(cartQuantity);
	// Cast to int then increment by 1
	var cartQuantity = parseInt(cartQuantity) - 1;
	var newString = cartString.substring(0,45) + " " + cartQuantity;
	document.getElementById("cart").innerHTML  = newString;
	decreaseSubtotal();
	// console.log(newString);
	// i=i+1;
}

var catHarnessRemoved = false;
var dogHarnessRemoved = false;
var storageHarnessRemoved = false;
var gpsCollarRemoved = false;

function removeCatHarness(){
	console.log("here?");
	if (catHarnessRemoved === false){
		var catHarnessQuantityString = document.getElementById("catHarnessQuantity").innerHTML;
		// console.log(catHarnessQuantityString);
		var catHarnessQuantity = catHarnessQuantityString.substring(catHarnessQuantityString.length-2, catHarnessQuantityString.length);
		var catHarnessQuantity = parseInt(catHarnessQuantity) - 1;
		var newString = catHarnessQuantityString.substring(0,10) + " " + catHarnessQuantity;
		console.log(newString);
		document.getElementById("catHarnessQuantity").innerHTML = newString;
		decreaseCartQuantity();
		catHarnessRemoved = true;
	}
}

function removeDogHarness(){
	console.log("here?");
	if (dogHarnessRemoved === false){
		var dogHarnessQuantityString = document.getElementById("dogHarnessQuantity").innerHTML;
		// console.log(catHarnessQuantityString);
		var dogHarnessQuantity = dogHarnessQuantityString.substring(dogHarnessQuantityString.length-2, dogHarnessQuantityString.length);
		var dogHarnessQuantity = parseInt(dogHarnessQuantity) - 1;
		var newString = dogHarnessQuantityString.substring(0,10) + " " + dogHarnessQuantity;
		console.log(newString);
		document.getElementById("dogHarnessQuantity").innerHTML = newString;
		decreaseCartQuantity();
		dogHarnessRemoved = true;
	}
}

function removeStorageHarness(){
	console.log("here?");
	if (storageHarnessRemoved === false){
		var storageHarnessQuantityString = document.getElementById("storageHarnessQuantity").innerHTML;
		// console.log(catHarnessQuantityString);
		var storageHarnessQuantity = storageHarnessQuantityString.substring(storageHarnessQuantityString.length-2, storageHarnessQuantityString.length);
		var storageHarnessQuantity = parseInt(storageHarnessQuantity) - 1;
		var newString = storageHarnessQuantityString.substring(0,10) + " " + storageHarnessQuantity;
		console.log(newString);
		document.getElementById("storageHarnessQuantity").innerHTML = newString;
		decreaseCartQuantity();
		storageHarnessRemoved = true;
	}
}

function removeGPSCollar(){
	console.log("here?");
	if (gpsCollarRemoved === false){
		var gpsCollarQuantityString = document.getElementById("gpsCollarQuantity").innerHTML;
		// console.log(catHarnessQuantityString);
		var gpsCollarQuantity = gpsCollarQuantityString.substring(gpsCollarQuantityString.length-2, gpsCollarQuantityString.length);
		var gpsCollarQuantity = parseInt(gpsCollarQuantity) - 1;
		var newString = gpsCollarQuantityString.substring(0,10) + " " + gpsCollarQuantity;
		console.log(newString);
		document.getElementById("gpsCollarQuantity").innerHTML = newString;
		decreaseCartQuantity();
		gpsCollarRemoved = true;
	}
}















