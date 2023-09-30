const result = document.querySelector('.result');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
let str ='';
btn.addEventListener('click', ()=>{
    str = input.value;
    str = str.match(/[aeiou]/ig);
    str = str.join('');
    result.textContent =`Vowels are : ${str}, num: ${str.length}` ;
    console.log(str);
});

