const app = document.getElementById("app")

let bossData={}

/* LOAD JSON */

async function loadData(){
const res=await fetch("data/bosses.json")
bossData=await res.json()
renderHome()
}

loadData()

/* NAVIGATION */

function navigate(page){
if(page==="home") renderHome()
if(page==="tier") renderTier()
if(page==="guide") renderGuideMenu()
if(page==="about") renderAbout()
}

/* IMAGE VIEWER */

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

/* IMAGE HELPERS */

function icon(path){

const file=path.split("/").pop().replace(".png","")

const name=file
.replace(/_/g," ")
.replace(/\b\w/g,l=>l.toUpperCase())

return `
<div class="iconFrame" onclick="openImage('${path}','${name}')">
<img src="${path}">
</div>
`
}

function guideImage(path){

const file=path.split("/").pop().replace(".png","")
const name=file.replace(/_/g," ").replace(/\b\w/g,l=>l.toUpperCase())

return `<img class="guideImg" src="${path}" onclick="openImage('${path}','${name}')">`
}

function weaponIcon(name){
return icon(`assets/divineweapons/${name}.png`)
}

/* HOME */

function renderHome(){

const activeCodes=[
"ORB1000GIFT","ORB2000GIFT","AVATAR0808","AVATARXBLADE1",
"AVATARXBLADE2","AVATARDISCORD","DISCORD11000",
"TOWER10GIFT","GLOBAL200DAY","MARCH2026GIFT"
]

let codeHTML=""

activeCodes.forEach(c=>{
codeHTML+=`<div class="code">${c}</div>`
})

app.innerHTML=`

<div class="card">

<h2>Game Meta Overview</h2>

<h3>Combo</h3>
<p>Main PvE progression build.</p>
<p>Strong against Skill teams.</p>

<h3>Skill</h3>
<p>High burst Arena build.</p>
<p>Strong against Counter teams.</p>

<h3>Counter</h3>
<p>Defensive Arena build.</p>
<p>Strong against Combo teams.</p>

</div>

<div class="card">

<h2>Working Codes</h2>

<div class="codeList">${codeHTML}</div>

</div>
`

}

/* TIER */

function renderTier(){

const tiers={
Combo:["elysia","naktia"],
Skill:["erian","serena","blake"],
Counter:["eve","yoran","raiden"]
}

let html=`<div class="card"><h2>Mythic Tier Avatar</h2></div>`

for(const t in tiers){

html+=`<div class="card"><h3>${t}</h3><div class="tierSection">`

tiers[t].forEach((a,i)=>{

html+=`
<div class="avatarRow">

${icon(`assets/avatars/${a}.png`)}

<div class="rank">#${i+1}</div>

<div>${a}</div>

</div>
`

})

html+=`</div></div>`
}

app.innerHTML=html

}

/* GUIDE MENU */

function renderGuideMenu(){

app.innerHTML=`

<div class="card">

<h2>Guides</h2>

<div class="guideButton" onclick="renderWorldBoss()">World Boss Guide</div>

<div class="guideButton" onclick="renderTower()">Infinite Tower Guide</div>

<div class="guideButton" onclick="renderDivineWeapons()">Divine Weapons</div>

</div>
`

}

/* WORLD BOSS */

function renderWorldBoss(){

let html=`<div class="card"><h2>World Boss Guide</h2></div>`

Object.values(bossData).forEach(b=>{

html+=`

<div class="card">

<h3>${b.name}</h3>

${guideImage(b.image)}

<div class="iconRow">

${icon(`assets/avatars/${b.avatar}.png`)}
${icon(`assets/guide/${b.pet}`)}
${icon(`assets/guide/${b.skill}`)}
${icon(`assets/guide/${b.special}`)}
${icon(`assets/guide/${b.rune}`)}
${icon(`assets/guide/${b.relic}`)}

</div>

<p>Forge: ${b.forge}</p>

</div>
`
})

app.innerHTML=html

}

/* TOWER */

function renderTower(){

const towers=[
{name:"Tower of Steel",boss:"ironspider",img:"assets/guide/tower_steel.png"},
{name:"Tower of Rift",boss:"abyssaltyrant",img:"assets/guide/tower_rift.png"},
{name:"Tower of Gale",boss:"poisonivy",img:"assets/guide/tower_gale.png"}
]

let html=`<div class="card"><h2>Infinite Tower</h2></div>`

towers.forEach(t=>{

const b=bossData[t.boss]

html+=`

<div class="card">

<h3>${t.name}</h3>

${guideImage(t.img)}

<div class="iconRow">

${icon(`assets/avatars/${b.avatar}.png`)}
${icon(`assets/guide/${b.pet}`)}
${icon(`assets/guide/${b.skill}`)}
${icon(`assets/guide/${b.special}`)}
${icon(`assets/guide/${b.rune}`)}
${icon(`assets/guide/${b.relic}`)}

</div>

<p>Forge: ${b.forge}</p>

</div>
`
})

app.innerHTML=html

}

/* DIVINE WEAPONS (kept same logic) */

function renderDivineWeapons(){

app.innerHTML=`<div class="card"><h2>Divine Weapons</h2><p>Weapon combinations listed here.</p></div>`

}

/* ABOUT */

function renderAbout(){

app.innerHTML=`

<div class="card">

<h2>About</h2>

<p>Fan-made guide site for Legend of Avatar Idle RPG.</p>

</div>
`
}