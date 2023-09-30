const sidebarMove = document.querySelector('.side-bar');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    sidebarMove.classList.toggle('active')
})