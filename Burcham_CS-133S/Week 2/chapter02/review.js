var myAge = 29,
    myName = "Chris";

/*What are reserved keywords?
 Reserved keywords are words preserved by the JavaScript engine and can't be used to name variables, functions, etc.
 If you try to use a reserved keyword it will most likely break your script.*/

/* List a URL that contains a good reference for JavaScript reserved words
 URL: https://www.w3schools.com/js/js_reserved.asp*/

/*Some guidelines to remember when naming variabels are:
    - Keep them realtively short
    - Use camelCasing to name the variable
    - Make sense of the name
        - txtName
        - btnName
        - numName
    - Remember scope!
    - Functions within functions are function level too*/

var myNum = 9,
    myOtherNum = 2;


// myVal = myNum * 5;
//Outputs the expression 45

// myVal = myOtherNum + 28 - myNum / 2;
//Outputs the expression 25.5 - The JavaScript engine divides myNum by 2 and adds myOtherNum to 28 and then subtracts 4.5 from 30. (Use parenthesis to fix this)

// myVal++;
//Outputs an Undefined error

// myVal = myNum % myOtherNum;
//The statement uses the modulus operator to check if the myNum variables is divisible by myOtherNum and outputs the expression 0 if true, and 1 if false.
//In this case it outputs the expression 1 because 9 is not divisible by 2.

// myVal += 45;
//The statement attempts to add and assign the integer 45 to the global variable myVal, but in this case myVal is not defined so it outputs an error.

// myVal += "45";
//The statement attempts to concatenate and assign the string 45 to the existing global variable myVal, but in this case myVal is not defined so it outputs an error.

// myVal = (36 - myNum) * myOtherNum;
//The statement uses binary opearators calculate an integer expression
//JavaScript's engine uses its order of operations calculates the parenthesis first (36 - myNum) for an integer value of 27
//It then multiplies 27 by the variable myOtherNum and expresses the integer 54.

// myVal = myNum > myOtherNum;
//The statement uses a logical operator to check if myNum is greater than myOtherNum and returns a boolean expression
//In this case it expresses true because 9 is greater than 2.

// myVal = myNum <= myOtherNum; 
//The statement uses a logical operator to check if the variables myNum is less than or equal to myOtherNum and returns a boolean expression
//In this case it expresses false because 9 is not less than or equal to 2.

// myVal = (6 > 6) && myOtherNum < myNum;

//The statement uses multiple logical operators to check if 6 is greater than 6 AND myOtherNum is less than myNum and returns a boolean expression
//The logic (6 > 6) outputs the expression false because 6 is equal to 6
//The logic myOtherNum < myNum outputs the expression true because 9 is greater than 2
//The statement outputs a boolean expression of false because both logic operations do not express true

// myVal = (5 == 5) || (2 >= 5);
//The statement uses multiple logical opperators to check if 5 is equal to 5 OR 2 is greater than or equal to 5 and returns a boolean expression
//The logic (5 == 5) returns the expression true because 5 is equal to 5
//The logic (2 >= 5) returns the expression false because 2 is not greater than or equal to 5
//The statement returns true because the left hand value is true and the OR logical operator will prioritize its expression first.

// myVal = !myVal && true;
//The statement uses multiple logical operators to return a boolean expression
//!myVal will return an undefined error because myval is not defined
//The statement returns an undefined error

myVal = !(6 >= 10) && ((myOtherNum * 5 >= myNum) || false);
//The statement uses a combination of logical opearators and binary operators to return a boolean expression
/*The logic !(6 >= 10) will return the boolean expression true because 6 is not greater than or equal to 10 and returns the boolean expression false,
    but the NOT logical operator reverses the expression to true*/
/*The logic (myOtherNum * 5 >= myNum) will calculate the binary operation myOtherNum * 5 for an integer expression of 45
    and then use the logical operators to check if the integer expression 45 is greater than or equal to the variable myNum
    and will return the boolean expression true because 45 is greater than or equal to 2*/
//The logic (true || false) will return true because the OR logical operator will prioritize the true boolean expression
//So now our logic (true) && (true) will output the boolean expression true

console.log(myVal);

/*Where are functions normally created? Why?
Functions are normally created in a separate JavaScript file to practice code separation for easier management between your HTML, CSS, and JavaScript code.*/

//Basic Function Syntax:
function yourFunctionName(param1, param2, paramEtc) {
    // Your code goes in the code block
}

/*
name: doAddition
desc: caclulates the product of two numbers
params:
    -num1: the first number
    -num2: the second number
return:
    -theProduct: the product of the first and second numbers
*/

function doAddition(num1, num2) {
    let theProduct;
    //You can multiply your expression by 1 to force an integer with automatic conversion
    //You can also use the global function parseFloat();
    theProduct = num1 * 1 + num2 * 1;

    return theProduct;
}

console.log(doAddition(5, 11));

/*Describe in general how to call a function.
To invoke a function start with the function keyword followed by a function name with parameters inside of parenthesis followed by a bracket
and then place your code within the brackets*/

console.log(doAddition(12, 5));

console.log(doAddition(myNum, myOtherNum));