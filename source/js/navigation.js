var navigationList = document.querySelector(".nav__menu-list");
var navigationToggler = document.querySelector(".nav__menu-toggler");

navigationToggler.classList.remove("nav__menu-toggler--no-js");
navigationToggler.classList.remove("nav__menu-toggler--active");
navigationList.classList.remove("nav__menu-list--active");

if(document.documentElement.clientWidth < 768){
navigationToggler.addEventListener("click", function(){
  navigationToggler.classList.toggle("nav__menu-toggler--active");
  navigationList.classList.toggle("nav__menu-list--active");
});
}
