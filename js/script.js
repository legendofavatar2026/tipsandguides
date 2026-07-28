const search = document.getElementById("search");

search.addEventListener("keyup",function(){

    let value=this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        let text=card.innerText.toLowerCase();

        card.style.display=text.includes(value)
            ? "block"
            : "none";

    });

});

const backgrounds = [
    "websitebg1.png",
    "websitebg2.png",
    "websitebg3.png",
    "websitebg0.png"
];

// Create a number that changes once per day
const today = new Date();
const dayNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));

// Pick today's background
const background = backgrounds[dayNumber % backgrounds.length];

document.body.style.background = `
    linear-gradient(rgba(10,10,15,0.82), rgba(10,10,15,0.82)),
    url("${background}")
`;

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";


const popup = document.getElementById("updatePopup");
const closeBtn = document.querySelector(".close-popup");

// Change this whenever you update the popup
const popupVersion = "LOA-1.24.0";

// Show popup only if this version hasn't been seen
if (localStorage.getItem("popupVersion") !== popupVersion) {
    popup.style.display = "flex";
} else {
    popup.style.display = "none";
}

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    localStorage.setItem("popupVersion", popupVersion);
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        localStorage.setItem("popupVersion", popupVersion);
    }
});

const sparkleContainer = document.getElementById("sparkle-container");

function createSparkle(){

    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    const size = Math.random() * 4 + 4;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    sparkle.style.animationDuration = (Math.random() * 1.5 + 2) + "s";

    sparkleContainer.appendChild(sparkle);

    sparkle.addEventListener("animationend", () => {
        sparkle.remove();
    });

}

setInterval(createSparkle, 500);