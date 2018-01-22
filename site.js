$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
         $('#header').addClass('scroll')
      }
      if ($(this).scrollTop() <= 0) {
         $('#header').removeClass('scroll')
      }
   });
});
