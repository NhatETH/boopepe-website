const pepe = document.getElementById("peperun");
const poopepe = document.getElementById("poopepeeat");
const bonkSound = document.getElementById("bonk");

let pepeX = 100, pepeY = 100;
let poopepeX = 50, poopepeY = 50;

document.addEventListener("mousemove", (e) => {
  pepeX = e.clientX;
  pepeY = e.clientY;
});

function animate() {
  // Move Pepe
  const currentX = parseFloat(pepe.style.left) || 0;
  const currentY = parseFloat(pepe.style.top) || 0;
  const dx = pepeX - currentX;
  const dy = pepeY - currentY;
  pepe.style.left = currentX + dx * 0.2 + "px";
  pepe.style.top = currentY + dy * 0.2 + "px";

  // Move Poopepe (towards Pepe)
  const pX = parseFloat(poopepe.style.left) || 0;
  const pY = parseFloat(poopepe.style.top) || 0;
  const pdx = (parseFloat(pepe.style.left) || 0) - pX;
  const pdy = (parseFloat(pepe.style.top) || 0) - pY;
  poopepe.style.left = pX + pdx * 0.1 + "px";
  poopepe.style.top = pY + pdy * 0.1 + "px";

  // Bonk sound if too close
  const dist = Math.sqrt(pdx * pdx + pdy * pdy);
  if (dist < 40) {
    bonkSound.play();
  }

  requestAnimationFrame(animate);
}
animate();
