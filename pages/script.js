var hamburger = document.querySelector(".hamburguer");

hamburger.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});