const toggleButton = document.querySelector('.middle-section .toggle-button');
const navbarLinks = document.querySelector('.middle-section .navigation');
console.log(toggleButton);

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});