const app = document.getElementById('app');

let bossesData = {};
let avatarsData = {};
let guidesData = {};
let weaponsData = {};

async function loadData() {
  bossesData = await fetch('data/bosses.json').then(r => r.json());
  avatarsData = await fetch('data/avatars.json').then(r => r.json());
  guidesData = await fetch('data/guides.json').then(r => r.json());
  weaponsData = await fetch('data/divineweapons.json').then(r => r.json());
}

// NAVIGATION
function navigate(page) {
  if(page === 'home') renderHome();
  if(page === 'bosses') renderBosses();
  if(page === 'towers') renderTowers();
  if(page === 'weapons') renderWeapons();
}

// HOME PAGE
function renderHome() {
  app.innerHTML = `<h2>Welcome to the Legend of Avatar Guide</h2>
  <p>Explore bosses, towers, divine weapons, and strategies for your favorite avatars.</p>`;
}

// BOSSES PAGE
function renderBosses() {
  app.innerHTML = '';
  Object.values(bossesData).forEach(boss => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="assets/guide/${boss.image}" alt="${boss.name}">
      <h3>${boss.name}</h3>
      <p>Avatar: ${boss.avatar}</p>
      <p>Forge: ${boss.forge}</p>
      <img src="assets/guide/${boss.skill}" alt="Skill">
      <img src="assets/guide/${boss.special}" alt="Special">
      <img src="assets/guide/${boss.pet}" alt="Pet">
      <img src="assets/guide/${boss.rune}" alt="Rune">
      <img src="assets/guide/${boss.relic}" alt="Relic">
    `;
    app.appendChild(card);
  });
}

// TOWERS PAGE
function renderTowers() {
  app.innerHTML = '';
  guidesData.towers.forEach(tower => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="assets/guide/${tower.image}" alt="${tower.name}">
      <h3>${tower.name}</h3>
      <p>Boss: ${bossesData[tower.boss].name}</p>
    `;
    app.appendChild(card);
  });
}

// DIVINE WEAPONS PAGE
function renderWeapons() {
  app.innerHTML = '';
  weaponsData.combinations.forEach(combo => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${combo.effect} (${combo.value})</h3>
      <p>Items:</p>
      ${combo.items.map(item => `<img src="assets/divineweapons/${item.toLowerCase().replace(/\s/g,'')}.png" alt="${item}">`).join('')}
      ${combo.level ? `<p>${combo.level}</p>` : ''}
    `;
    app.appendChild(card);
  });
}

loadData().then(renderHome);
