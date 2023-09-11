let menu = document.querySelectorAll('#menu-bars');
let navbar = document.querySelectorAll('.navbar');

$(document).ready(function(){
       $("#menu-bars").click(function(){
              $(".navbar").slideToggle();
       });
       
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
}
