/* TAB SYSTEM */

function openTab(evt, tab){

document.querySelectorAll(".tabContent").forEach(t=>t.classList.remove("active"))
document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"))

document.getElementById(tab).classList.add("active")
evt.currentTarget.classList.add("active")

}


/* GUIDE SYSTEM */

const types=["pet","skill","relic","rune","special","forge"]

function openBoss(boss){

const modal = document.getElementById("guideModal")
const body = document.getElementById("modalBody")

const types = ["pet","skill","relic","rune","special","forge"]

body.innerHTML = ""

types.forEach(type=>{

const img = `assets/guide/${boss}_${type}.png`

const section = document.createElement("div")
section.className = "guide-section"

section.innerHTML = `
<h3>${type.toUpperCase()}</h3>
<img src="${img}" loading="lazy">
`

body.appendChild(section)

})

modal.style.display = "block"
}

document.addEventListener("DOMContentLoaded", ()=>{

const modal = document.getElementById("guideModal")
const closeBtn = document.querySelector(".close-modal")

closeBtn.onclick = ()=> modal.style.display = "none"

window.onclick = (e)=>{
if(e.target === modal){
modal.style.display = "none"
}

}

})


function showGuide(img){
document.getElementById("guideImage").src=img
}


/* DIVINE WEAPON DATA */

const weaponData=[
{items:["executioner","solarhalo"],effect:"Ultimate Attack",value:"20%"},
{items:["muramasa","glacion"],effect:"Ultimate Attack",value:"20%"},
{items:["nidhogg","solarhalo","muramasa","glacion"],effect:"Ultimate Damage Increase",value:"3.50%"},
{items:["worldbreaker","blazefury"],effect:"Ultimate Skill Damage",value:"2.50%"},
{items:["shadowthorn","grimreaper"],effect:"Ultimate Defense",value:"3%"},
{items:["caladbolg","durandal"],effect:"Ultimate HP",value:"8%"},
{items:["dragoneye","frostfang"],effect:"Ultimate Normal Attack Damage",value:"2.50%"},
{items:["nidhogg","shootingstar","evilmoon"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["nidhogg","executioner","plasmaedge"],effect:"Ultimate Skill Damage",value:"3.60%"},
{items:["glacion","caladbolg"],effect:"Ultimate HP",value:"8%"},
{items:["muramasa","durandal"],effect:"Ultimate Defense",value:"3%"},
{items:["evilmoon","solarhalo"],effect:"Ultimate Combo Triple Damage",value:"2.50%"},
{items:["reddragon","shootingstar"],effect:"Ultimate ATK/DEF/HP",value:"3%"},
{items:["worldbreaker","shadowthorn","dragoneye"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["blazefury","grimreaper","frostfang"],effect:"Ultimate Damage Increase",value:"2.90%"},
{items:["glacion","caladbolg","epeefleur"],effect:"Ultimate Counterattack Damage",value:"6.20%"},
{items:["nidhogg","executioner"],effect:"Ultimate Skill Critical Damage",value:"6.20%"},
{items:["plasmaedge","epeefleur"],effect:"Ultimate Combo Double Damage",value:"6.20%"}
]

/* PET DATA */
const petData = [
{name:"alien", lead:"skill dmg 30%", effect:"ignore evasion 10%"},
{name:"aura", lead:"atk speed 65%", effect:"ignore counter 10%"},
{name:"blitz", lead:"atk speed 46%", effect:"evasion 6%"},
{name:"bubbles", lead:"normal atk dmg resist 30%", effect:"ignore evasion 10%"},
{name:"dash", lead:"double combo dmg 43%", effect:"ignore combo 6%"},
{name:"draco", lead:"triple combo chance 30%", effect:"ignore evasion 10%"},
{name:"duff", lead:"boss dmg 45%", effect:"movement speed 0.60%"},
{name:"elio", lead:"dmg reduction 13%", effect:"ignore combo 10%"},
{name:"giggles", lead:"combo dmg resist 21%", effect:"ignore counter 6%"},
{name:"grump", lead:"boss dmg resist 21%", effect:"ignore evasion 6%"},
{name:"ice", lead:"counter chance 21%", effect:"ignore combo 6%"},
{name:"inferno", lead:"combo dmg resist 30%", effect:"movement speed 0.90%"},
{name:"lumina", lead:"double combo chance 30%", effect:"evasion 10%"},
{name:"obsidian", lead:"normal atk dmg 30%", effect:"ignore combo 10%"},
{name:"polly", lead:"crit dmg resist 30%", effect:"evasion 10%"},
{name:"raven", lead:"triple combo chance 21%", effect:"evasion 6%"},
{name:"rose", lead:"recovery 65%", effect:"ignore combo 10%"},
{name:"rox", lead:"atk speed 65%", effect:"movement speed 0.90%"},
{name:"scales", lead:"counter 30%", effect:"ignore evasion 10%"},
{name:"shadow", lead:"double combo dmg 60%", effect:"movement speed 0.90%"},
{name:"snowman", lead:"boss dmg 56%", effect:"ignore counter 10%"},
{name:"sprint", lead:"counter dmg 60%", effect:"ignore evasion 10%"},
{name:"storm", lead:"normal atk dmg 21%", effect:"ignore counter 6%"},
{name:"stripe", lead:"counter dmg resist 21%", effect:"ignore combo 6%"},
{name:"suzaku", lead:"counter dmg 60%", effect:"ignore combo 20%"},
{name:"swift", lead:"skill dmg resist 21%", effect:"ignore counter 6%"},
{name:"twinkle", lead:"boss dmg 56%", effect:"ignore evasion 10%"},
{name:"typhon", lead:"boss dmg resist 30%", effect:"evasion 10%"},
{name:"wave", lead:"double combo chance 21%", effect:"ignore counter 6%"},
{name:"wiz", lead:"triple combo dmg 43%", effect:"movement speed 0.60%"},
{name:"yura", lead:"triple combo dmg 60%", effect:"ignore combo 10%"},
{name:"zephyros", lead:"recovery 65%", effect:"ignore counter 10%"}
];


/* GROUP BY EFFECT */

const grouped={}

weaponData.forEach(w=>{
if(!grouped[w.effect]) grouped[w.effect]=[]
grouped[w.effect].push(w)
})


const container=document.getElementById("weaponContainer")

for(const effect in grouped){

const group=document.createElement("div")
group.className="weaponGroup"

group.innerHTML=`<h3>${effect}</h3>`

grouped[effect].forEach(combo=>{

const div=document.createElement("div")
div.className="weaponCombo"

let icons=`<div class="weaponItems">`

combo.items.forEach(i=>{
icons+=`<img src="assets/divineweapons/${i}.png">`
})

icons+=`</div>`

div.innerHTML=icons+`<b>${combo.value}</b>`

group.appendChild(div)

})

container.appendChild(group)

}

/* EXP TIERS */

/* EXP TIERS */

const tiers = [
"T","Qa","Qi","Sx","Sp","Oc","No","De",
"Ud","Dd","Td","Qad","Qid","Sxd","Spd",
"Ocd","Nod","Vg","C"
]

/* initialize tier dropdowns after page loads */

window.addEventListener("DOMContentLoaded",()=>{

const currentTierSelect=document.getElementById("currentTier")
const targetTierSelect=document.getElementById("targetTier")

if(!currentTierSelect || !targetTierSelect) return

tiers.forEach(t=>{

let o1=document.createElement("option")
o1.value=t
o1.text=t

let o2=document.createElement("option")
o2.value=t
o2.text=t

currentTierSelect.appendChild(o1)
targetTierSelect.appendChild(o2)

})

})

/* PET data render */
window.addEventListener("DOMContentLoaded", () => {

const filter = document.getElementById("petFilter")
if(!filter) return

const effects = [...new Set(petData.map(p => getBaseEffect(p.effect)))]

effects.forEach(e => {
const opt = document.createElement("option")
opt.value = e
opt.textContent = e.toUpperCase()
filter.appendChild(opt)
})



})


/* convert tier to base */

function toBase(value,tier){

const index=tiers.indexOf(tier)

return value*Math.pow(1000,index)

}

/* CALCULATOR */

function calculateProgress(){

const rate=parseFloat(document.getElementById("expPerMin").value)
const rateTier=document.getElementById("currentTier").value

const targetValue=parseFloat(document.getElementById("targetAmount").value)
const targetTier=document.getElementById("targetTier").value

if(!rate || !targetValue){

document.getElementById("trainingResult").innerHTML="Fill all fields"
return

}

const rateBase=toBase(rate,rateTier)
const targetBase=toBase(targetValue,targetTier)

/* time */

const minutes=targetBase/rateBase
const hours=minutes/60
const days=hours/24

document.getElementById("trainingResult").innerHTML=`

<b>Estimated Time</b><br><br>

${minutes.toLocaleString(undefined,{maximumFractionDigits:2})} minutes<br>
${hours.toLocaleString(undefined,{maximumFractionDigits:2})} hours<br>
${days.toLocaleString(undefined,{maximumFractionDigits:2})} days

`

}

/* GIFT CODES SYSTEM */

const giftCodes = [

{code:"ORB1000GIFT"},
{code:"ORB2000GIFT"},
{code:"AVATAR0808"},
{code:"AVATARXBLADE1"},
{code:"AVATARXBLADE2"},
{code:"AVATARDISCORD"},
{code:"DISCORD11000"},
{code:"TOWER10GIFT"},
{code:"GLOBAL200DAY"},
{code:"MARCH2026GIFT"},
{code:"DIAMOND500", new:true}

]


function loadGiftCodes(){

const container = document.getElementById("codesContainer")

container.innerHTML=""

giftCodes.forEach(item=>{

const div=document.createElement("div")
div.className="codeBox"

const label=item.new ? " <b style='color:#4caf50'>NEW</b>" : ""

div.innerHTML=`
<span>${item.code}${label}</span>
<button onclick="copyCode('${item.code}')">Copy</button>
`

container.appendChild(div)

})

}
/* PETS FUNCTION */
function renderPets(selected){

const container = document.getElementById("petContainer")
container.innerHTML = ""

petData
.filter(p => {
if(selected === "all") return true
return getBaseEffect(p.effect) === selected
})
.forEach(p => {

const div = document.createElement("div")
div.className = "petCard"

div.innerHTML = `
<img src="assets/pets/${p.name}.png" alt="${p.name}">
<h4>${p.name}</h4>
<p><b>Lead:</b> ${p.lead}</p>
<p><b>Effect:</b> ${p.effect}</p>
`

container.appendChild(div)

})

}


function filterPets(){
const value = document.getElementById("petFilter").value
renderPets(value)
}
function getBaseEffect(effect){
return effect
.replace(/[0-9.]+%?/g,"") // remove numbers like 10%, 0.90
.trim()
.toLowerCase()
}


function loadPetSelectors(){

const lead = document.getElementById("leadPet")
const equips = document.querySelectorAll(".equipPet")

petData.forEach(p => {

const opt = `<option value="${p.name}">${p.name}</option>`

lead.innerHTML += opt

equips.forEach(sel=>{
sel.innerHTML += opt
})

})

}

window.addEventListener("DOMContentLoaded", loadPetSelectors)

function generateBuild(){

const leadName = document.getElementById("leadPet").value
const equips = [...document.querySelectorAll(".equipPet")].map(e=>e.value)

// ✅ VALIDATION
const check = validateBuild(leadName, equips)

const container = document.getElementById("buildPreview")

if(!check.valid){
container.innerHTML = `<div class="warning">${check.message}</div>`
return
}

// continue if valid
const lead = petData.find(p=>p.name===leadName)
const equipPets = equips.map(name=>petData.find(p=>p.name===name))

// detect duplicate EFFECTS (optional, keep your old logic)
const effects = equipPets.map(p=>p.effect)
const duplicates = effects.filter((e,i,a)=>a.indexOf(e)!==i)

const warning = duplicates.length ? 
`<div class="warning">⚠ Duplicate Effect Detected</div>` : ""

container.innerHTML = `
<div class="build-card pro" id="captureArea">

<div class="build-header">
<h2>Pet Build</h2>
<span class="watermark"></span>
</div>

${warning}

<div class="full-row">
<div class="pet-box lead">
<img src="assets/pets/${lead.name}.png">
<h4>${lead.name}</h4>
<p>${lead.lead}</p>
<span class="tag">LEAD</span>
</div>

${equipPets.map(p=>`
<div class="pet-box">
<img src="assets/pets/${p.name}.png">
<h4>${p.name}</h4>
<p>${p.effect}</p>
</div>
`).join("")}
</div>
</div>
</div>
`
}



function validateBuild(leadName, equips){

const all = [leadName, ...equips]

// find duplicates
const duplicates = all.filter((item, index) => all.indexOf(item) !== index)

if(duplicates.length > 0){
return {
valid:false,
message:"⚠ Duplicate pets are not allowed"
}
}

return { valid:true }

}

function downloadBuild(){

const area = document.getElementById("captureArea")

if(!area){
alert("Please generate a build first!")
return
}

html2canvas(area,{
scale:2,
backgroundColor:"#0e0e0e"
}).then(canvas=>{

/* 🔥 fallback-safe download */
const image = canvas.toDataURL("image/png")

const a = document.createElement("a")
a.href = image
a.download = "pet-build.png"

/* required for browser */
document.body.appendChild(a)
a.click()
document.body.removeChild(a)

}).catch(err=>{
console.error(err)
alert("Download failed")
})

}


document.querySelector(".btn.secondary").disabled = true
document.querySelector(".btn.secondary").disabled = false

/* END PET FUNCTION*/
function copyCode(code){

navigator.clipboard.writeText(code)

const msg=document.createElement("div")
msg.innerText="Copied: "+code

msg.style.position="fixed"
msg.style.bottom="20px"
msg.style.left="50%"
msg.style.transform="translateX(-50%)"
msg.style.background="#222"
msg.style.padding="10px 15px"
msg.style.borderRadius="6px"
msg.style.zIndex="9999"

document.body.appendChild(msg)

setTimeout(()=>msg.remove(),1500)

}

function renderWeapons(selected="all"){

  const container = document.getElementById("weaponContainer")
  container.innerHTML = ""

  weaponData
  .filter(w => selected === "all" || w.effect === selected)
  .forEach(w => {

    const div = document.createElement("div")
    div.className = "card weaponCard"

    let icons = ""

    w.items.forEach(i=>{
      icons += `<img src="assets/divineweapons/${i}.png">`
    })

    div.innerHTML = `
      <div class="weapon-icons">${icons}</div>
      <h4>${w.effect}</h4>
      <p><b>${w.value}</b></p>
    `

    container.appendChild(div)

  })

}

function filterWeapons(){
  const value = document.getElementById("weaponFilter").value
  renderWeapons(value)
}

window.addEventListener("DOMContentLoaded", () => {

  const filter = document.getElementById("weaponFilter")
  if(!filter) return

  const effects = [...new Set(weaponData.map(w => w.effect))]

  effects.forEach(e=>{
    const opt = document.createElement("option")
    opt.value = e
    opt.textContent = e
    filter.appendChild(opt)
  })

  renderWeapons("all") // initial load

})


/* EMBLEM SYSTEM */
const emblemNames = [
"possession","flame","unity","joy","harvest","immortality","secret",
"journey","resolve","thorn","wisdom","disaster","frost","endurance",
"protection","sun","justice","genesis","harmony","intellect","flow",
"abundance","legacy","radiance","fortitude","order","repose","mastery",
"strike","smash","frenzy","counter","ambush"
]

const emblemShapes = ["pillar","orb","tablet","crest","foundation","wedge"]

function renderEmblems(selected="all"){

const container = document.getElementById("emblemContainer")
container.innerHTML = ""

emblemNames.forEach(name=>{
emblemShapes.forEach(shape=>{

if(selected !== "all" && shape !== selected) return

const file = `assets/emblem/${name}_${shape}.png`

const div = document.createElement("div")
div.className = "card emblemCard"

div.innerHTML = `
<img src="${file}" alt="${name} ${shape}" loading="lazy">
<h4>${name} (${shape})</h4>
`

container.appendChild(div)

})
})

}

function filterEmblems(){
const value = document.getElementById("emblemFilter").value
renderEmblems(value)
}

window.addEventListener("DOMContentLoaded", () => {

const filter = document.getElementById("emblemFilter")
if(!filter) return

emblemShapes.forEach(shape=>{
const opt = document.createElement("option")
opt.value = shape
opt.textContent = shape.toUpperCase()
filter.appendChild(opt)
})

renderEmblems("all")

})



/* LOAD CODES ON PAGE START */

loadGiftCodes()
