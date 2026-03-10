function renderDivineWeapons(){

let html=`<div class="card"><h2>Divine Weapons</h2></div>`

DATA.weapons.combinations.forEach(c=>{

html+=`

<div class="card">

<div class="iconRow">

${c.items.map(i=>icon("divineweapons",i.toLowerCase().replace(" ","")+".png")).join("")}

</div>

<p>${c.effect} : ${c.value}</p>

${c.level ? `<p>${c.level}</p>` : ""}

</div>

`

})

app.innerHTML=html

}
