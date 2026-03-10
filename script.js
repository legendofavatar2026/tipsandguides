const app = document.getElementById("app")

/* ---------- DATA STORAGE ---------- */

let DATA = {
avatars:{},
bosses:{},
guides:{},
weapons:{}
}

/* ---------- SAFE JSON LOADER ---------- */

async function loadJSON(path){
try{
const r = await fetch(path)
if(!r.ok) throw new Error("Missing")
return await r.json()
}catch(e){
console.log("Failed loading:",path)
return {}
}
}

/* ---------- INITIAL LOAD ---------- */

async function init(){

DATA.avatars = await loadJSON("./data/avatars.json")
DATA.bosses = await loadJSON("./data/bosses.json")
DATA.guides = await loadJSON("./data/guides.json")
DATA.weapons = await loadJSON("./data/weapons.json")

renderHome()

}

init()

/* ---------- NAVIGATION ---------- */

function navigate(page){

if(page==="home") renderHome()
if(page==="tier") renderTier()
if(page==="guide") renderGuideMenu()
if(page==="about") renderAbout()

}

/* ---------- IMAGE VIEWER ---------- */

function openImage(src,name){

const viewer=document.createElement("div")
viewer.className="imageViewer"

viewer.innerHTML=`
<div class="viewerContent">
<img src="${src}">
<div class="viewerTitle">${name}</div>
</div>
`

viewer.onclick=()=>viewer.remove()

document.body.appendChild(viewer)

}

/* ---------- ICON HELPER ---------- */

function icon(folder,file){

const name=file.replace(".png","")

return `
<div class="iconFrame"
onclick="openImage('assets/${folder}/${file}','${name}')">
<img src="assets/${folder}/${file}">
</div>
`

}

/* ---------- HOME ---------- */

function renderHome(){

app.innerHTML=`

<div class="card">

<h2>Legend of Avatar Global Guide</h2>

<p>
World Boss builds, Infinite Tower strategies, and Divine Weapon combinations.
</p>

</div>

`

}

/* ---------- TIER LIST ---------- */

function renderTier(){

let html=`<div class="card"><h2>Avatar Tier List</h2></div>`

for(const type in DATA.avatars){

html+=`<div class="card"><h3>${type}</h3><div class="tierSection">`

DATA.avatars[type].forEach((a,i)=>{

html+=`

<div class="avatarRow">

${icon("avatars",a+".png")}

<div class="rank">#${i+1}</div>

<div>${a}</div>

</div>

`

})

html+=`</div></div>`

}

app.innerHTML=html

}

/* ---------- GUIDE MENU ---------- */

function renderGuideMenu(){

app.innerHTML=`

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

/* ---------- WORLD BOSS ---------- */

function renderBossGuide(){

if(!DATA.bosses){
app.innerHTML=`<div class="card">Boss data missing</div>`
return
}

let html=`<div class="card"><h2>World Boss</h2></div>`

for(const id in DATA.bosses){

const b=DATA.bosses[id]

html+=`

<div class="card">

<h3>${b.name}</h3>

<img class="guideImg"
src="assets/guide/${b.image}"
onclick="openImage('assets/guide/${b.image}','${b.name}')">

<p>Forge: ${b.forge}</p>

</div>

`

}

app.innerHTML=html

}

/* ---------- TOWER ---------- */

function renderTowerGuide(){

if(!DATA.guides.towers){
app.innerHTML=`<div class="card">Tower data missing</div>`
return
}

let html=`<div class="card"><h2>Infinite Tower</h2></div>`

DATA.guides.towers.forEach(t=>{

html+=`

<div class="card">

<h3>${t.name}</h3>

<img class="guideImg"
src="assets/guide/${t.image}"
onclick="openImage('assets/guide/${t.image}','${t.name}')">

</div>

`

})

app.innerHTML=html

}

/* ---------- DIVINE WEAPONS ---------- */

function renderDivineWeapons(){

if(!DATA.weapons.combinations){
app.innerHTML=`<div class="card">Weapon data missing</div>`
return
}

let html=`<div class="card"><h2>Divine Weapons</h2></div>`

DATA.weapons.combinations.forEach(c=>{

html+=`

<div class="card">

<p>${c.items.join(" + ")}</p>

<p>${c.effect} : ${c.value}</p>

</div>

`

})

app.innerHTML=html

}

/* ---------- ABOUT ---------- */

function renderAbout(){

app.innerHTML=`

<div class="card">

<h2>About</h2>

<p>Fan-made guide site for Legend of Avatar Idle RPG.</p>

</div>

`

}
