const imageBox = document.querySelector('.image-box');
const image = imageBox.getElementsByTagName('img');
let i = 0;
function nextImg(){
    image[i].classList.remove('active');
    if(i<2){
        i++;
    }else{
        i=0;
    }
    image[i].classList.add('active')
}

function prevImg(){
    image[i].classList.remove('active');
    if(i>0){
        i--;
    }else{
        i=2;
    }
    image[i].classList.add('active');
}


