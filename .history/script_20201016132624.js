// BONUS
//TODO split bill for multiple people
// TODO add a number field to HTML file for # of people to split bill between


// create variables to reference DOM elements
var subtotalInput = document.querySelector("#subtotal");
var tipPercentageInput = document.querySelector("#tip-percentage");
var submitButton = document.querySelector("#submit");
var tipAmountEl = document.querySelector("#tip-amount");
var newTotalEl = document.querySelector("#new-total");

// create function to calculate tip amount
function calculateTip(subtotalAmount, tipPercent) {
    return subtotalAmount * (tipPercent/100);
}

// create function to calculate final total
function finalTotal(subtotalAmount, tipAmount) {
    return subtotalAmount + tipAmount;
}

// event listener for when the Calculate Tip Button is clicked
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    // get values from input fields
        var subtotalValue = +subtotalInput.value.trim();
        var tipPercentageValue = +tipPercentageInput.value.trim();
    // console.log to see if input was received - delete when complete       
        console.log(subtotalValue, tipPercentageValue)
    // calculate the tip amount
        var tipAmount = calculateTip(subtotalValue, tipPercentageValue);
    // console.log to see if tip amount was calculated - delete when complete
        console.log(tipAmount);

    // write the tip amount to the DOM
        tipAmountEl.textContent = tipAmount.toFixed(2);
    // calculate the final total of bill with tip included and write to DOM
        newTotalEl.textContent = finalTotal(subtotalValue, tipAmount).toFixed(2);
    
});