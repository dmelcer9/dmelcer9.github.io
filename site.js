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
  if(typeof(ethereum) !== "undefined"){
    $(".no-web3").hide();
    $(".with-web3").show();
  } else{
    setTimeout(checkWeb3, 5000);
  }

}

$(document).ready(function(){
  checkWeb3();
  hljs.initHighlightingOnLoad();

  $("button").click(function(event){
    var button = event.currentTarget;
    var redir = button.getAttribute("href");
    if(redir){
      window.location = button.getAttribute("href")
    }
  })
});
