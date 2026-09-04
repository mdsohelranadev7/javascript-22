let x = document.getElementById('dark')

dark.addEventListener('click', () => {
    document.body.style.background = '#000'
})





function lig() {
    document.getElementById('light').innerHTML = "Nice"
    document.body.style.background = "#fff"

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

