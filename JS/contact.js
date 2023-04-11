// const srv = 'https://prenedos.herokuapp.com/admin/' 
const srv = 'http://localhost:3000/admin/' 



const formData = new FormData();
function sender(contact, email,name,msg) {
    let y = { email: email, msg: msg, contact:contact, name:name }
    // console.log(y)
    fetch(srv+"messages", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(y),
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data.msg)
            document.getElementById('btn').style.cursor = 'pointer'
            document.getElementById('btn').style.backgroundColor = 'var(--purple)'
            document.getElementById('btn').innerHTML = 'send'
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error:', error);
            document.getElementById('btn').style.cursor = 'pointer'
            document.getElementById('btn').style.backgroundColor = 'var(--purple)'
            document.getElementById('btn').innerHTML = 'send'
        })

}
function redsa() {
    console.log('inndj')
    const regx = /[a - z]*[0 - 9]*@[a - z]*.[a - z]*/
    var cont = document.getElementById('phn').value
    var email = document.getElementById('email').value
    var name = document.getElementById('name').value
    var msg = document.getElementById('msg').value
    if(cont.length < 10){
        alert('phone number not correct, please correct phone number')
    }else if(!regx.test(email)){
        alert('Email not correct, please correct email')
    }
    else if(name.length == 0){
        alert('please enter name')
    }
    else if(msg.length == 0){
        alert('please enter a msg')
    }
    else{
        document.getElementById('btn').style.cursor = 'not-allowed'
        document.getElementById('btn').style.backgroundColor = '#ec8bec'
        document.getElementById('btn').innerHTML = 'sending . . .'
        sender(cont,email,name,msg)
    }
}