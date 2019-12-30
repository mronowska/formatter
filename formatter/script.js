let input = document.querySelector("#price");
const btn = document.querySelector("#btn");
const messageTooLong = document.getElementById("messageTooLong");
const messageNotValid = document.getElementById("messageNotValid");

let maxLenght = 10; 
let enterPressed = false;

function limit(element) {
    if (element.value.length > maxLenght) {
        element.value = element.value.substr(0, maxLenght);
        messageTooLong.textContent = `Maximum length is ${maxLenght} numbers.` ;
    }
}

function separator(element) {
    
    let indexOfSeparator = element.indexOf(",");
    if (indexOfSeparator != -1) {
        return indexOfSeparator;
    }
    else {
        return element.length;
    }
}

function isValid(element) {
    if (!isNaN(parseInt(element))) {
        messageNotValid.textContent = "";
        element.border = "2px solid black";
        return true;
    } else {
        element = "";
        element.border = "3px solid red";
        messageNotValid.textContent = "Invalid value. Enter numbers only.";
        return false;
    }
}


function formatter() {
    if (isValid(input.value)) {
        if (separator(input.value) <= (maxLenght - 2)) {
            input.value += ',00';
        }
        else {
            let afterSeparator = input.value.substring(maxLenght - 2, maxLenght);
            input.value = input.value.substring(0, maxLenght - 2);
            input.value = input.value + ',' + afterSeparator;
        }
    }
}

const reset = () => {
    input.value = "";
    messageTooLong.textContent = "";
    messageNotValid.textContent = "";
    input.style.border = "2px solid black";
    enterPressed = false;
}


btn.addEventListener("click", reset);
input.addEventListener("keydown", function (event) {
    limit(input);
    if (event.keyCode === 13) {
        if (!enterPressed) {
            event.preventDefault();
            formatter();
        }
        enterPressed = true;
    }
});





