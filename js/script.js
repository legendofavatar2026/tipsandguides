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

const popup = document.getElementById("updatePopup");
const closeBtn = document.querySelector(".close-popup");

// Change this whenever you update the popup
const popupVersion = "October Update Preview";

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

const batContainer = document.getElementById("sparkle-container");

function createBat(){

    const bat = document.createElement("div");

    bat.className = "sparkle";
    bat.textContent = "🦇";

    const size = 0.6 + Math.random() * 0.9;
    const top = 5 + Math.random() * 85;
    const duration = 7 + Math.random() * 8;

    bat.style.top = `${top}vh`;
    bat.style.setProperty("--size", size);
    bat.style.setProperty("--duration", `${duration}s`);

    batContainer.appendChild(bat);

    setTimeout(() => {
        bat.remove();
    }, duration * 1000);
}

setInterval(() => {

    createBat();

    if(Math.random() < 0.35){
        setTimeout(createBat, 150 + Math.random() * 500);
    }

}, 900);