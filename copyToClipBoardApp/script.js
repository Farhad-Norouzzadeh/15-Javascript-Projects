const input = document.getElementById('input');
const btn = document.querySelector('.btn');

function copyToClip(){
    input.select();
    btn.textContent='copied'; 

    setTimeout(()=>{
        btn.textContent = 'copy';
    },4000);
    navigator.clipboard.writeText(input.value);
}

console.log(eval(input.value));