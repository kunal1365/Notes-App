var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.classList = "fa-solid fa-moon";
    } else {
        icon.classList = "fa-solid fa-sun";
    }
}

// Login Form
const userLoginBtn = document.getElementById("userLoginBtn");
const loginFormContainer = document.getElementById("loginFormContainer");
const closeButton = document.getElementById("closeButton");

userLoginBtn.addEventListener("click", () => {
    loginFormContainer.style.display = "block";
    signupFormContainer.style.display = "none";
    notePad.style.display = "none";

});

closeButton.addEventListener("click", () => {
    loginFormContainer.style.display = "none";
});


// Signup Form
const signupLink = document.getElementById("signupLink");
const signupFormContainer = document.getElementById("signupFormContainer");
const closeButton2 = document.getElementById("closeButton2");

document.addEventListener("DOMContentLoaded", function () {
    var signupFormContainer = document.getElementById("signupFormContainer");
    signupFormContainer.style.display = "none";
});

signupLink.addEventListener("click", () => {
    signupFormContainer.style.display = "block";
    loginFormContainer.style.display = "none";
    notePad.style.display = "none";
});

closeButton2.addEventListener("click", () => {
    signupFormContainer.style.display = "none";
});


// Notes Area
document.addEventListener("DOMContentLoaded", function () {
    var notePad = document.getElementById("notePad");
    notePad.style.display = "none";
});
function togglePopup() {
    var notePad = document.getElementById("notePad");
    if (notePad.style.display === "none" || notePad.style.display === "") {
        notePad.style.display = "block";
        loginFormContainer.style.display = "none";
        signupFormContainer.style.display = "none";
    } else {
        notePad.style.display = "none";
    }
}


