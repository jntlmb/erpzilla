import "../style.css";
import LoginPost from "./models/LoginPost";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
});

async function handleLogin(event) {
    event.preventDefault();
    const identifier = document.getElementById("identifier").value;
    const password = document.getElementById("password").value;
    const encryptedPassword = password;

    const loginPost = new LoginPost(identifier, encryptedPassword);

    try {
        const response = await fetch("http://192.168.178.168:5010/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(loginPost.toJSON())
        });

        const result = await response.json();

        if (result.Result) {
            // Successful login
            window.location.href = "/client-selection.html";
        } else {
            // Failed login
            alert(result.Message || "Login failed. Please try again.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert(`An error occurred. Please try again. Error: ${error.message}`);
    }
}

function sha256(str) {
    // Implement SHA-256 hashing here or use a library
    // For this example, we'll use a placeholder function
    return str; // Replace this with actual SHA-256 implementation
}
