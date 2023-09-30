function changeColor(colorName){
    let myColor = document.getElementById(colorName);
    console.log(myColor.textContent);
    document.body.style.backgroundColor=colorName;
}