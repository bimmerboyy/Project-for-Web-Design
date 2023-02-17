const toggleButton = document.querySelector(".middle-section .toggle-button");
const navbarLinks = document.querySelector(".middle-section .navigation");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});