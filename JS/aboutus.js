
let ya = document.getElementsByClassName('contents')
for (let index = 0; index < ya. length; index++) {
    ya.item(index).classList.add('noneDisp');
}
function shwa(ko) {
    let apa = document.getElementsByClassName('linksw')
    for (let index = 0; index < apa.length; index++) {
        apa.item(index).classList.remove('active');
        
    }
    document.getElementById(ko).classList.add('active')
    
    let apas = document.getElementsByClassName('contents')
    for (let index = 0; index < apas.length; index++) {
        apas.item(index).classList.remove('act');
        apas.item(index).classList.add('noneDisp');
    }
    document.getElementById(ko+'1').classList.remove('noneDisp')
    document.getElementById(ko+'1').classList.add('act')
}
document.getElementById('vision').click()