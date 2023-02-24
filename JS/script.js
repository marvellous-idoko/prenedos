function slider() {
    let jl = document.getElementsByClassName(gerd)
    for (let index = 0; index < jl.length; index++) {
        jl.item(index).classList.add('display')        
    }
    setInterval(()=>{
        jl.item(counter).classList.remove()
    },4000)
}
let counter = 1

var cont1 = document.getElementById('mainCont')
var cont2 = document.getElementById('mainCont2')

setInterval(
    ()=>{displayer()}, 10000);


function displayer() {
 if (counter == 1) {
     cont1.style.display = 'flex'
     cont2.style.display = 'none'
    counter = 0

 }else{
    cont1.style.display = 'none'
    cont2.style.display = 'flex'
    counter = 1
}

}
displayer()

