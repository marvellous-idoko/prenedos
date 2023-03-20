function slider() {
    let jl = document.getElementsByClassName(gerd)
    for (let index = 0; index < jl.length; index++) {
        jl.item(index).classList.add('display')        
    }
    setInterval(()=>{
        jl.item(counter).classList.remove()
    },4000)
}
let counter = 0

var cont1 = document.getElementById('mainCont')
var cont2 = document.getElementById('mainCont2')

setInterval(()=>{displayer()}, 10000);


function displayer() {
    let y = document.getElementsByClassName('gerd')
for (let index = 0; index < y.length; index++) {
    y[index].classList.remove('active') 
}
 if (counter == y.length-1) {
    y.item(counter).classList.add('active')
    counter = 0
 }else{
    y.item(counter).classList.add('active')
    counter++
}

}
displayer()

document.body.onscroll = ()=>{

    document.getElementById('df').style.display = 'grid'
    // document.getElementById('df').style.backgroundColor = 'blue'
}

function servicesDisplay(){
    console.log(document.getElementById('df').offsetTop)
    if(document.getElementById('df').offsetTop == 7){
        document.getElementById('df').style.display = 'block'
    }
    document.addEventListener('scroll',()=>{

        document.getElementById('df')
    }
    )
}
servicesDisplay()
