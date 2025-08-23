const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  s: Math.random() * 1 + 0.5,
}));

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgba(255,255,255,0.8)";
particles.forEach((p) => {
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  ctx.fill();
  p.y += p.s;
  if (p.y > canvas.height) {
    p.y = -5;
    p.x = Math.random() * canvas.width;
  }
});
requestAnimationFrame(draw);
