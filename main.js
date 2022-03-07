let navBtn=document.querySelector(".nav-btn");
let barIcon= document.querySelector(".fa-bars");
const nav =document.querySelector("#nav")
navBtn.addEventListener("click",function(){
   barIcon.classList.toggle("second-color")
   navBtn.classList.toggle("rotate")
   nav.classList.toggle("show-menu");
   console.log("hello");
})