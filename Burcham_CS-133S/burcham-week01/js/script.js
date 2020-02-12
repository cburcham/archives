/*
    Name: Christopher Burcham
    Date: 1/10/2020
    Desc: This file contains the functionality to change the stylesheet of the web page, apply the current date to the footer,
          change the greeting text, and alter the picture source and alt attribute.
*/

window.onload = function() {
    let themeBtn    = window.document.querySelector("#changeTheme"),
        greetBtn    = window.document.querySelector("#btnGreetMe"),
        picBtn      = window.document.querySelector("#btnChangePic"),
        loginForm   = window.document.userLogin,
        datePara    = window.document.querySelector("#theDate"),
        greeting    = window.document.querySelector("h2"),
        loginPic    = window.document.querySelector("#loginPic"),
        date        = new Date();

    // Focus the userName input field in the form when the page loads
    loginForm.userName.focus();

    // Apply the date to the paragraph with the ID theDate
    datePara.insertAdjacentHTML('beforeend', date);

    themeBtn.onclick = function() {
        // Change the stylesheet href when the button with the ID of changeTheme is clicked
        window.document.getElementsByTagName('link')[1].href = "css/black.css";
        return false;
    }

    greetBtn.onclick = function() {
        // Update the greeting when the button with the id btnGreetMe is clicked
        greeting.innerHTML = "Good day!";
        return false;
    }

    picBtn.onclick = function() {
        // Update the picture source and alt attribute when the button with the id btnChangePic is clicked
        loginPic.src = "images/amanda-jones-feLC4ZCxGqk-unsplash.jpg";
        loginPic.alt = "A Stack of Sticky Notes";
        return false;
    }
}