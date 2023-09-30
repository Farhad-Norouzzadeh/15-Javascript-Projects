const progressBar = document.querySelector('.progress-bar');

console.log('documentElement',document.body.scrollHeight);

window.addEventListener('scroll', ()=>{
    const winScroll = scrollY;//height of our scroll این پارامتری هستش که با اسکرول کردن مقدارش تغییر میکنه

    // Height of entire web page - height of viewable portion of browser (پایین)
    const height = document.documentElement.scrollHeight - innerHeight;
    const result = (winScroll/height)*100;
    console.log(document.documentElement.scrollHeight);
    progressBar.style.width =`${result}%`
    
})

//window.innerHeight دقیقا ارتفاع محتوای اخل مرورگر رو نشون میده
//نیازی به نوشتن کلمه window نداریم