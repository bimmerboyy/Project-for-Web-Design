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



});