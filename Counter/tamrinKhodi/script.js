const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const reset = document.querySelector('.reset');
const counter = document.querySelector('.counter');
const buttons = document.querySelector('.buttons');



buttons.addEventListener('click',(e)=>{
    if(e.target.classList.contains('add')){
        counter.innerHTML++;
        setColor();
    }
    else if (e.target.classList.contains('reset')){
        counter.innerHTML=0;
        setColor();
    }
    else if(e.target.classList.contains('subtract')){
        counter.innerHTML--;
        setColor();
    }
});



// add.addEventListener('click',()=>{
//     counter.innerHTML++;
//     setColor();
// });

// reset.addEventListener('click',()=>{
//     counter.innerHTML=0;
//     setColor();
// });

// subtract.addEventListener('click',()=>{
//     counter.innerHTML--;
//     setColor();
// });

function setColor(){
    if(counter.innerHTML > 0){
        counter.style.color = 'green';
    }
    else if(counter.innerHTML < 0){
        counter.style.color = 'red';
    }
    else{
        counter.style.color ='black'
    }
}