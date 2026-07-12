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