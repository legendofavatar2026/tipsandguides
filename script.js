/* TAB SYSTEM */
const tabConfig = [
  { id: "guides", label: "Guides" },
  { id: "avatars", label: "Avatar Tier List" },
  { id: "weapons", label: "Divine Weapons" },
  { id: "calculator", label: "Training EXP Calculator" },
  { id: "tips", label: "Tips & Codes" },
  { id: "emblems", label: "Emblems" }
]



function renderTabs(){

  const container = document.getElementById("navTabs")
  container.innerHTML = ""

  tabConfig.forEach((tab, index) => {

    const btn = document.createElement("button")
    btn.className = "tab"
    btn.textContent = tab.label

    btn.onclick = (e) => openTab(e, tab.id)

    // set first tab active by default
    if(index === 0){
      btn.classList.add("active")
      document.getElementById(tab.id).classList.add("active")
    }

    container.appendChild(btn)

  })
}

function openTab(evt, tab){

document.querySelectorAll(".tabContent").forEach(t=>t.classList.remove("active"))
document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"))

document.getElementById(tab).classList.add("active")
evt.currentTarget.classList.add("active")

}

document.addEventListener("DOMContentLoaded", () => {
  renderTabs()
})


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
  { code: "AVATARXBLADE1" },
  { code: "AVATARXBLADE2" },
  { code: "TOWER10GIFT" },
  { code: "DIAMOND500", new: true },
  { code: "KOREAGOOGLE1ST", new: true },
  { code: "TAIWANAPPLE1ST", new: true },
  { code: "DISCORD13000", new: true }
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

const emblemData = {
  possession: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%"]
    },
    effect: "When HP falls below 30%, creates a shield that blocks 1 attack for 3 sec. (Cooldown: 40 sec)"
  },
  flame: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Combo Double DMG +20.00%"]
    }
  },
  unity: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Counter DMG +20.00%"]
    }
  },
  joy: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Skill CRIT DMG +20.00%"]
    }
  },
  harvest: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Combo Triple DMG +10.00%"]
    }
  },
  immortality: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Counter Ex DMG +10.00%"]
    }
  },
  secret: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Skill CRIT DMG +10.00%"]
    }
  },
  journey: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%"]
    },
    effect: "When HP falls below 30% and you take Combo, Counter, or Skill Critical Damage, gain a shield equal to 12.00% of max HP for 5 sec. (Cooldown: 40 sec)"
  },
  resolve: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Combo Double DMG +20.00%"]
    },
    effect: "When Combo Damage is triggered, increases Double Combo Damage by 10.00% for 2 sec. (Cooldown: 2 sec)"
  },
  thorn: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Counter DMG +20.00%"]
    },
    effect: "When Counter DMG is triggered, increases Counter Damage by 10.00% for 2 sec. (Cooldown: 2 sec)"
  },
  wisdom: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Skill CRIT DMG +10.00%"]
    },
    effect: "When Skill Critical Damage is triggered, increases Skill Critical Damage by 10.00% for 3 sec. (Cooldown: 3 sec)"
  },
  disaster: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Combo Triple DMG +10.00%"]
    },
    effect: "When hit by a Skill Critical Hit, increases Evasion by 15.00% for 3 sec. (Cooldown: 3 sec)"
  },
  frost: {
    setType: "3/3",
    bonuses: {
      "3": ["Emblem Counter Ex DMG +10.00%"]
    },
    effect: "When hit by a Combo attack, gain a shield equal to 1.00% of max HP for 2 sec. (Cooldown: 2 sec)"
  },
  endurance: {
    setType: "3/3",
    bonuses: {
      "3": ["Skill Acceleration +4.00%"]
    },
    effect: "When hit by a counterattack, restores HP by 3.00% of max HP (Cooldown: 2 sec)"
  },

  protection: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Normal Mob DMG +100.00%"],
      "4": ["Emblem Boss DMG +50.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Boss DMG +100.00%"]
    },
    effect: "When using a Wind-type Specialized Skill, increases Double Combo Damage by 60.00% for 6 sec."
  },
  sun: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Normal Mob DMG +100.00%"],
      "4": ["Emblem Boss DMG +50.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Boss DMG +100.00%"]
    },
    effect: "When using a Stone-type Specialized Skill, increases Counter Damage by 60.00% for 6 sec."
  },
  justice: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Normal Mob DMG +100.00%"],
      "4": ["Emblem Boss DMG +50.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Boss DMG +100.00%"]
    },
    effect: "When using a Corrosion-type Specialized Skill, increases Skill Critical Damage by 45.00% for 6 sec."
  },
  genesis: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Normal Mob DMG +100.00%"],
      "4": ["Emblem Boss DMG +50.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Boss DMG +100.00%"]
    },
    effect: "When using a Wind-type Specialized Skill, increases Triple Combo Damage by 50.00% for 6 sec."
  },
  harmony: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Normal Mob DMG +100.00%"],
      "4": ["Emblem Boss DMG +50.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Boss DMG +100.00%"]
    },
    effect: "When using a Stone-type Specialized Skill, increases Ex-Counter Damage by 55.00% for 6 sec."
  },
  intellect: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Normal Mob DMG +100.00%"],
      "4": ["Emblem Boss DMG +50.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Boss DMG +100.00%"]
    },
    effect: "When using a Corrosion-type Specialized Skill, increases Skill Acceleration by 50.00% for 5 sec, increasing cooldown recovery speed during the duration."
  },
  flow: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Normal Mob DMG +100.00%"],
      "4": ["Emblem Boss DMG +50.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Boss DMG +100.00%"]
    },
    effect: "When using a Corrosion-type Specialized Skill, increases Recovery by 60.00% for 5 sec."
  },
  abundance: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Ignore Critical Hit +8.00%"],
      "4": ["Emblem Combo Double DMG +25.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Combo Double DMG +40.00%"]
    },
    effect: "When using a Wind-type Specialized Skill, deals 20% damage and reduces the opponent's Skill Critical Chance by 30.00% for 7 sec."
  },
  legacy: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Ignore Critical Hit +8.00%"],
      "4": ["Emblem Counter DMG +25.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Counter DMG +40.00%"]
    },
    effect: "When using a Stone-type Specialized Skill, deals 20% damage and reduces the opponent's Double Combo Chance by 30.00% for 7 sec."
  },
  radiance: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Ignore Critical Hit +8.00%"],
      "4": ["Emblem Skill CRIT DMG +12.50%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Skill CRIT DMG +20.00%"]
    },
    effect: "When using a Corrosion-type Specialized Skill, deals 20% damage and reduces the opponent's Counter Chance by 30.00% for 7 sec."
  },
  fortitude: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Ignore Critical Hit +8.00%"],
      "4": ["Emblem Combo Triple DMG +12.50%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Combo Triple DMG +20.00%"]
    },
    effect: "When using a Wind-type Specialized Skill, deals 20% damage and reduces the opponent's Combo Damage Resistance by 40.00% for 7 sec."
  },
  order: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Ignore Critical Hit +8.00%"],
      "4": ["Emblem Counter Ex DMG +12.50%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Counter Ex DMG +20.00%"]
    },
    effect: "When using a Stone-type Specialized Skill, deals 20% damage and reduces the opponent's Counter Damage Resistance by 40.00% for 7 sec."
  },
  repose: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Ignore Critical Hit +8.00%"],
      "4": ["Skill Acceleration +5.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Skill Acceleration +15.00%"]
    },
    effect: "When using a Corrosion-type Specialized Skill, deals 20% damage and reduces the opponent's Skill Damage Resistance by 40.00% for 7 sec."
  },
  mastery: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Ignore Critical Hit +8.00%"],
      "4": ["Emblem Recovery +12.50%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Recovery +20.00%"]
    },
    effect: "When using a Corrosion-type Specialized Skill, restores 20.00% of lost HP over 5 sec."
  },
  strike: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Skill DMG +6.00%"],
      "4": ["Emblem DMG Increase +10.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Skill DMG +12.00%"]
    },
    effect: "When using the Smash or Fury skill, increases Boss Damage by 100.00% for 7 sec."
  },
  smash: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Normal Attack DMG +6.00%"],
      "4": ["Emblem DMG Increase +10.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Normal Attack DMG +12.00%"]
    },
    effect: "When using the Strike skill, increases Boss Damage by 100.00% for 7 sec."
  },
  frenzy: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Skill Acceleration +4.00%"],
      "4": ["Emblem DMG Increase +10.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Skill Acceleration +15.00%"]
    },
    effect: "When using the Frenzy skill, increases Boss Damage by 100.00% for 7 sec."
  },
  counter: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Counter DMG +20.00%"],
      "4": ["Emblem DMG Increase +10.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Counter DMG +40.00%"]
    },
    effect: "When using the Raid or Blitz skill, increases Boss Damage by 100.00% for 6 sec."
  },
  ambush: {
    setType: "6/6",
    bonuses: {
      "3": ["Emblem ATK/HP/DEF +111.00%", "Emblem Combo Double DMG +20.00%"],
      "4": ["Emblem DMG Increase +10.00%"],
      "5": ["Emblem ATK/HP/DEF +248.00%"],
      "6": ["Emblem Combo Double DMG +40.00%"]
    },
    effect: "When using the Burst or Explosion skill, increases Boss Damage by 100.00% for 6 sec."
  }
};

const emblemNames = Object.keys(emblemData);
const emblemShapes = ["pillar","orb","tablet","crest","foundation","wedge"];
let inventory = [];

// Load inventory from URL
function loadInventoryFromURL(){
  const params = new URLSearchParams(window.location.search);
  const data = params.get("inventory");
  if(data){
    inventory = data.split(",");
  }
}

// Render all emblems
function renderEmblems(){
  const shape = document.getElementById("shapeSelect").value;
  const filter = document.getElementById("nameFilter").value;
  const container = document.getElementById("emblemContainer");
  container.innerHTML = "";

  if(!shape) return;

  emblemNames.forEach(name => {
    const path = `assets/emblem/${name}_${shape}.png`;
    const img = new Image();
    img.src = path;

    img.onload = () => {
      if(filter && name !== filter) return;

      const div = document.createElement("div");
      div.className = "emblemItem";

      const emblemImg = document.createElement("img");
      emblemImg.src = path;
      emblemImg.alt = name;

      const label = document.createElement("div");
      label.textContent = name.charAt(0).toUpperCase() + name.slice(1);

      const setType = document.createElement("small");
      setType.className = "setTag";
      setType.textContent = emblemData[name].setType;

      const btn = document.createElement("button");
      btn.textContent = inventory.includes(`${name}_${shape}`) ? "Added" : "Add";
      btn.disabled = inventory.includes(`${name}_${shape}`);
      btn.onclick = () => addToInventory(name, shape, btn);

      div.appendChild(emblemImg);
      div.appendChild(label);
      div.appendChild(setType);
      div.appendChild(btn);
      container.appendChild(div);
    };
  });
}

// Add emblem
function addToInventory(name, shape, button){
  const key = `${name}_${shape}`;
  if(!inventory.includes(key)){
    inventory.push(key);
    button.textContent = "Added";
    button.disabled = true;
    renderInventory();
    updateShareLink();
    renderSetSummary();
  }
}

// Remove emblem
function removeFromInventory(key){
  inventory = inventory.filter(e => e !== key);
  renderInventory();
  updateShareLink();
  renderEmblems();
  renderSetSummary();
}

// Render inventory
function renderInventory() {
  const container = document.getElementById("inventoryContainer");
  container.innerHTML = "";

  const sortType = document.getElementById("sortInventory")?.value || "default"

let sortedInventory = [...inventory]

if(sortType === "name"){
  sortedInventory.sort((a,b)=>{
    const [nameA] = a.split("_")
    const [nameB] = b.split("_")
    return nameA.localeCompare(nameB)
  })
}

if(sortType === "shape"){
  sortedInventory.sort((a,b)=>{
    const [,shapeA] = a.split("_")
    const [,shapeB] = b.split("_")
    return shapeA.localeCompare(shapeB)
  })
}

sortedInventory.forEach(key => {
    const div = document.createElement("div");
    div.className = "inventoryItem";

    const [name] = key.split("_");
    const displayName = name.charAt(0).toUpperCase() + name.slice(1);

    const img = document.createElement("img");
    img.src = `assets/emblem/${key}.png`;
    img.alt = displayName;

    const nameEl = document.createElement("span");
    nameEl.textContent = displayName;
    nameEl.className = "emblemName";

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = () => removeFromInventory(key);

    div.appendChild(nameEl);
    div.appendChild(img);
    div.appendChild(btn);
    container.appendChild(div);
  });
}

// Share link
function updateShareLink(){
  const baseUrl = window.location.href.split("?")[0];
  const data = encodeURIComponent(inventory.join(","));
  const link = `${baseUrl}?inventory=${data}`;
  document.getElementById("shareLinkInput").value = link;
}

// Render active set summary
function renderSetSummary(){
  const summary = document.getElementById("setSummary");
  if(!summary) return;

  summary.innerHTML = "";

  const counts = {};

  inventory.forEach(key => {
    const [name] = key.split("_");
    counts[name] = (counts[name] || 0) + 1;
  });

  const activeSets = Object.entries(counts)
    .filter(([name, count]) => {
      const req = emblemData[name].setType === "3/3" ? 3 : 3;
      return count >= req;
    })
    .sort((a,b)=>b[1]-a[1]);

  if(activeSets.length === 0){
    summary.innerHTML = `<div class="setBox"><h3>No Active Sets Yet</h3><p>Add at least 3 matching emblem pieces to activate a set.</p></div>`;
    return;
  }

  activeSets.forEach(([name, count]) => {
    const data = emblemData[name];
    const div = document.createElement("div");
    div.className = "setBox";

    let bonusHTML = "";

    Object.keys(data.bonuses).forEach(step => {
      if(count >= parseInt(step)){
        bonusHTML += `
          <div class="bonusStep active">
            <b>${step}/${data.setType.split("/")[1]}</b>
            <ul>${data.bonuses[step].map(b=>`<li>${b}</li>`).join("")}</ul>
          </div>
        `;
      } else {
        bonusHTML += `
          <div class="bonusStep inactive">
            <b>${step}/${data.setType.split("/")[1]}</b>
            <ul>${data.bonuses[step].map(b=>`<li>${b}</li>`).join("")}</ul>
          </div>
        `;
      }
    });

    div.innerHTML = `
      <h3>${name.charAt(0).toUpperCase() + name.slice(1)} (${count}/${data.setType.split("/")[1]})</h3>
      <div class="bonusList">${bonusHTML}</div>
      ${data.effect ? `<p class="setEffect"><b>Effect:</b> ${data.effect}</p>` : ""}
    `;

    summary.appendChild(div);
  });
}

// Events
window.addEventListener("DOMContentLoaded", ()=>{
  loadInventoryFromURL();
  renderInventory();
  updateShareLink();
  renderSetSummary();
  renderEmblems();

  document.getElementById("shapeSelect").addEventListener("change", renderEmblems);
  document.getElementById("nameFilter").addEventListener("change", renderEmblems);
  document.getElementById("sortInventory").addEventListener("change", renderInventory)
  const nameDropdown = document.getElementById("nameFilter")

emblemNames.forEach(name => {
  const opt = document.createElement("option")
  opt.value = name.toLowerCase()
  opt.textContent = name.charAt(0).toUpperCase() + name.slice(1)
  nameDropdown.appendChild(opt)
})
});



/* LOAD CODES ON PAGE START */

loadGiftCodes()
