const flames = document.querySelectorAll(".fuego");

flames.forEach((f, i) => {
  const duration = 2 - i * 0.3; // slightly different speeds
  f.style.animation = `fuego ${duration}s ${6.5 + i * 0.1}s infinite`;
});