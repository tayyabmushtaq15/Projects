
document.addEventListener("DOMContentLoaded", function(){
    const percentageSlider = document.getElementById("percentageSlider");
    const percentageValue = document.getElementById("percentageValue");

    percentageSlider.addEventListener("input", function(){
        percentageValue.textContent = `${percentageSlider.value}%`;
    });
});
function calculatePercentage(){
    const percentageSliderValue = parseFloat(document.getElementById("percentageSlider").value);
    const baseNumberValue = parseFloat(document.getElementById("baseNumber").value);
    if (isNaN(baseNumberValue)) {
        alert("Please enter a valid Base Number");
        return;
    }

    const result =  ((baseNumberValue * percentageSliderValue) / 100).toFixed(2);
    document.getElementById("result").textContent = `Result: ${result}`;
}
function clearInputs() {
    const percentageSlider = document.getElementById("percentageSlider");
    percentageSlider.value = 10;
    document.getElementById("percentageValue").textContent = "10%";
    document.getElementById("baseNumber").value = "";
    document.getElementById("result").textContent = "";
}