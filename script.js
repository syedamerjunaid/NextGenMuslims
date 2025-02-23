document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging

    // ✅ Navbar Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle or nav links not found!");
    }

    // ✅ Dark Mode Toggle (Fixed Variable Name)
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (darkModeToggle) { 
        console.log("Dark mode button found!");

        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode");
            darkModeToggle.textContent = "☀ Light Mode";
        }

        darkModeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
                darkModeToggle.textContent = "☀ Light Mode";
            } else {
                localStorage.setItem("dark-mode", "disabled");
                darkModeToggle.textContent = "🌙 Dark Mode";
            }
        });
    } else {
        console.error("Dark Mode button not found! Check your HTML.");
    }
});
