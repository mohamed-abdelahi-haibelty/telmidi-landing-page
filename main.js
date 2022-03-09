//selectors
let navBtn=document.querySelector(".nav-btn");
let sideBar=document.querySelector(".side-bar");
let closeBtn=document.querySelector(".close-btn");
let barIcon= document.querySelector(".fa-bars");
let loader=document.querySelector(".pre-loader");

//eventLisstener
navBtn.addEventListener("click",function(){
    barIcon.classList.add("second-color")
    navBtn.classList.add("rotate")
   sideBar.style.transform="translate(0)";
   console.log("hello");
   closeBtn.classList.remove("rotate");
})
closeBtn.addEventListener("click",function(){
   sideBar.style.transform="translate(-100%)";
   closeBtn.classList.add("rotate");
   barIcon.classList.remove("second-color")
    navBtn.classList.remove("rotate")
});

window.addEventListener("load",function(){
    setTimeout(()=>loader.style.display="none",2000);
})