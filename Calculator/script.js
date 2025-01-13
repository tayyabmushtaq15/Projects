const element = document.getElementsByTagName('li');
const screen = document.querySelectorAll('p')[0];
const clear = document.getElementsByClassName('clear')[0];
const backspace = document.getElementById('backspace');
const percentage = document.getElementById('percentage');
const square = document.getElementById('square');
const cls = document.getElementById("clear");
const modal = document.getElementById("ratingModal");
const closeModal = document.querySelector(".close");
const stars = document.querySelectorAll(".star");
const submitRating = document.getElementById("submitRating");



for (let i = 0; i < element.length; i++) {
    if (element[i].innerHTML === '=') {
        element[i].addEventListener("click", calculate());
    } else {
        element[i].addEventListener("click", addToCurrentValue(i));
    }
}

function addToCurrentValue(i) {
    return function () {
        if (element[i].innerHTML === "x") {
            screen.textContent += '*';
        } else {
            screen.textContent += element[i].innerHTML;
        }
    };
}
function calculate() {
    return function () {
        try {
            screen.textContent = eval(screen.textContent);
            setTimeout(() => {
                openModal();
            }, 500);
        } catch (error) {
            screen.textContent = "Error!";
        }
    };
}
function openModal() {
    modal.style.display = "block";
}

closeModal.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Rating logic
stars.forEach(star => {
    star.addEventListener("click", function () {
        stars.forEach(s => s.classList.remove("selected"));
        this.classList.add("selected");
    });
});

submitRating.onclick = function () {
    const selectedRating = document.querySelector(".star.selected");
    if (selectedRating) {
        alert(`Thank you for your rating: ${selectedRating.getAttribute("data-value")} stars!`);
        modal.style.display = "none";
    } else {
        alert("Please select a rating before submitting!");
    }
};

clear.onclick = function (){
    screen.textContent = "";
}

backspace.onclick = function () {
    console.log("backspace cliked", backspace);
    
    if (screen.textContent.length > 0) {
        console.log("after click",screen.textContent);
        
        screen.textContent = screen.textContent.slice(0, -2); 
        console.log("after slice:",screen.textContent);
        
    }
};

percentage.onclick = function () {
    if (screen.textContent !== '') {
        const value = parseFloat(screen.textContent);
        if (!isNaN(value)) {
            screen.textContent = (value / 100).toString();
        } else {
            screen.textContent = "Error!";
        }
    }
};
square.onclick = function () {
    if (screen.textContent !== '') {
        const value = parseFloat(screen.textContent);
        if (!isNaN(value)) {
            screen.textContent = (value * value).toString();
        } else {
            screen.textContent = "Error!";
        }
    }
};
cls.onclick = function (){
    screen.textContent = "";
}
