const wrapper = document.getElementById('card-wrapper');
const card = document.getElementById('card');
const glow = document.getElementById('glow');

wrapper.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = wrapper.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;
  const centerX = width / 2;
  const centerY = height / 2;
  const rotateX = -(y - centerY) / 20;
  const rotateY = (x - centerX) / 20;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent)`;
});

wrapper.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  glow.style.background = 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent)';
});