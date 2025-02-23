document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if user has a preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀ Light Mode";
}

// Toggle Dark Mode
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleButton.textContent = "☀ Light Mode";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleButton.textContent = "🌙 Dark Mode";
    }
});
