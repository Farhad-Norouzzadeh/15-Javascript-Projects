const billInput = document.querySelector('.bill-input');
const calBtn = document.querySelector('.btn-cal');
const service = document.querySelector('.ser-sel');
const tip = document.querySelector('.tip-amount');
const total = document.querySelector('.total-amount')
const p = document.querySelector('.error');


p.innerHTML = '';
console.log('hello');

calBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(service.value== 0 && billInput.value==''){
        p.textContent = 'Please enter bill and rate service.';
        p.style.color = 'red';
    }
    else{
        p.textContent='';
        calculateAmounts();
    }
    
});

// const isString = ()=>{
//     if(typeof (billInput.value == 'string') && billInput.value != ''){
//         alert('please enter number')
//     }
// }

const calculateAmounts =()=>{
    let resultTip , resultAmount ;
    resultTip = Number((billInput.value))+((billInput.value)*service.value);
    resultTip = resultTip.toString().substring(0,10);
    total.textContent = resultTip;
    tip.textContent = ((billInput.value)*service.value).toString().substring(0,5);
    
}