let navBtn=document.querySelector(".nav-btn");
const nav =document.querySelector("#nav")
navBtn.addEventListener("click",function(){
   nav.classList.toggle("show-menu");
   console.log("hello");
})