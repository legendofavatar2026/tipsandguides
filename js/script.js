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