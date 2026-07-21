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
const popupVersion = "LOA-1.23.0";

// Show popup only if user hasn't seen this version
if (localStorage.getItem("popupVersion") !== popupVersion) {
    popup.style.display = "flex";
}

closeBtn.onclick = () => {
    popup.style.display = "none";
    localStorage.setItem("popupVersion", popupVersion);
};

window.onclick = (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        localStorage.setItem("popupVersion", popupVersion);
    }
};