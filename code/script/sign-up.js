const toggleButton = document.querySelector('.middle-section .toggle-button');
const navbarLinks = document.querySelector('.middle-section .navigation');


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});



let name = document.querySelector('#ime');
let potvrdi = document.querySelector('.potvrdi')
let form = document.querySelector('#form');
let error = document.querySelector('.error');
let nameSpan = error.querySelector('#nameSpan');

let surrname = document.querySelector('#prezime');
let errorSurname = document.querySelector('.error-surrname');
let surrnameSpan = errorSurname.querySelector('#surrnameSpan');

let email = document.querySelector('#email');
let errorEmail = document.querySelector('.error-email');
let emailSpan = errorEmail.querySelector('#emailSpan');


let password = document.querySelector('#password');
let errorPassword = document.querySelector('.error-password');
let passwordSpan = errorPassword.querySelector('#passwordSpan');



let passwordRepeat = document.querySelector('#repeat-password');
let errorPasswordRepeat = document.querySelector('.error-password-repeat');
let passwordRepeatSpan = errorPasswordRepeat.querySelector('#passwordRepeatSpan');








potvrdi.addEventListener('click', () => {
    //ime
    if (name.value === '' || name.value === null) {
        error.style.display = 'flex';
        error.style.width = '120px';
        nameSpan.innerText = "Unesite ime";
    } else {
        error.style.display = 'none';
    }
    let imeUzorak = /^[A-Z]{1,15}$/;
    if (imeUzorak.test(name.value) || name.value === '') {

    } else {
        error.style.display = 'flex';
        nameSpan.innerText = "Ime nije ispravno";
        error.style.width = '150px';
    }


    //prezime
    if (surrname.value === '' || surrname.value === null) {
        errorSurname.style.display = 'flex';
        errorSurname.style.width = '140px';
        surrnameSpan.innerText = "Unesite prezime";
        console.log(surrname.value);
    } else {
        errorSurname.style.display = 'none';
    }
    let prezimeUzorak = /^[A-Z]{1,20}$/;
    if (prezimeUzorak.test(surrname.value) || surrname.value === '') {

    } else {
        errorSurname.style.display = 'flex';
        surrnameSpan.innerText = "Prezime nije ispravno";
        errorSurname.style.width = '180px';
    }
    //email
    if (email.value === '' || email.value === null) {
        errorEmail.style.display = 'flex';
        errorEmail.style.width = '130px';
        emailSpan.innerText = "Unesite email";
        console.log("1" + email.value);

    } else {
        errorEmail.style.display = 'none';
        console.log("2" + email.value);

    }
    let emailUzorak = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailUzorak.test(email.value) || email.value === '') {
        console.log("3" + email.value);
    } else {
        errorEmail.style.display = 'flex';
        emailSpan.innerText = "Email nije ispravan";
        errorEmail.style.width = '160px';
        console.log("4" + email.value);
    }



    //password

    if (password.value === '' || password.value === null) {
        errorPassword.style.display = 'flex';
        errorPassword.style.width = '150px';
        passwordSpan.innerText = "Unesite password";
        console.log("1" + password.value);

    } else {
        errorPassword.style.display = 'none';
        console.log("2" + email.value);

    }
    let passwordUzorak = /^(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (passwordUzorak.test(password.value) || password.value === '') {
        console.log("3" + email.value);
    } else {
        errorPassword.style.display = 'flex';
        passwordSpan.innerText = "Password nije ispravan";
        errorPassword.style.width = '180px';
        console.log("4" + email.value);
    }

    //repeat password


    if (passwordRepeat.value === '' || passwordRepeat.value === null) {
        errorPasswordRepeat.style.display = 'flex';
        errorPasswordRepeat.style.width = '180px';
        passwordRepeatSpan.innerText = "Potvrdite password";


    } else {
        errorPasswordRepeat.style.display = 'none';


    }

    if (passwordRepeat.value === password.value) {

    } else {
        errorPasswordRepeat.style.display = 'flex';
        passwordRepeatSpan.innerText = "Password nije ispravan";
        errorPasswordRepeat.style.width = '200px';

    }


});