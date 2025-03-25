//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const loginForm = document.getElementById("loginForm");
    const existingUserBtn = document.getElementById("existing");

    // Load saved credentials
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserBtn.style.display = "block"; // Show the existing user button
    }

    // Form submission event
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;

        alert(`Logged in as ${username}`);

        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        // Show or hide the existing user button
        existingUserBtn.style.display = localStorage.getItem("username") ? "block" : "none";
    });

    // Existing user login
    existingUserBtn.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
    });
});
