const toggleButton = document.querySelector(".middle-section .toggle-button");
const navbarLinks = document.querySelector(".middle-section .navigation");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

let [, link] = window.location.search.split("=");

getApi(link);


async function getApi(link) {
    let result = await fetch(link);
    let data = await result.json();
    let images = await fetch(link + "/images");
    // let actors = await fetch(link + " /people/:id");
    // let actorData = await actors.json();
    let imageData = await images.json();
    createUI(data, imageData);
}

function createUI(data, imageData) {
    let slika = document.getElementById("slika");
    // slika.src = data.image.original;
    let backgrounds = imageData.filter((image) => {
        return image.type === "background";
    });

    let background = backgrounds[0].resolutions.original.url;
    slika.src = background;
    let title = document.getElementById("title");
    title.innerText = data.name;
    let year = document.getElementById("year");
    let yearOfRecord = [];
    let yearTmp = data.premiered.split('');
    for (let i = 0; i < 4; i++) {
        yearOfRecord += yearTmp[i];
    }
    year.innerText = yearOfRecord;

    let time = document.getElementById("time");
    time.innerText = data.runtime + " min";

    let genre = document.getElementById("genre");
    genre.innerText = data.genres[0];

    let info = document.getElementById("main-info");
    let text = data.summary;
    // text = text.slice(6, 100);
    text = text.replace('<p>', '');
    text = text.replace('</p>', '');
    text = text.replace('</b>', '');
    text = text.replace('<b>', '');
    text = text.slice(0, 149);
    info.innerText = text;
    let actor = document.getElementById('actor');

    let logo = document.getElementById('logo-for-info');
    logo.innerText = data.name;
    logo.style.fontFamily = 'Logo';
    logo.style.fontSize = '50px';




}