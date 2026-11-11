const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", checkPassword);

function checkPassword() {

    const password = passwordInput.value;

    // Password security requirements
    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };

    let score = 0;

    // Check each requirement
    for (let key in checks) {

        const element = document.getElementById(key);
        const statusIcon = element.querySelector(".status-icon");

        if (checks[key]) {

            score++;

            element.classList.add("valid");
            statusIcon.innerText = "✓";

        } else {

            element.classList.remove("valid");
            statusIcon.innerText = "✕";
        }
    }

    const progressBar = document.getElementById("progressBar");
    const strengthText = document.getElementById("strengthText");
    const suggestionText = document.getElementById("suggestionText");

    // Update progress bar
    progressBar.style.width = (score * 20) + "%";

    // Empty password condition
    if (password.length === 0) {

        strengthText.innerText = "Not checked";
        strengthText.style.color = "#a5abc5";

        progressBar.style.width = "0%";
        progressBar.style.background = "transparent";

        suggestionText.innerText =
            "Enter a password to check its security.";

        return;
    }

    // Password strength calculation
    if (score <= 2) {

        strengthText.innerText = "Weak";
        strengthText.style.color = "#ff647c";

        progressBar.style.background = "#ff536d";

        suggestionText.innerText =
            "Your password is weak. Add more security features.";

    } else if (score <= 4) {

        strengthText.innerText = "Medium";
        strengthText.style.color = "#ffbf5e";

        progressBar.style.background = "#ffae42";

        suggestionText.innerText =
            "Good! Add the remaining requirements to improve security.";

    } else {

        strengthText.innerText = "Strong";
        strengthText.style.color = "#42e995";

        progressBar.style.background = "#22d982";

        suggestionText.innerText =
            "Excellent! Your password meets all five requirements.";
    }
}

// Show and hide password
function togglePassword() {

    const toggleBtn = document.getElementById("toggleBtn");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        toggleBtn.innerText = "Hide";

    } else {

        passwordInput.type = "password";
        toggleBtn.innerText = "Show";
    }
}