document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (toggleButton) {
        console.log("Dark mode button found!");

        // Load saved dark mode preference
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
        }

        toggleButton.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            // Save preference in localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    } else {
        console.error("Dark mode button not found!");
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle or nav-links not found!");
    }

    console.log("Script loaded successfully!");
});

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;

    // Calculate new index
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // Move slides
    document.querySelector(".carousel").style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => moveSlide(1), 3000);
