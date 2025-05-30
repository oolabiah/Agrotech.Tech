
// Seleciona o botão hamburguer e o menu (ul)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

// Quando o botão for clicado, alterna a classe 'active' no menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
