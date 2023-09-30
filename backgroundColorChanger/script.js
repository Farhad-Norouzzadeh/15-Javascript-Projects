const btn = document.querySelector('.gbtn');
const result = document.querySelector('.result');
const bodyy = document.querySelector('.body');



btn.addEventListener('click',()=>{
    
    let colorHex = Math.random().toString(16);
    colorHex = colorHex.substring(2,8);

    result.innerHTML = colorHex;
    result.style.color ='#'+colorHex;

    bodyy.style.backgroundColor='#'+colorHex;
    
});