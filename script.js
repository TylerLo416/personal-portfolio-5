function init() {
    console.log("Initializing Website... ");
    
}

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("mode-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    
    // Check saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }

    // Toggle between light and dark mode
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        // Toggle the sun/moon icons
        sunIcon.classList.toggle("hidden");
        moonIcon.classList.toggle("hidden");

        // Save theme preference to localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
