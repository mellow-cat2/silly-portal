const button = document.getElementById('funButton');
const colors = ['#ff69b4', '#7fffd4', '#ffd700', '#ff7f50', '#87cefa'];
const originalColor = document.body.style.backgroundColor;

button.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  setTimeout(() => {
    document.body.style.backgroundColor = originalColor;
  }, 1200);
});

const gameArea = document.getElementById('gameArea');
const emojiTypes = ['😘','😆','🎉','💖','✨','🐱','🦄','🌟','🍭'];

function spawnEmoji() {
  const emoji = document.createElement('span');
  const randomEmoji = emojiTypes[Math.floor(Math.random() * emojiTypes.length)];
  emoji.textContent = randomEmoji;
  
  emoji.style.position = 'absolute';
  const x = Math.random() * (gameArea.offsetWidth - 50);
  const y = Math.random() * (gameArea.offsetHeight - 50);
  emoji.style.left = x + 'px';
  emoji.style.top = y + 'px';
  
  emoji.style.fontSize = '2rem';
  emoji.style.cursor = 'pointer';
  
  emoji.addEventListener('click', () => {
    emoji.remove();
    alert(`You caught a ${randomEmoji}!`);
  });
  
  gameArea.appendChild(emoji);
}


spawnEmoji();


setInterval(spawnEmoji, 2000);
