const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');
const second=document.getElementById('seconds');
const AMPM=document.getElementById('ampm');

updateClock=()=>{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm='AM';

    if(h>12){
        h=h-12;
        ampm='PM';
    }

    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;

    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;
    AMPM.innerHTML=ampm;

    setTimeout(()=>{
        updateClock();
    },1000);
}

updateClock();