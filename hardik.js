let menu = document.querySelectorAll('#menu-bars');
let navbar = document.querySelectorAll('.navbar');

$(document).ready(function(){
       $("#menu-bars").click(function(){
              $(".navbar").slideToggle();
       });
       
});
