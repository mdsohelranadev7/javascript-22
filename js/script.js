const bgColor = document.getElementById('bgColor');
const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', () => {

    const backcolor = randomColor();
    bgColor.style.background = backcolor;

})


function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}



let moon = document.getElementById('moon')

moon.addEventListener('click', () => {
    bgColor.style.background = "#000"
    headtext.style.color = "#fff"

})



let sun = document.getElementById('sun')
sun.addEventListener('click', () => {
    bgColor.style.background = "#fff"
    headtext.style.color = "#000"
})



let output = document.getElementById('output')
let hexa = document.getElementById('hexa')
let copyBtn = document.getElementById('copyBtn')

hexa.addEventListener('click', () => {

    let bg = randombg();
    secoundDiv.style.background = bg
    output.value = bg

    copyBtn.addEventListener('click',()=>{
        navigator.clipboard.writeText(output.value)
    })
})

function randombg() {
    let reds = Math.floor(Math.random() * 255);
    let greens = Math.floor(Math.random() * 255);
    let blues = Math.floor(Math.random() * 255);


    return `#${reds.toString(16).padStart(2, '0')}${greens.toString(16).padStart(2, '0')}${blues.toString(16).padStart(2, '0')}`
}