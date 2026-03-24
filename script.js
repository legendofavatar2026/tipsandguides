/* =========================
   TAB SYSTEM
========================= */
function openTab(evt, tab){
  document.querySelectorAll(".tabContent").forEach(t=>t.classList.remove("active"))
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"))

  document.getElementById(tab).classList.add("active")
  evt.currentTarget.classList.add("active")
}

/* =========================
   MODAL (GUIDE)
========================= */
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

/* =========================
   GLOBAL INIT
========================= */
document.addEventListener("DOMContentLoaded", ()=>{

  /* ===== MODAL + POPUP ===== */
  const modal = document.getElementById("guideModal")
  const popup = document.getElementById("eventPopup")

  const closeModalBtn = document.querySelector(".close-modal")
  const closePopupBtn = document.querySelector(".close-popup")

  if(closeModalBtn){
    closeModalBtn.addEventListener("click", ()=> modal.style.display="none")
  }

  if(closePopupBtn){
    closePopupBtn.addEventListener("click", ()=> popup.style.display="none")
  }

  document.addEventListener("click",(e)=>{
    if(modal && e.target === modal) modal.style.display="none"
    if(popup && e.target === popup) popup.style.display="none"
  })

  /* ===== INITIAL LOADS ===== */
  initWeapons()
  initTiers()
  initPets()
  loadGiftCodes()
})

/* =========================
   WEAPONS
========================= */
const weaponData = [
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

function initWeapons(){
  const container=document.getElementById("weaponContainer")
  if(!container) return

  const grouped={}
  weaponData.forEach(w=>{
    if(!grouped[w.effect]) grouped[w.effect]=[]
    grouped[w.effect].push(w)
  })

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
}

/* =========================
   PET SYSTEM
========================= */
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
]

/*function initPets(){
  renderPets("all")
  initPetFilter()
  loadPetSelectors()
}*/

function renderPets(selected){
  const container = document.getElementById("petContainer")
  if(!container) return

  container.innerHTML = ""

  petData.filter(p=>{
    if(selected==="all") return true
    return getBaseEffect(p.effect) === selected
  }).forEach(p=>{
    const div=document.createElement("div")
    div.className="petCard"

    div.innerHTML=`
      <img src="assets/pets/${p.name}.png">
      <h4>${p.name}</h4>
      <p><b>Lead:</b> ${p.lead}</p>
      <p><b>Effect:</b> ${p.effect}</p>
    `
    container.appendChild(div)
  })
}

function initPetFilter(){
  const filter = document.getElementById("petFilter")
  if(!filter) return

  const effects=[...new Set(petData.map(p=>getBaseEffect(p.effect)))]

  effects.forEach(e=>{
    const opt=document.createElement("option")
    opt.value=e
    opt.textContent=e.toUpperCase()
    filter.appendChild(opt)
  })
}

function filterPets(){
  const value=document.getElementById("petFilter").value
  renderPets(value)
}

function getBaseEffect(effect){
  return effect.replace(/[0-9.]+%?/g,"").trim().toLowerCase()
}

function loadPetSelectors(){
  const lead=document.getElementById("leadPet")
  const equips=document.querySelectorAll(".equipPet")

  if(!lead || !equips.length) return

  lead.innerHTML=""
  equips.forEach(e=>e.innerHTML="")

  petData.forEach(p=>{
    const opt=`<option value="${p.name}">${p.name}</option>`
    lead.innerHTML+=opt
    equips.forEach(sel=>sel.innerHTML+=opt)
  })
}

/* =========================
   GIFT CODES
========================= */
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
{code:"MARCH2026GIFT"}
]

function loadGiftCodes(){
  const container=document.getElementById("codesContainer")
  if(!container) return

  container.innerHTML=""

  giftCodes.forEach(item=>{
    const div=document.createElement("div")
    div.className="codeBox"

    div.innerHTML=`
      <span>${item.code}</span>
      <button onclick="copyCode('${item.code}')">Copy</button>
    `
    container.appendChild(div)
  })
}

function copyCode(code){
  navigator.clipboard.writeText(code)

  const msg=document.createElement("div")
  msg.innerText="Copied: "+code
  msg.style.cssText="position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#222;padding:10px;border-radius:6px;z-index:9999;"
  document.body.appendChild(msg)

  setTimeout(()=>msg.remove(),1500)
}

/* =========================
   EXP CALCULATOR
========================= */
const tiers=["T","Qa","Qi","Sx","Sp","Oc","No","De","Ud","Dd","Td","Qad","Qid","Sxd","Spd","Ocd","Nod","Vg","C"]

function initTiers(){
  const current=document.getElementById("currentTier")
  const target=document.getElementById("targetTier")
  if(!current || !target) return

  tiers.forEach(t=>{
    current.add(new Option(t,t))
    target.add(new Option(t,t))
  })
}

function toBase(value,tier){
  return value*Math.pow(1000,tiers.indexOf(tier))
}

function calculateProgress(){
  const rate=parseFloat(document.getElementById("expPerMin").value)
  const rateTier=document.getElementById("currentTier").value
  const targetValue=parseFloat(document.getElementById("targetAmount").value)
  const targetTier=document.getElementById("targetTier").value

  if(!rate || !targetValue){
    document.getElementById("trainingResult").innerHTML="Fill all fields"
    return
  }

  const minutes=toBase(targetValue,targetTier)/toBase(rate,rateTier)
  const hours=minutes/60
  const days=hours/24

  document.getElementById("trainingResult").innerHTML=`
    <b>Estimated Time</b><br><br>
    ${minutes.toLocaleString()} minutes<br>
    ${hours.toLocaleString()} hours<br>
    ${days.toLocaleString()} days
  `
}
