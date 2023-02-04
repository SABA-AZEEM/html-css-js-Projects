//take 2 random numbers
const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
//take elements in html

const questionEl=document.getElementById('question');
const inputEl=document.getElementById('input');
const formEl=document.getElementById('form');
const scoreEl=document.getElementById('score');
//convert score into number
let score=JSON.parse(localStorage.getItem('score'));
if(!score){
    score=0;
}
//update score
scoreEl.innerText=`Score: ${score}`;
// update question
questionEl.innerText=`What is ${num1} * ${num2}?`;
//set score value
let correctAns=num1*num2;
formEl.addEventListener('submit',()=>{
    const userAns= +inputEl.value;
    if(userAns===correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});
//function of update Local Storage
function updateLocalStorage(){
    localStorage.setItem('score',JSON.stringify(score));
}