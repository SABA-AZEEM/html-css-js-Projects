//get element from DOM
const textareaEl= document.getElementById('textarea');
const totalCounterEl=document.getElementById('total-counter');
const remainingCounterEl=document.getElementById('remaining-counter');
//add event listener on textarea
textareaEl.addEventListener('keyup',()=>{
    totalCounterEl.innerText=textareaEl.value.length;
    remainingCounterEl.innerText=textareaEl.getAttribute('maxLength')-textareaEl.value.length;
})