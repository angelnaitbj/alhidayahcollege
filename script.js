// MENU TOGGLE
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
function openPage() {
    window.location.href = "learnmore.html";
}
document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", function () {

        // Only run on mobile screen
        if (window.innerWidth <= 768) {
            menu.classList.toggle("show");
        }

    });

});