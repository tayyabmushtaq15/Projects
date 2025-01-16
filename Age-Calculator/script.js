function calculateAge(){

    const todayDate = new Date();
    const birthDateInput = document.getElementById("birthDate").value;
    
    const birthDateParts = birthDateInput.split("-");
    if (birthDateParts.length !== 3) {
        alert("Invalid Date Format: Please enter the date in DD-MM-YYYY format.");
        return;
    }

    const birthDay = birthDateParts[0];
    const birthMonth = birthDateParts[1] - 1;
    const birthYear = birthDateParts[2];
    const birthDate = new Date(birthYear,birthMonth,birthDay);


    console.log(birthDateInput)
    console.log(birthDateParts)
    console.log(birthDay)
    console.log(birthMonth)
    console.log(birthYear)
    console.log(birthDate)

    //helper function to check date

    const isValidDate = (date)=>{
        return(
        Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date.getTime())
    );
    }
    if (!isValidDate(birthDate)) {
        alert("Invalid Date: Please ensure the date is in DD-MM-YYYY format and valid.");
        return;
    }

    const ageInMilliseconds = todayDate -birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds/1000);
    const ageInMinutes = Math.floor(ageInSeconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonths = Math.floor(ageInDays/30.436875);
    const ageInYears = Math.floor(ageInDays/365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} years, ${ageInMonths % 12} months, and ${ageInDays % 30} days</p>
        </div>
        <div class="result-item">
            <h3>Age in Months:</h3>
            <p>${ageInMonths} Months</p>
        </div>
        <div class="result-item">
            <h3>Age in Weeks:</h3>
            <p>${ageInWeeks} Week</p>
        </div>
        <div class="result-item">
            <h3>Age in Days:</h3>
            <p>${ageInDays} Days</p>
        </div>
        <div class="result-item">
            <h3>Age in Hours:</h3>
            <p>${ageInHours} Hours</p>
        </div>
        <div class="result-item">
            <h3>Age in Minutes:</h3>
            <p>${ageInMinutes} Minutes</p>
        </div>
        <div class="result-item">
            <h3>Age in Seconds:</h3>
            <p>${ageInSeconds} Seconds</p>
        </div>
        <div class="result-item">
            <h3>Age in Milliseconds:</h3>
            <p>${ageInMilliseconds} Milliseconds</p>
        </div>
    `;

    resultContainer.style.display = "block";

}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});