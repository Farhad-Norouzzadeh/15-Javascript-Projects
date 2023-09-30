const passInput = document.querySelector('.pass-input');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    
    toggle.classList.toggle('hide')
    passInput.type === 'text' ? passInput.type = 'password' : passInput.type = 'text'

})