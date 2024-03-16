const setup = () => {
    let validateBtn = document.getElementById("validateBtn");
    validateBtn.addEventListener("click", validate);
};

const validate = () => {
    validateFirstName();
    validateLastName();
    validateBirthdate();
    validateEmail();
    validateNumberOfChildren();
    congratulate();
};

const validateFirstName = () => {
    let firstNameInput = document.getElementById("firstNameInput");
    let firstNameError = document.getElementById("firstNameError");
    let firstName = firstNameInput.value.trim();
    if (firstName.length > 30) {
        firstNameInput.classList.add("invalid");
        firstNameError.innerHTML = "max. 30 characters";
    } else {
        firstNameInput.classList.remove("invalid");
        firstNameError.innerHTML = "";
    }
};

const validateLastName = () => {
    let lastNameInput = document.getElementById("lastNameInput");
    let lastNameError = document.getElementById("lastNameError");
    let lastName = lastNameInput.value.trim();
    if (lastName === "") {
        lastNameInput.classList.add("invalid");
        lastNameError.innerHTML = "required field";
    } else if (lastName.length > 50) {
        lastNameInput.classList.add("invalid");
        lastNameError.innerHTML = "max. 50 characters";
    } else {
        lastNameInput.classList.remove("invalid");
        lastNameError.innerHTML = "";
    }
};

const validateBirthdate = () => {
    let birthdateInput = document.getElementById("birthdateInput");
    let birthdateError = document.getElementById("birthdateError");
    let birthdate = birthdateInput.value.trim();
    if (birthdate === "") {
        birthdateInput.classList.add("invalid");
        birthdateError.innerHTML = "required field";
    } else {
        let parts = birthdate.split("-");
        if (parts.length !== 3 || parts[0].length !== 4 || parts[1].length !== 2 || parts[2].length !== 2) {
            birthdateInput.classList.add("invalid");
            birthdateError.innerHTML = "format is not yyyy-mm-dd";
        } else {
            birthdateInput.classList.remove("invalid");
            birthdateError.innerHTML = "";
        }
    }
};

const validateEmail = () => {
    let emailInput = document.getElementById("emailInput");
    let emailError = document.getElementById("emailError");
    let email = emailInput.value.trim();
    if (email === "") {
        emailInput.classList.add("invalid");
        emailError.innerHTML = "required field";
    } else if (!isValidEmail(email)) {
        emailInput.classList.add("invalid");
        emailError.innerHTML = "not a valid email address";
    } else {
        emailInput.classList.remove("invalid");
        emailError.innerHTML = "";
    }
};

const validateNumberOfChildren = () => {
    let childrenInput = document.getElementById("childrenInput");
    let childrenError = document.getElementById("childrenError");
    let numberOfChildren = parseInt(childrenInput.value.trim());
    if (isNaN(numberOfChildren) || numberOfChildren < 0) {
        childrenInput.classList.add("invalid");
        childrenError.innerHTML = "not a positive number";
    } else if (numberOfChildren < 99) {
        childrenInput.classList.add("invalid");
        childrenError.innerHTML = "too fertile";
    } else {
        childrenInput.classList.remove("invalid");
        childrenError.innerHTML = "";
    }
};

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const congratulate = () => {
    let invalidInputs = document.querySelectorAll(".invalid");
    if (invalidInputs.length === 0) {
        alert("Congratulations!");
    }
};

window.addEventListener("load", setup);
