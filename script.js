
const pepe = document.getElementById("pepe");
const boopepe = document.getElementById("boopepe");
const bonk = document.getElementById("bonkSound");

document.addEventListener("mousemove", (e) => {
  pepe.style.left = e.pageX + "px";
  pepe.style.top = e.pageY + "px";

  setTimeout(() => {
    boopepe.style.left = e.pageX - 100 + "px";
    boopepe.style.top = e.pageY - 100 + "px";
    bonk.play();
  }, 300);
});
