//get DOM element
const navbarEl=document.querySelector('.navbar');
const bottomContainerEl=document.querySelector('.bottom-container');
//print values of offset on console
console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);
//add event listener to change the color of navbar
window.addEventListener('scroll',()=>{
    if(window.scrollY>bottomContainerEl.offsetTop-navbarEl.offsetHeight-50){
        navbarEl.classList.add('active');
    }
    else{
        navbarEl.classList.remove('active');
    }
})