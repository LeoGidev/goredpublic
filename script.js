$(document).ready(function() {
    // Cambio de color de la barra de navegaciÃ³n al hacer scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) { // Cambiado el valor de 0 a cualquier valor que desees
          $('.navbar').removeClass('transparent').addClass('fixed');
      } else {
          $('.navbar').removeClass('fixed').addClass('transparent');
      }
  });

  // AnimaciÃ³n de la pelota al hacer scroll
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              $('.img-1').addClass('show');
          } else {
              $('.img-1').removeClass('show');
          }
      });
  });

  observer.observe($('.img-1')[0]);
});
