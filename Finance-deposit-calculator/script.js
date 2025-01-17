function calculateMaturityAmount() {
    // Get the input values from the form and convert them to numbers
    const principle = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    // Validate the inputs
    if (isNaN(principle) || isNaN(interestRate) || isNaN(tenure) || principle <= 0 || interestRate <= 0 || tenure <= 0) {
        document.getElementById("result").innerText = "Please enter valid and positive numbers for all fields.";
        return;
    }

    // Calculate the maturity amount using the formula
    const maturityAmount = principle + (principle * interestRate * tenure) / 100;

    // Display the result
    document.getElementById("result").innerText = `Maturity Amount: Rs${maturityAmount.toFixed(2)}`;
}

// Attach the event listener to the Calculate button
document.getElementById("calculateBtn").addEventListener("click", calculateMaturityAmount);
