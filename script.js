document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging

    // Navbar Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle or nav links not found!");
    }

    // Dark Mode Toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (toggleButton) { // Check if button exists
        console.log("Dark mode button found!");
        
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
    } else {
        console.error("Dark Mode button not found! Check your HTML.");
    }
});
