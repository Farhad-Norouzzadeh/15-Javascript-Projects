const gbtn = document.querySelector('.gbtn');   /// this is our generate button which can generate a random number by using *** addEventListener() ***
const result = document.querySelector('.result'); /// this is our <span> tag which will show us the generated random number

let randomNumber =10;                   /// this is our variable which holds and creates our random number and refers it to *** <span class='result'> ***
gbtn.addEventListener('click', ()=>{
    randomNumber = Math.floor(Math.random()*100 +1)
    result.innerHTML = randomNumber;
})