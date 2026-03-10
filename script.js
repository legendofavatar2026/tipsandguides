const app = document.getElementById("app")

let DATA = {
avatars:{},
bosses:{},
guides:{},
weapons:{}
}

/* SAFE JSON LOADER */

async function loadJSON(path){
try{
const r = await fetch(path)
return await r.json()
}catch(e){
console.log("Missing:",path)
return {}
}
}

/* INITIALIZE */

async function init(){

DATA.avatars = await loadJSON("data/avatars.json")
DATA.bosses = await loadJSON("data/bosses.json")
DATA.guides = await loadJSON("data/guides.json")
DATA.weapons = await loadJSON("data/weapons.json")

renderHome()

}

init()

/* NAVIGATION */

function navigate(page){

if(page==="home") renderHome()
if(page==="tier") renderTier()
if(page==="guide") renderGuideMenu()
if(page==="about") renderAbout()

}

/* IMAGE VIEWER */

function openImage(src,name){

const viewer = document.createElement("div")
viewer.className = "imageViewer"

viewer.innerHTML = `
<div class="viewerContent">
<img src="${src}">
<div class="viewerTitle">${name}</div>
</div>
`

viewer.onclick = () => viewer.remove()

document.body.appendChild(viewer)

}

/* ICON GENERATOR */

function icon(folder,file){

const name = file.replace(".png","")

return `
<div class="iconFrame"
onclick="openImage('assets/${folder}/${file}','${name}')">
<img src="assets/${folder}/${file}">
</div>
`
}

/* HOME PAGE */

function renderHome(){

app.innerHTML = `

<div class="card">

<h2>Legend of Avatar Global Guide</h2>

<p>
Meta builds, boss strategies, tower guides and divine weapon combinations.
</p>

</div>

`

}

/* TIER LIST */

function renderTier(){

let html = `<div class="card"><h2>Mythic Tier Avatar</h2></div>`

for(const type in DATA.avatars){

html += `<div class="card"><h3>${type}</h3><div class="tierSection">`

DATA.avatars[type].forEach((a,i)=>{

html += `

<div class="avatarRow">

${icon("avatars",a+".png")}

<div class="rank">#${i+1}</div>

<div>${a}</div>

</div>

`

})

html += `</div></div>`

}

app.innerHTML = html

}

/* GUIDE MENU */

function renderGuideMenu(){

app.innerHTML = `

<div class="card">

<h2>Guides</h2>

<div class="guideButton" onclick="renderBossGuide()">
World Boss Guide
</div>

<div class="guideButton" onclick="renderTowerGuide()">
Infinite Tower Guide
</div>

<div class="guideButton" onclick="renderDivineWeapons()">
Divine Weapons
</div>

</div>

`

}

/* WORLD BOSS */

function renderBossGuide(){

let html = `<div class="card"><h2>World Boss</h2></div>`

for(const id in DATA.bosses){

const b = DATA.bosses[id]

html += `

<div class="card">

<h3>${b.name}</h3>

<img class="guideImg"
src="assets/guide/${b.image}"
onclick="openImage('assets/guide/${b.image}','${b.name}')">

<div class="iconRow">

${icon("avatars",b.avatar+".png")}
${icon("guide",b.pet)}
${icon("guide",b.skill)}
${icon("guide",b.special)}
${icon("guide",b.rune)}
${icon("guide",b.relic)}

</div>

<p>Forge: ${b.forge}</p>

</div>

`

}

app.innerHTML = html

}

/* TOWER */

function renderTowerGuide(){

let html = `<div class="card"><h2>Infinite Tower</h2></div>`

DATA.guides.towers.forEach(t=>{

const boss = DATA.bosses[t.boss]

html += `

<div class="card">

<h3>${t.name}</h3>

<img class="guideImg"
src="assets/guide/${t.image}"
onclick="openImage('assets/guide/${t.image}','${t.name}')">

<div class="iconRow">

${icon("avatars",boss.avatar+".png")}
${icon("guide",boss.pet)}
${icon("guide",boss.skill)}
${icon("guide",boss.special)}
${icon("guide",boss.rune)}
${icon("guide",boss.relic)}

</div>

<p>Forge: ${boss.forge}</p>

</div>

`

})

app.innerHTML = html

}

/* DIVINE WEAPONS */

function renderDivineWeapons(){

let html = `<div class="card"><h2>Divine Weapons</h2></div>`

DATA.weapons.combinations.forEach(c=>{

html += `

<div class="card">

<div class="iconRow">

${c.items.map(i =>
icon("divineweapons",i.toLowerCase().replace(/ /g,"")+".png")
).join("")}

</div>

<p>${c.effect} : ${c.value}</p>

${c.level ? `<p>${c.level}</p>` : ""}

</div>

`

})

app.innerHTML = html

}

/* ABOUT */

function renderAbout(){

app.innerHTML = `

<div class="card">

<h2>About</h2>

<p>Fan-made guide site for Legend of Avatar Idle RPG.</p>

</div>

`

}
