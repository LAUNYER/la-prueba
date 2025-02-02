document.getElementById('yesBtn').addEventListener('click', function() {
  alert('¡WOW ESTO SI ES UNA SORPRESA! 💖');
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
  const noBtn = document.getElementById('noBtn');
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
