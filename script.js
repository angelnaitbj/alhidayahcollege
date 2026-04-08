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