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

function checkWeb3(){
  if(typeof(web3) !== "undefined"){
    $(".no-web3").hide();
    $(".with-web3").show();
  } else{
    setTimeout(checkWeb3, 500);
  }

}

$(document).ready(function(){
  checkWeb3();
});
