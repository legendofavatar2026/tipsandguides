
async function loadData(){
const res = await fetch('data.json')
return await res.json()
}

/* TABS */

const tabs=document.querySelectorAll(".tab")
const contents=document.querySelectorAll(".tabContent")

tabs.forEach(tab=>{
tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"))
contents.forEach(c=>c.classList.remove("active"))

tab.classList.add("active")
document.getElementById(tab.dataset.tab).classList.add("active")

})
})

/* GUIDE SYSTEM */

const types=["pet","skill","relic","rune","special","forge"]

function openBoss(name){

const menu=document.getElementById("guideMenu")
menu.innerHTML=""

types.forEach(type=>{

const img=`assets/guide/${name}_${type}.png`

const div=document.createElement("div")
div.className="guideIcon"
div.innerHTML=`<img src="${img}">`

div.onclick=()=>{
document.getElementById("guideImage").src=img
}

menu.appendChild(div)

})

}

/* INIT */

loadData().then(data=>{

/* BOSSES */

const bossGrid=document.getElementById("bossGrid")

data.bosses.forEach(b=>{

const div=document.createElement("div")
div.className="boss"

div.innerHTML=`
<img src="${b.img}">
<p>${b.name}</p>
`

div.onclick=()=>openBoss(b.id)

bossGrid.appendChild(div)

})

/* AVATARS */

const avatarContainer=document.getElementById("avatarContainer")

for(const type in data.avatars){

const section=document.createElement("div")

section.innerHTML=`<h3>${type}</h3>`

const grid=document.createElement("div")
grid.className="grid"

data.avatars[type].forEach(a=>{

const div=document.createElement("div")
div.className="avatar"

div.innerHTML=`
<img src="${a.img}">
<p>${a.rank} ${a.name}</p>
`

grid.appendChild(div)

})

section.appendChild(grid)
avatarContainer.appendChild(section)

}

/* WEAPONS */

const weaponContainer=document.getElementById("weaponContainer")

data.weapons.forEach(w=>{

const div=document.createElement("div")
div.className="codeBox"

div.innerHTML=`
<span>${w.items.join(" + ")}</span>
<span>${w.value}</span>
`

weaponContainer.appendChild(div)

})

/* CODES */

const codes=document.getElementById("codesContainer")

data.codes.forEach(c=>{

const div=document.createElement("div")
div.className="codeBox"

div.innerHTML=`
<span>${c}</span>
<button>Copy</button>
`

div.querySelector("button").onclick=()=>{
navigator.clipboard.writeText(c)
}

codes.appendChild(div)

})

})

/* EXP CALCULATOR */

const tiers=["T","Qa","Qi","Sx","Sp","Oc","No","De"]

const currentTier=document.getElementById("currentTier")
const targetTier=document.getElementById("targetTier")

tiers.forEach(t=>{

let o1=document.createElement("option")
o1.value=t
o1.text=t

let o2=document.createElement("option")
o2.value=t
o2.text=t

currentTier.appendChild(o1)
targetTier.appendChild(o2)

})

function toBase(v,t){

const i=tiers.indexOf(t)
return v*Math.pow(1000,i)

}

document.getElementById("calcBtn").onclick=function(){

const rate=parseFloat(document.getElementById("expPerMin").value)
const target=parseFloat(document.getElementById("targetAmount").value)

if(!rate||!target){
document.getElementById("trainingResult").innerText="Fill all fields"
return
}

const minutes=target/rate
const hours=minutes/60
const days=hours/24

document.getElementById("trainingResult").innerHTML=
minutes.toFixed(2)+" minutes<br>"+
hours.toFixed(2)+" hours<br>"+
days.toFixed(2)+" days"

}
