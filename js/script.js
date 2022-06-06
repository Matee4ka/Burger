$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      // для блокировки прокрутки при открытом бургере
      $('body').toggleClass('lock');
   });
});