let bosses = []

const guideTypes = [
"pet",
"skill",
"relic",
"rune",
"special",
"forge"
]

async function loadBosses(){

const res = await fetch("data/bosses.json")
bosses = await res.json()

renderBosses(bosses)

}

function renderBosses(list){

const container = document.getElementById("bossContainer")
container.innerHTML=""

list.forEach(boss=>{

const card = document.createElement("div")
card.className="boss-card"

card.innerHTML=`

<img src="assets/guide/${boss.image}">
<p>${boss.name}</p>

`

card.onclick=()=>openBoss(boss.id)

container.appendChild(card)

})

}

function openBoss(boss){

const menu = document.getElementById("guideMenu")
menu.classList.remove("hidden")
menu.innerHTML=""

guideTypes.forEach(type=>{

const div = document.createElement("div")
div.className="guide-icon"

const img=`assets/guide/${boss}_${type}.png`

div.innerHTML=`<img src="${img}" loading="lazy">`

div.onclick=()=>showGuide(img)

menu.appendChild(div)

})

}

function showGuide(img){

document.getElementById("guideImage").src=img

}

document.getElementById("searchBar").addEventListener("input",e=>{

const text=e.target.value.toLowerCase()

const filtered=bosses.filter(boss=>boss.name.toLowerCase().includes(text))

renderBosses(filtered)

})

loadBosses()

if("serviceWorker" in navigator){
navigator.serviceWorker.register("service-worker.js")
}
