const Btn_menu = document.querySelector(".Btn_menu");
const Container_nav_bar = document.querySelector(".Container_nav_bar");
const Btn_close = document.querySelector(".Btn_close");

Btn_menu.addEventListener("click",()=>{
    Container_nav_bar.classList.add("active");
    Btn_menu.classList.add("active");
});

Btn_close.addEventListener("click",()=>{
    Container_nav_bar.classList.remove("active");
    Btn_menu.classList.remove("active");
});