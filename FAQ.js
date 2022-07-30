
const arrows = document.querySelectorAll(".arrow");
let prev;
let counter = [0,0,0,0,0];
let isClicked = false;
let prevIndex  = -1;

arrows.forEach((arrow,index)=>{
    arrow.addEventListener("click",()=>{
        function add(index){
            prev = arrows[index].previousElementSibling;
            prev.querySelector(".heading").classList.add("active");
            prev.querySelector(".para").classList.add("active");
            document.querySelector(".bg-img").classList.add("top");
            arrows[index].querySelector(".img-arr").classList.add("rotation");
        }
        function remove(index){
            prev = arrows[index].previousElementSibling;
            prev.querySelector(".heading").classList.remove("active");
            prev.querySelector(".para").classList.remove("active");
            document.querySelector(".bg-img").classList.remove("top");
            arrows[index].querySelector(".img-arr").classList.remove("rotation");
        }

        if(prevIndex === index || prevIndex === -1)
            ++counter[index];
        else
          counter[index] = 0;
        if(counter[index] === 2){
            remove(index);
            counter[index] = 0;
            isClicked = false;
        }
        else{
           if(isClicked)
              remove(prevIndex);
           prevIndex = index;
           add(index);
           isClicked = true;
        }
        
        
    });
})

