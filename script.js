/* =========================
CORE
========================= */

const app = document.getElementById("app")

function navigate(page){
if(page==="home") renderHome()
if(page==="tier") renderTier()
if(page==="guide") renderGuideMenu()
if(page==="about") renderAbout()
}

/* =========================
IMAGE VIEWER
========================= */

function openImage(src){

const viewer=document.createElement("div")
viewer.className="imageViewer"

viewer.innerHTML=`<img src="${src}">`

viewer.onclick=()=>viewer.remove()

document.body.appendChild(viewer)

}

/* =========================
IMAGE HELPERS
========================= */

function icon(path){

return `

<div class="iconFrame" onclick="openImage('${path}')">
<img src="${path}">
</div>
`

}

function guideImage(path){

return `<img class="guideImg" src="${path}" onclick="openImage('${path}')">`

}

function weaponIcon(name){

return icon(`assets/divineweapons/${name}.png`)

}

/* =========================
HOME
========================= */

function renderHome(){

const activeCodes=[
"ORB1000GIFT",
"ORB2000GIFT",
"AVATAR0808",
"AVATARXBLADE1",
"AVATARXBLADE2",
"AVATARDISCORD",
"DISCORD11000",
"TOWER10GIFT",
"GLOBAL200DAY",
"MARCH2026GIFT"
]

const expiredCodes=[
"AVATARXHOON","AVATARTHANKS",
"DISCORD1000","DISCORD2000","DISCORD3000","DISCORD4000",
"DISCORD5000","DISCORD6000","DISCORD7000","DISCORD8000",
"DISCORD9000","DISCORD10000",
"THANKU4PLAY","AVATAR30DAYS","AVATARYOMI","SOOPYOMI",
"GoblinMustDie","MIRACLE50","HAPPYHALLOWEEN",
"1111BONUS","1111BONUS2","1111BONUS3","1111BONUS4",
"1111BONUS5","1111BONUS6","1111BONUS7","1111BONUS8",
"1111BONUS9","1111BONUS10","1111BONUS11",
"GLOBAL100DAY","AVATARBLAKE",
"AVATARXMAS2025","AVATARX2026",
"DEVNOTE2026","STRONGSTRONG1",
"UPDATEGIFT1","STRONGSTRONG2",
"GOODPARTNER","GOODPARTNER2"
]

let activeHTML=""
activeCodes.forEach(c=>{
activeHTML+=`<div class="code">${c}</div>`
})

let expiredHTML=""
expiredCodes.forEach(c=>{
expiredHTML+=`<div class="code expired">${c}</div>`
})

app.innerHTML=`

<div class="card">

<h2>Game Meta Overview</h2>

<h3>Combo</h3>
<p>Main PvE progression build.</p>
<p>Strong against Skill teams in Arena.</p>
<p>Main build for Tower of Gale and Poison Ivy.</p>

<h3>Skill</h3>
<p>Burst build used in Arena.</p>
<p>Strong against Counter teams.</p>
<p>Main build for Tower of Rift and Abyssal Tyrant.</p>

<h3>Counter</h3>
<p>Defensive Arena build.</p>
<p>Strong against Combo teams.</p>
<p>Main build for Tower of Steel and Iron Spider.</p>

</div>

<div class="card">

<h2>Working Codes</h2>
<div class="codeList">${activeHTML}</div>

<h3>Expired Codes</h3>
<div class="codeList">${expiredHTML}</div>

</div>

`

}

/* =========================
TIER LIST
========================= */

function renderTier(){

const tiers={
Combo:["elysia","naktia"],
Skill:["erian","serena","blake"],
Counter:["eve","yoran","raiden"]
}

let html=`<div class="card"><h2>Mythic Tier Avatar</h2></div>`

for(const t in tiers){

html+=`<div class="card"><h3>${t}</h3>`

tiers[t].forEach((a,i)=>{

html+=`

<div class="avatarRow">

${icon(`assets/avatars/${a}.png`)}

<div class="rank">#${i+1}</div>

<div>${a}</div>

</div>

`

})

html+=`</div>`

}

app.innerHTML=html

}

/* =========================
GUIDE MENU
========================= */

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

/* =========================
WORLD BOSS
========================= */

function renderWorldBoss(){

app.innerHTML=`

<div class="card">

<h2>World Boss Guide</h2>

<p>Boss rotation:</p>

<p>Iron Spider → Poison Ivy → Abyssal Tyrant</p>

</div>

<div class="card">

<h3>Iron Spider</h3>

${guideImage("assets/guide/ironspider.png")}

<div class="iconRow">

${icon("assets/avatars/eve.png")}
${icon("assets/guide/is_pet.png")}
${icon("assets/guide/is_skill.png")}
${icon("assets/guide/is_special.png")}
${icon("assets/guide/is_rune.png")}
${icon("assets/guide/is_relic.png")}

</div>

<p>Forge: FINAL COUNTER DMG</p>

</div>

<div class="card">

<h3>Abyssal Tyrant</h3>

${guideImage("assets/guide/abyssaltyrant.png")}

<div class="iconRow">

${icon("assets/avatars/erian.png")}
${icon("assets/guide/at_pet.png")}
${icon("assets/guide/at_skill.png")}
${icon("assets/guide/at_special.png")}
${icon("assets/guide/at_rune.png")}
${icon("assets/guide/at_relic.png")}

</div>

<p>Forge: FINAL SKILL CRIT DMG</p>

</div>

<div class="card">

<h3>Poison Ivy</h3>

${guideImage("assets/guide/poisonivy.png")}

<div class="iconRow">

${icon("assets/avatars/elysia.png")}
${icon("assets/guide/pi_pet.png")}
${icon("assets/guide/pi_skill.png")}
${icon("assets/guide/pi_special.png")}
${icon("assets/guide/pi_rune.png")}
${icon("assets/guide/pi_relic.png")}

</div>

<p>Forge: FINAL DOUBLE COMBO DMG</p>

</div>

`

}

/* =========================
TOWER GUIDE
========================= */

function renderTower(){

app.innerHTML=`

<div class="card">

<h2>Infinite Tower</h2>

<p>Each tower uses the same build as the matching world boss.</p>

</div>

<div class="card">

<h3>Tower of Rift</h3>

${guideImage("assets/guide/tower_rift.png")}

<p>Uses the Abyssal Tyrant skill build.</p>

</div>

<div class="card">

<h3>Tower of Gale</h3>

${guideImage("assets/guide/tower_gale.png")}

<p>Uses the Poison Ivy combo build.</p>

</div>

<div class="card">

<h3>Tower of Steel</h3>

${guideImage("assets/guide/tower_steel.png")}

<p>Uses the Iron Spider counter build.</p>

</div>

`

}

/* =========================
DIVINE WEAPONS
========================= */

function renderDivineWeapons(){

const combos=[

{items:["executioner","solarhalo"],effect:"Ultimate Attack",value:"20%"},
{items:["muramasa","glacion"],effect:"Ultimate Attack",value:"20%"},
{items:["nidhogg","solarhalo","muramasa","glacion"],effect:"Ultimate Damage Increase",value:"3.50%"},
{items:["worldbreaker","blazefury"],effect:"Ultimate Skill Damage",value:"2.50%"},
{items:["shadowthorn","grimreaper"],effect:"Ultimate Defense",value:"3%"},
{items:["caladbolg","durandal"],effect:"Ultimate HP",value:"8%"},
{items:["dragonseye","frostfang"],effect:"Ultimate Normal Attack Damage",value:"2.50%"},
{items:["nidhogg","shootingstar","evilmoon"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["nidhogg","executioner","plasmaedge"],effect:"Ultimate Skill Damage",value:"3.60%"},
{items:["glacion","caladbolg"],effect:"Ultimate HP",value:"8%"},

{items:["muramasa","durandal"],effect:"Ultimate Defense",value:"3%"},
{items:["evilmoon","solarhalo"],effect:"Ultimate Combo Triple Damage",value:"2.50%"},
{items:["reddragon","shootingstar"],effect:"Ultimate ATK/DEF/HP",value:"3%"},
{items:["worldbreaker","shadowthorn","dragonseye"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["blazefury","grimreaper","frostfang"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["glacion","caladbolg","epeefleur"],effect:"Ultimate Counterattack Damage",value:"6.20%"},
{items:["nidhogg","executioner"],effect:"Ultimate Skill Critical Damage",value:"6.20%"},
{items:["plasmaedge","epeefleur"],effect:"Ultimate Combo Double Damage",value:"6.20%"},

{items:["worldbreaker","shootingstar"],effect:"Ultimate Attack",value:"20%"},
{items:["blazefury","shadowthorn"],effect:"Ultimate Defense",value:"3%"},
{items:["durandal","grimreaper"],effect:"Ultimate ATK/DEF/HP",value:"3%"},
{items:["shootingstar","evilmoon"],effect:"Ultimate HP",value:"8%"},
{items:["shadowthorn","worldbreaker"],effect:"Ultimate Defense",value:"3%"},
{items:["grimreaper","blazefury"],effect:"Ultimate ATK/DEF/HP",value:"3%"},
{items:["evilmoon","durandal"],effect:"Ultimate HP",value:"8%"},
{items:["caladbolg","dragonseye","frostfang"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["nidhogg","caladbolg","shadowthorn"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["worldbreaker","shootingstar","evilmoon"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["blazefury","frostfang","durandal"],effect:"Ultimate Damage Increase",value:"2.90%"}

]

const grouped={}

combos.forEach(c=>{
if(!grouped[c.effect]) grouped[c.effect]=[]
grouped[c.effect].push(c)
})

let html=`<div class="card"><h2>Divine Weapons</h2></div>`

for(const effect in grouped){

html+=`<div class="card"><h3>${effect}</h3>`

grouped[effect].forEach(c=>{

let icons=""

c.items.forEach(i=>{
icons+=weaponIcon(i)
})

html+=`

<div class="weaponRow">

<div class="iconRow">${icons}</div>

<div class="weaponValue">${c.value}</div>

</div>

`

})

html+=`</div>`

}

app.innerHTML=html

}

/* =========================
ABOUT
========================= */

function renderAbout(){

app.innerHTML=`

<div class="card">

<h2>About</h2>

<p>Fan-made guide site for Legend of Avatar Idle RPG.</p>

<p>Mobile-friendly and community maintained.</p>

</div>

`

}

/* =========================
INIT
========================= */

renderHome()
