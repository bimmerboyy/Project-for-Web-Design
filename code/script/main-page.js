const toggleButton = document.querySelector('.middle-section .toggle-button');
const navbarLinks = document.querySelector('.middle-section .navigation');


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


// const textAnimation = () => {
//     let mainContent = document.querySelector('.lord-of-rings');
//     console.log(mainContent);
//     mainContent.classList.toggle('popup');
//     console.log(mainContent.classList);
// };

// textAnimation();