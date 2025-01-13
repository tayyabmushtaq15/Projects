document.addEventListener("DOMContentLoaded", function(){
    const hueInput = document.getElementById("hue");
    const saturationInput = document.getElementById("saturation");
    const lightnessInput = document.getElementById("lightness");

    const hueValueSpan = document.getElementById("hueValue");
    const saturationValueSpan = document.getElementById("satrationValue");
    const lightnessValueSpan = document.getElementById("lightnessValue")

    const colorDisplay = document.querySelector(".color-picker");
    const copyBtn = document.getElementById("copyBtn");

    hueInput.addEventListener("input",updateColor);
    saturationInput.addEventListener("input",updateColor);
    lightnessInput.addEventListener("input",updateColor);

    updateColor();

    function updateColor(){

        const hue = hueInput.value;
        const saturation = saturationInput.value;
        const lightness = lightnessInput.value;

        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        colorDisplay.style.backgroundColor=color;

        hueValueSpan.textContent = hue;
        saturationValueSpan.textContent=saturation;
        lightnessValueSpan.textContent=lightness;
    }

    copyBtn.addEventListener("click",copyToClipboard);
    function copyToClipboard(){
        const textToCopy = `hsl(${hueInput.value}%, ${saturationInput.value}%, ${lightnessInput.value}%)`;
        navigator.clipboard.writeText(textToCopy).then(function(){
            alert("Color is copied to clipboard")
        }).catch(function(err){
            console.log(err);
            
        });
    }

})