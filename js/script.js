const bgColor =document.getElementById('bgColor');
const colorBtn =document.getElementById('colorBtn');

colorBtn.addEventListener('click',()=>{

    const backcolor = randomColor();
     bgColor.style.background = backcolor;

})


function randomColor(){
    const red =Math.floor(Math.random()*255);
    const green =Math.floor(Math.random()*255);
    const blue =Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`
}



let moon =document.getElementById('moon')

moon.addEventListener('click', ()=>{
    bgColor.style.background ="#000"
    headtext.style.color="#fff"

})



let sun =document.getElementById('sun')
sun.addEventListener('click',()=>{
    bgColor.style.background="#fff"
     headtext.style.color="#000"
})