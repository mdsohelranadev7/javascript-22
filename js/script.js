let x = document.getElementById('dark')

dark.addEventListener('click', () => {
    document.body.style.background = '#2c1b1b'
})





function lig() {
    document.getElementById('light').innerHTML = "Nice"
    document.body.style.background = "#cfd8e6"

}



let sub = document.getElementById('sub')


sub.addEventListener('click', () => {

    let inputinp =inp.value

    if (inputinp > 18) {
        alert("adult")

    }

    else{
        alert("child")
    }

})


function sls(){
    
let input = document.getElementById ("sks")
if(input.value ===""){
    alert("fill the box")
    
}
else{
   alert(" your name is" + input.value)
}


}