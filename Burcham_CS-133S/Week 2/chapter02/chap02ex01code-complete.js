/*
Name: chap02ex01code.js
Desc: functions used in chap02ex01.htm demonstrate basic use of operators, variables, and functions
Date:
Created by:
*/

/*
name: $
desc: gets an object referred to by its unique id value
inputs:
 -theId: textstring representing the id attribute value of the object
return:
 -the object with the designated id
*/
function $(theId)
{
	return window.document.getElementById(theId);
}

//==================================== calculate results for the "working with numbers" section =======================
/*
name: getFirstResult
desc: completes the first result calculation
inputs:
 -theFirstNum: the first number
 -theSecondNum: the second number
return:
 -calculation shown on page
*/
function getFirstResult(theFirstNum, theSecondNum) 
{
	return theFirstNum + theSecondNum / 2;
} 

/*
name: getSecondResult
desc: completes the second result calculation
inputs:
 -theFirstNum: the first number
 -theSecondNum: the second number
return:
 -calculation shown on page
*/
function getSecondResult(theFirstNum, theSecondNum) 
{
	return (theFirstNum + theSecondNum) / 2;
} 

/*
name: getThirdResult
desc: completes the third result calculation
inputs:
 -theFirstNum: the first number
 -theSecondNum: the second number
return:
 -calculation shown on page
*/
function getThirdResult(theFirstNum, theSecondNum) 
{
	return theFirstNum % theSecondNum;
} 

/*
name: getFourthResult
desc: completes the fourth result calculation
inputs:
 -theFirstNum: the first number
 -theSecondNum: the second number
return:
 -calculation shown on page
*/
function getFourthResult(theFirstNum, theSecondNum) 
{
	return theFirstNum + theFirstNum % theSecondNum;
} 

//==================================== calculate results for the "working with text" section ==========================
/*
name: getFifthResult
desc: completes the fifth result calculation
inputs:
 -theFirstString: the first string of text
 -theSecondString: the second string of text
return:
 -calculation shown on page
*/
function getFifthResult(theFirstString, theSecondString) 
{
	return theFirstString + theSecondString;
}

/*
name: getSixthResult
desc: completes the sixth result calculation
inputs:
 -theFirstString: the first string of text
 -theSecondString: the second string of text
return:
 -calculation shown on page
*/
function getSixthResult(theFirstString, theSecondString) 
{
	return theFirstString + " " + theSecondString;
}


//==================================== calculate results for the "working with logic" section =========================
/*
name: getSeventhResult
desc: completes the seventh result calculation
inputs:
 -theCityString: the string of text representing the chosen city
 -theCarsInteger: the integer representing the number of cars
return:
 -Boolean value indicating whether the statement shown evaluates to 'true' or 'false'
*/
function getSeventhResult(theCityString, theCarsInteger) 
{
	return theCityString  == "Springfield" && theCarsInteger > 2;
}

/*
name: getEighthResult
desc: completes the eighth result calculation
inputs:
 -theCityString: the string of text representing the chosen city
return:
 -Boolean value indicating whether the statement shown evaluates to 'true' or 'false'
*/
function getEighthResult(theCityString) 
{
	return theCityString  = "Bend";
}

/*
name: getNinthResult
desc: completes the ninth result calculation
inputs:
 -theCars: the integer representing the number of cars
 -theZip: the integer representing the zip code
return:
 -Boolean value indicating whether the statement shown evaluates to 'true' or 'false'
*/
function getNinthResult(theCars, theZip) 
{
	return theCars > 3 || theZip < 95000;
}

/*
name: getTenthResult
desc: completes the tenth result calculation
inputs:
 -theZip: the integer representing the zip code
 -theCars: the integer representing the number of cars
 -theCity: the text string representing the city name
return:
 -Boolean value indicating whether the statement shown evaluates to 'true' or 'false'
*/
function getTenthResult(theZip, theCars, theCity) 
{
	return (theZip >= 97000 || theCars == 0) && (theCity == "Springfield");
}

//==================================== calculate the area =============================================================
/*
name: getArea
desc: calculates the area of a rectangle
inputs:
 -none
return:
 -none
*/
function getArea() 
{
	//get data from the form
	var myWidth = $("txtWidth").value;
	var myLength = $("txtLength").value;
	var myArea;
	
	//calculate and output result
	myArea	= myWidth * myLength;
	window.alert(myArea);
}

//==================================== calculate the distance ==========================================================
/*
name: getDistance
desc: calculates the distance traveled if traveling at a set speed for a set time
inputs:
 -none
return:
 -none
*/
function getDistance() 
{
	//get data from the form
	var mySpeed = $("txtSpeed").value;
	var myTime = $("txtTime").value;
	
	//calculate and output result
	var theDistance = mySpeed * myTime;
	window.alert(theDistance);
}

//==================================== calculate the item subtotal  =====================================================
/*
name: getSubTotal
desc: calculates the item subtotal for purchasing a certain number of items at a set price
inputs:
 -none
return:
 -none
*/
function getSubTotal() 
{
	//get data from the form
	var myQuantity = $("txtQuantity").value;
	var myPrice = $("txtPrice").value;
	
	//calculate and output result
	var theSubTotal = myQuantity * myPrice;
	window.alert(theSubTotal);
}

//==================================== calculate the product of two numbers ============================================
/*
name: getProduct
desc: calculates the product of two numbers
inputs:
 -theFirstNum: the first number
 -theSecondNum: the second number
return:
 -theProduct: the product of the first and second numbers
*/
function getProduct(theFirstNum, theSecondNum) 
{
	var theProduct = theFirstNum * theSecondNum;
	window.alert(theProduct);
}

//==================================== use the window.onload event to call the various functions =======================
window.onload = function() {
	//create variable definitions
	var myFirstNum = 23;
	var mySecondNum = 5;
	var myFourthResult;
	
	var myFirstString = "Some text stored in a variable?";
	var mySecondString = "Yee haw!";
	
	var myCity = "Springfield";
	var myZip = 97000;
	var myCars = 3;
	
	//call the number-related functions as part of assignment statements. Pass the local variables in as parameter values
	$("spnFirstResult").innerHTML = getFirstResult(myFirstNum, mySecondNum);
	$("spnSecondResult").innerHTML = getSecondResult(myFirstNum, mySecondNum);
	$("spnThirdResult").innerHTML = getThirdResult(myFirstNum, mySecondNum);
	
	//update the value in the myFourthResult variable by calling the function
	myFourthResult = getFourthResult(myFirstNum, mySecondNum);
	$("spnFourthResult").innerHTML = myFourthResult;
	
	//update the value in the myFourth Result variable using the "multiply AND assign" operator
	myFourthResult *= 2;
	$("spnFourthResult2").innerHTML = myFourthResult;
	
	//call the text-related functions as part of assignment statements. Pass the local variables in as parameter values
	$("spnFifthResult").innerHTML = getFifthResult(myFirstString, mySecondString);
	$("spnSixthResult").innerHTML = getSixthResult(myFirstString, mySecondString);
	
	//call the text-related functions as part of assignment statements. Pass the local variables in as parameter values
	$("spnSeventhResult").innerHTML = getSeventhResult(myCity, myCars);
	$("spnEighthResult").innerHTML = getEighthResult(myCity);
	$("spnNinthResult").innerHTML = getNinthResult(myCars, myZip);
	$("spnTenthResult").innerHTML = getTenthResult(myZip, myCars, myCity);
	
	//assign the re-usable functions to event handlers for each form button
	$("btnArea").onclick = getArea;
	$("btnDist").onclick = getDistance;
	$("btnPrice").onclick = function() {
		//call a more generic function, passing in the form values at the time of the function call
		getProduct($("txtPrice").value, $("txtQuantity").value);
	}
}