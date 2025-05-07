const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startbtn = document.getElementsByClassName('button');

let gamerunning = false;
let x = 50;
let dx = 2;



function gameLoop() {
    if (!gameRunning) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update game state
    x += dx;
    if (x > canvas.width || x < 0) dx *= -1;

    // Draw
    ctx.beginPath();
    ctx.arc(x, canvas.height / 2, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
// Loop
requestAnimationFrame(gameLoop);
}

startBtn.addEventListener('click', () => {
  if (!gameRunning) {
    gameRunning = true;
    gameLoop();
  }
});