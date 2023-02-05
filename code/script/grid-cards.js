const toggleButton = document.querySelector(".middle-section .toggle-button");
const navbarLinks = document.querySelector(".middle-section .navigation");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

async function getApi(zanr = "sve") {
    let result = await fetch("https://api.tvmaze.com/shows");
    let data = await result.json();
    console.log(data);
    if (zanr === "sve") {
        data.forEach((movie, index) => createCard(movie, index));
        return;
    }
    data = data.filter((movie, index) => {
        return movie.genres[0] === zanr;
    });
    data.forEach((movie, index) => createCard(movie, index));
}
let cards = [];

function createCard(movie, index) {
    if (index > 14) {
        return;
    }
    let card = `<div class="card" onclick="goto('${movie._links.self.href}')">
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
</div>`;

    let parent = document.querySelector(".grid-card");
    parent.innerHTML += card;
}

let promeniZanr = async () => {
    let zanr = document.querySelector("select").value;
    let parent = document.querySelector(".grid-card");
    parent.innerHTML = "";
    await getApi(zanr);
};

function goto(link) {
    console.log(link);
    location.href = `./more-info.html?link=${link}`;
}
