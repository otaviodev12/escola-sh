const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.classList.add('pulse');
      });

      icon.addEventListener('animationend', () => {
        icon.classList.remove('pulse');
      });
    });
