const types = [
"pet",
"skill",
"relic",
"rune",
"special",
"forge"
]

function openBoss(boss){

const menu = document.getElementById("guideMenu")
menu.innerHTML=""

types.forEach(type => {

const imgPath = `assets/guide/${boss}_${type}.png`

const div = document.createElement("div")
div.className="guideIcon"

div.innerHTML=`<img src="${imgPath}">`

div.onclick = () => showGuide(imgPath)

menu.appendChild(div)

})

}

function showGuide(img){

document.getElementById("guideImage").src = img

}

/* TAB SYSTEM */

function openTab(tab){

document.querySelectorAll(".tabContent").forEach(t=>t.classList.remove("active"))
document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"))

document.getElementById(tab).classList.add("active")

event.target.classList.add("active")

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


/* LOAD AVATAR JSON */

fetch("data/avatars.json")
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("avatarList")

Object.keys(data).forEach(stat=>{

const section=document.createElement("div")
section.className="avatarCategory"

section.innerHTML=`<h3>${stat.toUpperCase()}</h3>`

const grid=document.createElement("div")
grid.className="avatarGrid"

data[stat].forEach(name=>{

const img=document.createElement("img")
img.src=`assets/avatars/${name}.png`

grid.appendChild(img)

})

section.appendChild(grid)

container.appendChild(section)

})

})


/* LOAD WEAPON JSON */

fetch("data/weapons.json")
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("weaponList")

data.combinations.forEach(combo=>{

const div=document.createElement("div")
div.className="weaponCombo"

const items=document.createElement("div")
items.className="weaponItems"

combo.items.forEach(item=>{

const img=document.createElement("img")
img.src=`assets/divineweapons/${item.replace(/ /g,'').toLowerCase()}.png`

items.appendChild(img)

})

div.appendChild(items)

div.innerHTML+=`<b>${combo.effect}</b> +${combo.value}`

container.appendChild(div)

})

})

