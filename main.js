const userInput = document.getElementById("user-name");
const passwordInput = document.getElementById("password");

const userInputWarning = document.getElementById('user-name-warning');
const passwordInputWarning = document.getElementById('password-warning');

userInput.addEventListener("keyup", getUserName);
userInput.addEventListener("keyup", checkUserName);

passwordInput.addEventListener('keyup', getPassword);
passwordInput.addEventListener('keyup', checkPassword);

function getUserName(e) {
    console.log("user-name: " + e.target.value);
}

function checkUserName(e) {
    if (e.target.value.includes("@")) {
        userInputWarning.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        userInputWarning.textContent = "";
    }
}

function getPassword(e) {
    console.log("password: " + e.target.value);
}

function checkPassword(e) {
    if (e.target.value === "" || e.target.value.length > 6) {
        passwordInputWarning.textContent = "";
    } else {
        passwordInputWarning.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    }
}


