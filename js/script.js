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

closeBtn.onclick = () => {
    popup.style.display = "none";
};

window.onclick = (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
};

