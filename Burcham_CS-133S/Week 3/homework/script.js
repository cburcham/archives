/*
Name: Christopher Burcham
Date: 1/28/2020
Desc: This JavaScript file tracks the changes and inputs to an HTML form that uses functions to calculate an exchange of currency and
      outputs the information into the appropriate span tags.
*/

/*
name: $
desc: returns a reference to an object with a specified id
args: theId(str)
*/
function $(theId)
{
    return window.document.getElementById(theId);
};

/*
name: exCurrency
desc: Converts the currency value into the appropriate value by multiplying it by the exchange rate and then returns the converted value.
args: numAmount(num), numExRate(num)
*/
function exCurrency(numAmount, numExRate) {
    var exAmount = numAmount * numExRate;
    return exAmount.toFixed(2);
}

/*
name: icoCurrency
desc: Takes a number and determines what conversion rate is being used and returns the appropriate currency sign.
args: num
*/

function icoCurrency(num) {
    let txt;

    switch(num) {
        // US Dollar
        case 1.102243:
        case 0.009160:
            txt = "&dollar;";
        break;
        // Euros
        case 0.008311:
        case 0.907417:
            txt = "&euro;";
        break;
        // Japanese Yen
        case 120.330663:
        case 109.166763:
            txt = "&yen;";
        break;
        // British Pounds
        case 0.007033:        
        case 0.767860:
        case 0.846171:
            txt = "&pound;";
        break;
    }

    return txt;
}

window.onload = function() {
    // Track changes to the <select> object with the ID of numExDollar
    $("numExDollar").onchange = function() {
        let numDollar   = $("numDollar").value * 1,
            numExDollar = $("numExDollar").value * 1,
            spnExDollar = exCurrency(numDollar, numExDollar),
            icoDollar   = icoCurrency(numExDollar);

        // Update the <div> object with the ID of icoDollar with the appropriate currency sign
        $("icoDollar").innerHTML = icoDollar;
        
        // Apply the converted currency value to the <span> object with the ID of spnExDollar
        $("spnExDollar").innerHTML = `${icoDollar}${spnExDollar}`;
    }

    // Track input to the <input> object with the ID of numDollar
    $("numDollar").oninput = function() {
        let numDollar   = $("numDollar").value * 1,
            numExDollar = $("numExDollar").value * 1,
            spnExDollar = exCurrency(numDollar, numExDollar),
            icoDollar = icoCurrency(numExDollar);

        // Update the <div> object with the ID of icoDollar with the appropriate currency sign
        $("icoDollar").innerHTML = icoDollar;
        
        // Apply the converted currency value to the <span> object with the ID of spnExDollar
        $("spnExDollar").innerHTML = `${icoDollar}${spnExDollar}`;
    }

    // Track changes to the <select> object with the ID of numExEuro
    $("numExEuro").onchange = function() {
        let numEuro   = $("numEuro").value * 1,
            numExEuro = $("numExEuro").value * 1,
            spnExEuro = exCurrency(numEuro, numExEuro),
            icoEuro = icoCurrency(numExEuro);

        // Update the <div> object with the ID of icoEuro with the appropriate currency sign
        $("icoEuro").innerHTML = icoEuro;

        // Apply the converted currency value to the <span> object with the ID of spnExEuro
        $("spnExEuro").innerHTML = `${icoEuro}${spnExEuro}`;
    }

    // Track input to the <input> object with the ID of numEuro
    $("numEuro").oninput = function() {
        let numEuro   = $("numEuro").value * 1,
            numExEuro = $("numExEuro").value * 1,
            spnExEuro = exCurrency(numEuro, numExEuro),
            icoEuro = icoCurrency(numExEuro);

        // Update the <div> object with the ID of icoEuro with the appropriate currency sign
        $("icoEuro").innerHTML = icoEuro;

        // Apply the converted currency value to the <span> object with the ID of spnExEuro
        $("spnExEuro").innerHTML = `${icoEuro}${spnExEuro}`;
    }

    // Track changes to the <select> object with the ID of numExYen
    $("numExYen").onchange = function() {
        let numYen   = $("numYen").value * 1,
            numExYen = $("numExYen").value * 1,
            spnExYen = exCurrency(numYen, numExYen),
            icoYen   = icoCurrency(numExYen);

        // Update the <div> object with the ID of icoYen with the appropriate currency sign
        $("icoYen").innerHTML = icoYen;

        // Apply the converted currency value to the <span> object with the ID of spnExYen
        $("spnExYen").innerHTML = `${icoYen}${spnExYen}`;
    }

    // Track input to the <input> object with the ID of numYen
    $("numYen").oninput = function() {
        let numYen   = $("numYen").value * 1,
            numExYen = $("numExYen").value * 1,
            spnExYen = exCurrency(numYen, numExYen),
            icoYen   = icoCurrency(numExYen);

        // Update the <div> object with the ID of icoYen with the appropriate currency sign
        $("icoYen").innerHTML = icoYen;

        // Apply the converted currency value to the <span> object with the ID of spnExYen
        $("spnExYen").innerHTML = `${icoYen}${spnExYen}`;
    }
}