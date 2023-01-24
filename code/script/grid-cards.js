const toggleButton = document.querySelector('.middle-section .toggle-button');
const navbarLinks = document.querySelector('.middle-section .navigation');


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

async function getApi() {
    let result = await fetch('https://api.tvmaze.com/shows');
    let data = await result.json();
    data.forEach((movie, index) => createCard(movie, index));
}
let cards = [];

function createCard(movie, index) {
    if (index > 14) {
        return;
    }
    let card = `<div class="card">
<div class="first-part">
    <img src="${movie.image.original}" alt="">
</div>
<div class="second-part">
    <p class="title">${movie.name}</p>
    <div class="circle">
        <span>${movie.rating.average}</span>
    </div>
    <p class="info">
        Datum snimanja:${movie.premiered}<br> Žanr:${movie.genres[0]}

    </p>

    <hr>
    <p class="authors">
        Trajanje:${movie.runtime}
    </p>
    <button onclick="gledaj(${movie.id})" class="gledaj">Gledaj</button>
</div>
</div>`

    let parent = document.querySelector('.grid-card');
    parent.innerHTML += card;
    cards = document.querySelectorAll('.card');

}

let select = document.querySelector('select');


console.log(cards);

// select.addEventListener('change', );



let choseGenere = (movie) => {
    let opt = select.options[select.selectedIndex];
    if (opt.value === 'Drama') {

    }




}