const burger = document.querySelector(".burger");
const nav =document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const darkLayer = document.querySelector(".dark-layer");

const openMenu = () => {
    burger.classList.add("burger--open");
    nav.classList.add("nav--open");
    darkLayer.classList.add("dark-layer--open");
    document.body.style.overflow = "hidden"
};

const closeMenu = () => {
    burger.classList.remove("burger--open");
    nav.classList.remove("nav--open");
    darkLayer.classList.remove("dark-layer--open");
    document.body.style.overflow = "visible"
};

burger.addEventListener("click", () => {
    if(burger.classList.contains("burger--open")){
        closeMenu();
    }

    else{
        openMenu();
    }
}); 

navLinks.forEach(item =>{
    item.addEventListener("click", closeMenu);
});

darkLayer.addEventListener("click", closeMenu); 