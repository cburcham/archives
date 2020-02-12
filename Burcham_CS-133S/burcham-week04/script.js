/*
Name: Christopher Burcham
Date: 2/4/2020
Desc: This JavaScript file uses a number value, a text value, and logical structures to determine whether to convert the number value to Celsius or Fahrenheit.
	  It then displays the original value and the converted value in the appropriate span tags, along with a personalized message based on the range of temperature.
*/

/*
name: $
desc: returns a reference to an object with a specified id
args:
- id: text string that is the id attribute value of the desired object
retn: object referenced by theId
*/
function $(id) {
    return window.document.getElementById(id);
}

/*
Name: tempToC
Args: num
Desc: Takes a temperature number value in Fahrenheit and converts it to Celsius and returns the value.
*/

function tempToC(fahrenheit) {
    let total = (fahrenheit - 32) * 5 / 9;
    return total;
}

/*
Name: tempToF
Args: num
Desc: Takes a temperature number value in Celsius and converts it to Fahrenheit and returns the value.
*/

function tempToF(celsius) {
    let total = (celsius * 9 / 5) + 32;
    return total;
}

/*
Name: radioValue
Args: radio
Desc: Takes the form HTML object and loops through the radio child objects and returns the checked radio's value.
*/

function radioValue(radio) {
	for(let x = 0; x < radio.length; x++) {
		if(radio[x].checked) {
			return radio[x].value;
		}
	}
}

window.onload = function() {
    let spnTempF   = $("spnTempF"),
        spnTempC   = $("spnTempC"),
        spnMsg     = $("spnMsg"),
        btnConvert = $("btnConvert");
		
	//Hide the span tags
	spnTempF.style.display = "none";
	spnTempC.style.display = "none";
	spnMsg.style.display = "none";

    //Track when the <input> HTML object with the ID of btnConvert is clicked
    btnConvert.onclick = function() {
        //Store the input values into variables
        let txtTemp   = radioValue($("frmTemp").radioTemp),
            numAmount = $("numAmount").value * 1,
            txtMsg,
            numAmountF,
            numAmountC;

        //Create a logical structure to see what type of temperature formula needs to be used
        if(txtTemp == "celsius") {
            numAmountC = numAmount.toFixed(1),
            numAmountF = tempToF(numAmount).toFixed(1);
        }
        else {
            numAmountF = numAmount.toFixed(1),
            numAmountC = tempToC(numAmount).toFixed(1);
        }

        //Ran into an issue where it would calculate Fahrenheit to negative 0, this should fix that display
        if(numAmountF == -0) numAmountF = 0;

        //Create a logical structure to return a message for the appropriate temperature for Fahrenheit
        if(numAmountF <= 40) {
            txtMsg = "It's super cold today! Watch out for ice.";
        } else if(numAmountF <= 65) {
            txtMsg = "It's chilly, grab a sweater!";
        } else if(numAmountF <= 85) {
            txtMsg = "The weather's looking up! Time to break out those shorts.";
        } else {
            txtMsg = "I hope you have an air conditioner...";
        }

        //Apply the temperatures and the correct message to the appropriate span tags
        spnTempF.innerHTML = `Fahrenheit: ${numAmountF}&#8457;`;
        spnTempC.innerHTML = `Celsius: ${numAmountC}&#8451;`;
        spnMsg.innerHTML = txtMsg;
        
        //Display the span tags
        spnTempF.style.display = "inline-block";
        spnTempC.style.display = "inline-block";
        spnMsg.style.display = "inline-block";
    }
}