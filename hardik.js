let menu = document.querySelector("#menu-bars");
let navbar = document.querySelectorAll(".navbar");

menu.onclick = () =>{
       menu.classList.toggle("fa-times");
       navbar.classList.toggle("active");
}
