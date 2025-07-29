const grid = document.getElementById('grid');
const verifyBtn = document.getElementById('verify-btn');
const loading = document.getElementById('loading');

const emojis = ['🚗', '🚦', '🏍️', '🛵', '🚕', '🛑', '🚓', '🚲', '🚌'];
const trafficLightEmoji = '🚦';

function generateGrid() {
  grid.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    tile.textContent = emoji;
    tile.dataset.emoji = emoji;
    tile.addEventListener('click', () => {
      tile.classList.toggle('selected');
    });
    grid.appendChild(tile);
  }
}

verifyBtn.addEventListener('click', () => {
  verifyBtn.disabled = true;
  loading.classList.remove('hidden');

  setTimeout(() => {
    // TODO: Trigger the glitch + phase 2 here later
    alert("Hmm... something's not right."); // Placeholder
    loading.classList.add('hidden');
    verifyBtn.disabled = false;
  }, 2500);
});

generateGrid();
