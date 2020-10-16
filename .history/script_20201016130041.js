//TODO create event listener to calculate tip on button
// TODO render tip amount and total price with tip included to DOM

// BONUS
//TODO split bill for multiple people

// create variables to reference DOM elements
var subtotalInput = document.querySelector("#subtotal");
var tipPercentageInput = document.querySelector("#tip-percentage");
var submitButton = document.querySelector("#submit");
var tipAmountEl = document.querySelector("#tip-amount");
var newTotalEl = docuement.querySelector("#new-total");

// TODO create function to calculate tip amount
function calculateTip(subtotal, tipPercent) {

}

// event listener for when the Calculate Tip Button is clicked
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    // TODO get values from input fields
        var subtotal = +subtotalInput.value().trim();
        var tipPercentage = +tipPercentageInput.value().trim();
    // TODO calculate the tip amount

    // TODO write the tip amount to the DOM

    // TODO calculate the final total of bill with tip included

    // TODO write the final total to the DOM
    
}