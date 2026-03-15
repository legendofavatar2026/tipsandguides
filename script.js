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

const menu=document.getElementById("guideMenu")
menu.innerHTML=""

types.forEach(type=>{

const img=`assets/guide/${boss}_${type}.png`

const div=document.createElement("div")
div.className="guideIcon"

div.innerHTML=`<img src="${img}">`

div.onclick=()=>showGuide(img)

menu.appendChild(div)

})

}

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
{code:"MARCHDELAYGIFT", new:true}

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


/* LOAD CODES ON PAGE START */

loadGiftCodes()


