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

    let inputinp = inp.value

    if (inputinp > 18) {
        alert("adult")

    }

    else {
        alert("child")
    }

})


function sls() {

    let input = document.getElementById("sks")
    if (input.value === "") {
        alert("fill the box")

    }
    else {
        alert(" your name is" + input.value)
    }

}

// function dks() {

//     let inputbtn = document.getElementById('inputbtn');
//     let deleteMe = document.getElementById('deleteMe');
//     // let deleted = document.getElementById('deleted')



//     if (inputbtn.value === "Delete") {
//         deletes.remove();

//     }
//     else {
//         alert('please type Delete')
//     }


// }




let deletes = document.getElementById("deletes")
let inputbtn = document.getElementById("inputbtn")
let deleted = document.getElementById("deleted")


deleted.addEventListener("click", () => {
    if (inputbtn.value === "delete") {
        deletes.remove();
        inputbtn.remove=""

    }
    else {
        alert('delete nam e lekho')
    }
})


let red = document.getElementById("red")


red.addEventListener('click', ()=>{
    document.body.style.background = "red"
    document.getElementById("red").innerHTML = 'blue'
})

function grn (){
    let green = document.getElementById("green")
    document.body.style.background = 'green'
}