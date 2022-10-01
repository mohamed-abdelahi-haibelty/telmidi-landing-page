
const Btns_arrow = document.querySelectorAll(".Btn_arrow");
let prev;
let counter = [0,0,0,0,0];
let isClicked = false;
let prevIndex  = -1;

Btns_arrow.forEach((arrow,index)=>{
    arrow.addEventListener("click",()=>{
        function add(index){
            prev = Btns_arrow[index].previousElementSibling;
            prev.querySelector(".Label_hadding").classList.add("active");
            prev.querySelector(".Label_para").classList.add("active");
            document.querySelector(".Image_faq").classList.add("top");
            Btns_arrow[index].querySelector(".img-arr").classList.add("rotation");
        }
        function remove(index){
            prev = Btns_arrow[index].previousElementSibling;
            prev.querySelector(".Label_hadding").classList.remove("active");
            prev.querySelector(".Label_para").classList.remove("active");
            document.querySelector(".Image_faq").classList.remove("top");
            Btns_arrow[index].querySelector(".img-arr").classList.remove("rotation");
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

