/* ================================
HAMBURGER MENU
================================ */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* ================================
SMOOTH SCROLL
================================ */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

/* ================================
GALLERY MODAL
================================ */

const images = document.querySelectorAll(".gallery-grid img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");

images.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "block";
        modalImg.src = img.src;

    });

});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

