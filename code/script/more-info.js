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
    let imageData = await images.json();
    createUI(data, imageData);
}

function createUI(data, imageData) {
    let slika = document.getElementById("slika");
    slika.src = data.image.original;
    let baners = imageData.filter((image) => {
        return image.type === "banner";
    });
    let baner = baners[0].resolutions.original.url;
    console.log(baner);
}
