// const buttons = document.querySelectorAll('ripples');
let day=document.querySelector(".day");
let hour=document.querySelector(".hour");
let minute=document.querySelector(".minute");
let second=document.querySelector(".second");


//function 
const countdown=()=>{
    const countDate=new Date("oct 30,2022 00:00:00").getTime();
    let  currentDate=new Date().getTime();
    let launchTime=countDate-currentDate;
    const getSecond=1000;
    const getMinute=getSecond*60;
    const getHour=getMinute*60;
    const getDay=getHour*24;
    let dayValue=Math.floor(launchTime/getDay);
    let hourValue=Math.floor((launchTime%getDay)/getHour);
    let minuteValue=Math.floor((launchTime%getHour)/getMinute);
    let secondValue=Math.floor((launchTime%getMinute)/getSecond);
    day.textContent=dayValue;
    hour.textContent=hourValue;
    minute.textContent=minuteValue;
    second.textContent=secondValue;

}
setInterval(countdown,1000);



