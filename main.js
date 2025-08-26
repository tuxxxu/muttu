document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('section.menu.mobile');
  var openBtn = document.querySelector('header a.btn-menu');
  var closeBtn = document.querySelector('section.menu.mobile a.close.btn-menu');
  var aboutLink = document.querySelector('section.menu.mobile a[href="#about"]');
  var featuresLink = document.querySelector('section.menu.mobile a[href="#features"]');
  
  if (!menu || !openBtn || !closeBtn) return;

  // abre o menu
  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.style.display = 'block';
  });

  // fecha o menu
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.style.display = 'none';
  });

  // fecha o menu ao clicar em "Quem somos"
  if (aboutLink) {
    aboutLink.addEventListener('click', function() {
      menu.style.display = 'none';
    });
  }

  // fecha o menu ao clicar em "Nossas soluções"
  if (featuresLink) {
    featuresLink.addEventListener('click', function() {
      menu.style.display = 'none';
    });
  }
});