/*==================================================
	Akme, Corp Commission Calculator
	Generate paycheck summary based on salary & sales
	
	Author: Debra Carino & CS 133S Students
	Date:	1/15/2020
====================================================*/

window.onload = function() {
	//when the page loads
	//create nice names for desired objects
	let mySummary 	= document.querySelector("#divPayResults"),
		txtSalary 	= document.querySelector("#txtSalary"),
		txtSales 	= document.querySelector("#txtSales"),
		txtRate		= document.querySelector("#selRate"),
		btnCalc 	= document.querySelector("#btnCalc");

	//hiding paycheck summary
	mySummary.style.display = "none";

	//putting focus into first textbox
	txtSalary.focus();

	//when the button is clicked
	btnCalc.onclick = function() {
		//get information from form
		let numSalary = txtSalary.value,
			numSales = txtSales.value,
			numRate = txtRate.value,
			numComm,
			numComp;

		//do the calculations
		numComm = numSales * numRate;
		numComp = +numSalary + +numComm;

		//output values to span tags
		document.querySelector("#spnSalary").innerHTML = numSalary;
		document.querySelector("#spnSales").innerHTML = numSales;
		document.querySelector("#spnRate").innerHTML = numRate;
		document.querySelector("#spnComm").innerHTML = numComm;
		document.querySelector("#spnTotal").innerHTML = numComp;

		//show the paycheck summary
		mySummary.style.display = "block";
	}

	// SELF CHECK
	// Store objects
	let netSummary 	= document.querySelector("#divNetPay"),
		spnGross 	= document.querySelector("#spnGross"),
		spnNet		= document.querySelector("#spnNet"),
		btnCalcNet 	= document.querySelector("#btnCalcNet");

	// Hide the net value results
	netSummary.style.display = "none";

	// When the button is clicked
	btnCalcNet.onclick = function() {
	// Get information from form
	let numGross = parseInt(document.querySelector("#numGross")),
		netPay;
	// Calculate values
	netPay = numGross * 0.33;
	console.log(netPay);
	// Out values to span tags
	// Show the net value results
	}

}