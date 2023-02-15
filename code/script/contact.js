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


let text = document.querySelector('#text');
let errorText = document.querySelector('.error-text');
let textSpan = errorText.querySelector('#textSpan');






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
        console.log(email.value);

    } else {
        errorSurname.style.display = 'none';
        console.log(email.value);

    }
    let emailUzorak = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailUzorak.test(email.value) || email.value === '') {

    } else {
        errorEmail.style.display = 'flex';
        emailSpan.innerText = "Email nije ispravan";
        errorEmail.style.width = '160px';
    }
    //text polje

    if (text.value === '' || text.value === null) {
        errorText.style.display = 'flex';
        errorText.style.width = '110px';
        textSpan.innerText = "Unesite text";
        console.log(text.value);

    } else {
        errorSurname.style.display = 'none';
        console.log(text.value);

    }
    let textUzorak = /(?:[.?!]\s+)([A-Z])/g;
    if (emailUzorak.test(text.value) || text.value === '') {

    } else {

        errorText.style.display = 'flex';
        textSpan.innerText = "Text nije ispravan";
        errorText.style.width = '150px';
    }
    console.log(text.value);

});