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
