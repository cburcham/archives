/*
Name: Christopher Burcham
Date: 2/11/2020
Desc: This JavaScript file prompts a user to enter a test score and uses While Loops to re-prompt the user until they enter the keyword 999 to stop the loop.
	  During the loop, it calculates the average and total of the test scores, as well as the highest and lowest test score inserted into the program.
	  It then displays the calculations in the appropriate span tags.
*/

/*
Name: $
Args: id(object)
Desc: returns a reference to an object with a specified id
*/
function $(id) {
    return window.document.getElementById(id);
}

/*
Name: promptScore
Args: none
Desc: Returns a window prompt with instructions on what to enter into it.
*/
function promptScore() {
	return window.prompt("Enter a test score between 0 and 100. Enter 999 to end the program.") * 1;
}

/*
Name: getNumLow
Args: numLow, numLast
Desc: Takes two numbers and returns the lowest one.
*/
function getNumLow(numLow, numLast) {
	if(numLast < numLow) return numLast;
	else return numLow;
}

/*
Name: getNumHigh
Args: numHigh, numLast
Desc: Takes two numbers and returns the highest one.
*/
function getNumHigh(numHigh, numLast) {
	if(numLast > numHigh) return numLast;
	else return numHigh;
}

/*
Name: getTotal
Args: numTotal, numLast
Desc: Takes two numbers and returns the sum.
*/
function getTotal(numTotal, numLast) {
	return numTotal + numLast;
}

/*
Name: getAvg
Args: numTotal, numAmount
Desc: Takes a number total and a number amount and calculates the average of those two numbers.
*/
function getAvg(numTotal, numAmount) {
	return numTotal / numAmount;
}

//When the page loads
window.onload = () => {
    //Store the HTML objects
    let btnCalc = $("btnCalc");

    //When the HTML object <button> with the ID of btnCalc is clicked
    btnCalc.onclick = () => {
        //Store the HTML objects and bind variables for later use
        let spnLast	  = $("spnLast"),
            spnTotal  = $("spnTotal"),
            spnAvg	  = $("spnAvg"),
            spnHigh	  = $("spnHigh"),
			spnLow	  = $("spnLow"),
			numScores = 1,
            numLast   = 0,
            numTotal  = 0,
            numAvg    = 0,
            numHigh   = 0,
			numLow	  = 100,
			numFinal  = 0;

		//Prompt a window to enter the test score
		numLast = promptScore();

        //While loop to check that the test score isn't our exit program number 999
		while(numLast != 999) {
			//Nested while loop so numLast will update and we don't get stuck in an infinite loop
			while(numLast < 0 || numLast > 100) {
				window.alert("Please enter a number between 0 and 100.");
				numLast = promptScore();
			}

			//Update the worst or best score
			numHigh = getNumHigh(numHigh, numLast);
			numLow = getNumLow(numLow, numLast);

			//Calculate the total of the entered scores and the average then increase the numScores value to store how many test scores remain entered
			numTotal = getTotal(numTotal, numLast);
			numAvg = getAvg(numTotal, numScores);
			numScores++;

			//Display an alert showing the test score that's added and re-prompt the user, also store the most recent inserted test score
			window.alert(`A test score of ${numLast} has been added.`);
			numFinal = numLast;
			numLast = promptScore();
		}

		//Insert the number values into the appropriate span tags and unhide the span tags
		spnLast.innerHTML = `Last Entered Score: ${numFinal.toFixed(1)}`;
		spnTotal.innerHTML = `Total of Scores: ${numTotal.toFixed(1)}`;
		spnAvg.innerHTML = `Average of Scores: ${numAvg.toFixed(1)}`;
		spnHigh.innerHTML = `Highest Score: ${numHigh.toFixed(1)}`;
		spnLow.innerHTML = `Lowest Score: ${numLow.toFixed(1)}`;
		spnLast.style.display = "inline-block";
		spnTotal.style.display = "inline-block";
		spnAvg.style.display = "inline-block";
		spnHigh.style.display = "inline-block";
		spnLow.style.display = "inline-block";
    }
}