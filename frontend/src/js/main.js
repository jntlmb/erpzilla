import "../style.css";
import LoginPost from "./models/LoginPost";
import CryptoJS from "crypto-js"; // Assuming CryptoJS is included in your HTML

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
    const encryptedPassword = CryptoJS.SHA256(password).toString();

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
            window.location.href = "/client-selection.html";
        } else {
            alert(result.Message || "Login failed. Please try again.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert(`An error occurred. Please try again.`);
    }
}

function sha256(str) {
    return str;
}
