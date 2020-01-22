/*
Name: Christopher Burcham
Date: 1/21/2020
Desc: This JavaScript file uses the onchange event property to track changes to input fields in a shopping-cart-like form
      and then calculates the necessary price totals to display to the customer.
*/

/*
name: $
desc: returns a reference to an object with a specified id
args:
- theId: text string that is the id attribute value of the desired object
retn: object referenced by theId
*/
function $(theId)
{
    return window.document.getElementById(theId);
};

/*
name: salesCalc
desc: Collects product quantities and calculates a total for the products before and after applying a sales tax.
      It then applies the calculated results to the appropriate span tags.
*/

function salesCalc() {
    let num1Price = 59.99,
        num2Price = 59.99,
        num3Price = 299.99,
        num1Quant = $("num1").value,
        num2Quant = $("num2").value,
        num3Quant = $("num3").value,
        num1Total,
        num2Total,
        num3Total,
        numProduct,
        numTax,
        numTotal;

        // Calculate the total for each product (The product quantity multiplied by the product price)
        num1Total = num1Quant * num1Price,
        num2Total = num2Quant * num2Price,
        num3Total = num3Quant * num3Price,
        // Calculate the total for all products (The sum of all product totals)
        numProduct = num1Total + num2Total + num3Total,
        // Calculate the sales tax amount (The total of all products multipled by 0.06 for a 6% sales tax)
        numTax = numProduct * 0.06,
        // Calculate the total (The sum of all products and the applied sales tax)
        numTotal = numProduct + numTax;

        // Update the span tags for the item's total price if the quantity exceeds 2 - otherwise empty them
        $("spnNum1").innerHTML = (num1Quant >= 2) ? `Total: $${num1Total.toFixed(2)}` : "";
        $("spnNum2").innerHTML = (num2Quant >= 2) ? `Total: $${num2Total.toFixed(2)}` : "";
        $("spnNum3").innerHTML = (num3Quant >= 2) ? `Total: $${num3Total.toFixed(2)}` : "";

        // Update the span tags that contain the price totals
        $("spnProduct").innerHTML = numProduct.toFixed(2);
        $("spnTax").innerHTML = numTax.toFixed(2);
        $("spnTotal").innerHTML = numTotal.toFixed(2);
}

window.onload = function() {
    // Track the quantity for the first product using the onchange event property
    $("num1").onchange = function() {
        salesCalc();
    }

    // Track the quantity for the second product using the onchange event property
    $("num2").onchange = function() {
        salesCalc();
    }

    // Track the quantity for the third product using the onchange event property
    $("num3").onchange = function() {
       salesCalc();
    }
}