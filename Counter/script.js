const count = document.querySelector('.count'); /// *** count number  ***
const add = document.querySelector('.add');     ///  *** add button   ***
const subtract = document.querySelector('.subtract');  ///  *** subtract button  ***
const reset = document.querySelector('.reset');       /// ***  reset button  ***
const buttons = document.querySelector('.buttons');   /* *** buttons class containes all the buttons (index.html -> line : 17)
*** buttons class is parent tag of all buttons(add - subtract - reset) */  



///////////////     *** second & better solution ***    ///////////////////

// in this solution we don't need to use const ( add & subtract & reset ) because we access to them through (e.target.classList.contains())! 

buttons.addEventListener('click' , (e) =>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    else if (e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor();
    }
    else if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor();
    }
});





///////////////// *** first solution ***  ///////////////////////////



// reset.addEventListener('click' , ()=> {
//     count.innerHTML = 0;
//     setColor();
// });

// add.addEventListener('click' , ()=> {
//     count.innerHTML++;
//     setColor();
// });

// subtract.addEventListener('click' , ()=> {
//     count.innerHTML--;
//     setColor();
// });

const setColor = () =>{
    if(count.innerHTML > 0){
        count.style.color = 'green';
    }
    else if (count.innerHTML < 0){
        count.style.color = 'red';
    }
    else{
        count.style.color = 'black';
    }
}