const Btn_menu = document.querySelector(".Btn_menu");
const Container_nav_bar = document.querySelector(".Container_nav_bar");
const Btn_close = document.querySelector(".Btn_close");
const text = ["Telmidi is a platform that helps high school students to master their curriculum in an easy and interactive way, it's free and always will be. developed and launched in XX/YY/ZZ by Babe Saleh Mahfoud.",
                "Instant Chat Forum : No more stuck on a problem or a lesson, just ask your question on other students and get answers fast and confidently. you can add an image to further shows your question.",
                "Short and easy to undrestand lessons that are aimed to help you master important and widespread concepts in the program. from Cell division to trigonomtry to even how to use acalculator properly to get results from complicated formulas."
];
const label_info = document.querySelector(".Label_info");

Btn_menu.addEventListener("click",()=>{
    Container_nav_bar.classList.add("active");
    Btn_menu.classList.add("active");
});

Btn_close.addEventListener("click",()=>{
    Container_nav_bar.classList.remove("active");
    Btn_menu.classList.remove("active");
});


const Img_slide = document.querySelector(".Img_slide");
let counter = 1;

setTimeout(()=>{
    ++counter;
    Img_slide.src = `images/${counter}.png`
    //label_info.textContent = text[counter - 1];
},4000)

setInterval(()=>{
    Img_slide.src = `images/${counter}.png`
    //counter < 4 ? label_info.textContent = text[counter - 1] : label_info.textContent = text[0];
    Img_slide.style.transition = "2s ease in";
    //label_info.style.transition = "2s ease in";
    ++counter;
    if(counter > 4) counter = 1;
},5000)