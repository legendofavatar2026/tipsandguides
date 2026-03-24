/* TAB SYSTEM */
function openTab(evt, tab){
  document.querySelectorAll(".tabContent").forEach(t=>t.classList.remove("active"))
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"))

  document.getElementById(tab).classList.add("active")
  evt.currentTarget.classList.add("active")
}

/* GUIDE SYSTEM */
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

/* GLOBAL EVENTS (SAFE) */
document.addEventListener("DOMContentLoaded", ()=>{

  const modal = document.getElementById("guideModal")
  const closeModalBtn = document.querySelector(".close-modal")

  const popup = document.getElementById("eventPopup")
  const closePopupBtn = document.querySelector(".close-popup")

  /* CLOSE MODAL BUTTON */
  if(closeModalBtn){
    closeModalBtn.addEventListener("click", ()=>{
      modal.style.display = "none"
    })
  }

  /* CLOSE POPUP BUTTON */
  if(closePopupBtn){
    closePopupBtn.addEventListener("click", ()=>{
      popup.style.display = "none"
    })
  }

  /* CLICK OUTSIDE HANDLER (NO CONFLICTS) */
  document.addEventListener("click", (e)=>{
    if(modal && e.target === modal){
      modal.style.display = "none"
    }
    if(popup && e.target === popup){
      popup.style.display = "none"
    }
  })

})

function showGuide(img){
  document.getElementById("guideImage").src = img
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

/* GROUP WEAPONS */
const grouped={}
weaponData.forEach(w=>{
  if(!grouped[w.effect]) grouped[w.effect]=[]
  grouped[w.effect].push(w)
})

document.addEventListener("DOMContentLoaded", ()=>{
  const container=document.getElementById("weaponContainer")
  if(!container) return

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
})

/* EXP TIERS */
const tiers = ["T","Qa","Qi","Sx","Sp","Oc","No","De","Ud","Dd","Td","Qad","Qid","Sxd","Spd","Ocd","Nod","Vg","C"]

document.addEventListener("DOMContentLoaded",()=>{
  const currentTierSelect=document.getElementById("currentTier")
  const targetTierSelect=document.getElementById("targetTier")
  if(!currentTierSelect || !targetTierSelect) return

  tiers.forEach(t=>{
    let o1=new Option(t,t)
    let o2=new Option(t,t)
    currentTierSelect.appendChild(o1)
    targetTierSelect.appendChild(o2)
  })
})

function toBase(value,tier){
  const index=tiers.indexOf(tier)
  return value*Math.pow(1000,index)
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
    ${minutes.toLocaleString(undefined,{maximumFractionDigits:2})} minutes<br>
    ${hours.toLocaleString(undefined,{maximumFractionDigits:2})} hours<br>
    ${days.toLocaleString(undefined,{maximumFractionDigits:2})} days
  `
}

/* ===================== GIFT CODES SYSTEM ===================== */
const giftCodes = [
  { code: "ORB1000GIFT" },
  { code: "ORB2000GIFT" },
  { code: "AVATAR0808" },
  { code: "AVATARXBLADE1" },
  { code: "AVATARXBLADE2" },
  { code: "AVATARDISCORD" },
  { code: "DISCORD11000" },
  { code: "TOWER10GIFT" },
  { code: "GLOBAL200DAY" },
  { code: "MARCH2026GIFT" }
  // { code: "MARCHDELAYGIFT", new: true }
];

function loadGiftCodes() {
  const container = document.getElementById("codesContainer");
  container.innerHTML = "";

  giftCodes.forEach(item => {
    const div = document.createElement("div");
    div.className = "codeBox";

    const label = item.new
      ? " <b style='color:#4caf50'>NEW</b>"
      : "";

    div.innerHTML = `
      <span>${item.code}${label}</span>
      <button onclick="copyCode('${item.code}')">Copy</button>
    `;

    container.appendChild(div);
  });
}

/* ===================== PETS FUNCTION ===================== */

function renderPets(selected) {
  const container = document.getElementById("petContainer");
  container.innerHTML = "";

  petData
    .filter(p => {
      if (selected === "all") return true;
      return getBaseEffect(p.effect) === selected;
    })
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "petCard";

      div.innerHTML = `
        <img src="assets/pets/${p.name}.png" alt="${p.name}">
        <h4>${p.name}</h4>
        <p><b>Lead:</b> ${p.lead}</p>
        <p><b>Effect:</b> ${p.effect}</p>
      `;

      container.appendChild(div);
    });
}

function filterPets() {
  const value = document.getElementById("petFilter").value;
  renderPets(value);
}

function getBaseEffect(effect) {
  return effect
    .replace(/[0-9.]+%?/g, "") // remove numbers like 10%, 0.90
    .trim()
    .toLowerCase();
}

function loadPetSelectors() {
  const lead = document.getElementById("leadPet");
  const equips = document.querySelectorAll(".equipPet");

  petData.forEach(p => {
    const opt = `<option value="${p.name}">${p.name}</option>`;

    lead.innerHTML += opt;

    equips.forEach(sel => {
      sel.innerHTML += opt;
    });
  });
}

window.addEventListener("DOMContentLoaded", loadPetSelectors);

/* ===================== BUILD GENERATOR ===================== */

function generateBuild() {
  const leadName = document.getElementById("leadPet").value;
  const equips = [...document.querySelectorAll(".equipPet")]
    .map(e => e.value);

  const container = document.getElementById("buildPreview");

  // VALIDATION
  const check = validateBuild(leadName, equips);
  if (!check.valid) {
    container.innerHTML = `<div class="warning">${check.message}</div>`;
    return;
  }

  const lead = petData.find(p => p.name === leadName);
  const equipPets = equips.map(name =>
    petData.find(p => p.name === name)
  );

  // Detect duplicate effects
  const effects = equipPets.map(p => p.effect);
  const duplicates = effects.filter((e, i, a) => a.indexOf(e) !== i);

  const warning = duplicates.length
    ? `<div class="warning">⚠ Duplicate Effect Detected</div>`
    : "";

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

        ${equipPets.map(p => `
          <div class="pet-box">
            <img src="assets/pets/${p.name}.png">
            <h4>${p.name}</h4>
            <p>${p.effect}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function validateBuild(leadName, equips) {
  const all = [leadName, ...equips];

  const duplicates = all.filter((item, index) =>
    all.indexOf(item) !== index
  );

  if (duplicates.length > 0) {
    return {
      valid: false,
      message: "⚠ Duplicate pets are not allowed"
    };
  }

  return { valid: true };
}

/* ===================== DOWNLOAD FUNCTION ===================== */

function downloadBuild() {
  const area = document.getElementById("captureArea");

  if (!area) {
    alert("Please generate a build first!");
    return;
  }

  html2canvas(area, {
    scale: 2,
    backgroundColor: "#0e0e0e"
  })
    .then(canvas => {
      const image = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = image;
      a.download = "pet-build.png";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch(err => {
      console.error(err);
      alert("Download failed");
    });
}

/* ===================== BUTTON STATE ===================== */

document.querySelector(".btn.secondary").disabled = true;
document.querySelector(".btn.secondary").disabled = false;

/* ===================== END ===================== */

/* COPY CODE */
function copyCode(code){
  navigator.clipboard.writeText(code)

  const msg=document.createElement("div")
  msg.innerText="Copied: "+code
  msg.style.cssText="position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#222;padding:10px 15px;border-radius:6px;z-index:9999;"
  document.body.appendChild(msg)

  setTimeout(()=>msg.remove(),1500)
}
