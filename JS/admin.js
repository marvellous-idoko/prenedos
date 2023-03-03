// const srv = 'https://prenedos.herokuapp.com/admin/' 
const srv = 'http://localhost:3000/admin/' 

const formData = new FormData();
function sender(urlm, il) {
    let y = { case: urlm, value: il }
    console.log(y)
    fetch(srv+"upd", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(y),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            alert(data.msg)
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}
function updt(whatn) {
    sender(whatn, document.getElementById(whatn).value)
}


function uplImg(whatsx) {
    if (whatsx == 'firstSlideImg') {
        formData.append('photo', document.getElementById('firstSlideImg').files[0]);
        formData.append('value', 'firstSlideImg')
        sendImg(formData)
    }
    else if (whatsx == 'secSlideImg') {

        formData.append('photo', document.getElementById('secSlideImg').files[0]);
        formData.append('value', 'secSlideImg')
        sendImg(formData)
    }
    else if (whatsx == 'firstServImg') {

        formData.append('photo', document.getElementById('firstServImg').files[0]);
        formData.append('value', 'firstServImg')
        sendImg(formData)
    }
    
    else if (whatsx == 'firstOngoingProjectImg') {
        formData.append('photo', document.getElementById('firstOngoingProjectImg').files[0]);
        formData.append('value', 'firstOngoingProjectImg')
        sendImg(formData)
    }
        
    else if (whatsx == 'secondOngoingProjectImg') {
        formData.append('photo', document.getElementById('secondOngoingProjectImg').files[0]);
        formData.append('value', 'secondOngoingProjectImg')
        sendImg(formData)
    }
        
    else if (whatsx == 'thirdOngoingProjectImg') {
        formData.append('photo', document.getElementById('thirdOngoingProjectImg').files[0]);
        formData.append('value', 'thirdOngoingProjectImg')
        sendImg(formData)
    }        
    else if (whatsx == 'fourthOngoingProjectImg') {
        formData.append('photo', document.getElementById('fourthOngoingProjectImg').files[0]);
        formData.append('value', 'fourthOngoingProjectImg')
        sendImg(formData)
    }
            
    else if (whatsx == 'fifthOngoingProjectImg') {
        formData.append('photo', document.getElementById('fifthOngoingProjectImg').files[0]);
        formData.append('value', 'fifthOngoingProjectImg')
        sendImg(formData)
    }
            
    else if (whatsx == 'sixthOngoingProjectImg') {
        formData.append('photo', document.getElementById('sixthOngoingProjectImg').files[0]);
        formData.append('value', 'sixthOngoingProjectImg')
        sendImg(formData)
    }

             
    else if (whatsx == 'firstCompletedProjectImg') {
        formData.append('photo', document.getElementById('firstCompletedProjectImg').files[0]);
        formData.append('value', 'firstCompletedProjectImg')
        sendImg(formData)
    }        
    else if (whatsx == 'secondCompletedProjectImg') {
        console.log('isi')
        formData.append('photo', document.getElementById('secondCompletedProjectImg').files[0]);
        formData.append('value', 'secondCompletedProjectImg')
        sendImg(formData)
    }        
    else if (whatsx == 'thirdCompletedProjectImg') {
        formData.append('photo', document.getElementById('thirdCompletedProjectImg').files[0]);
        formData.append('value', 'thirdCompletedProjectImg')
        sendImg(formData)
    }        
    else if (whatsx == 'fourthCompletedProjectImg') {
        formData.append('photo', document.getElementById('fourthCompletedProjectImg').files[0]);
        formData.append('value', 'fourthCompletedProjectImg')
        sendImg(formData)
    }        
    else if (whatsx == 'fifthCompletedProjectImg') {
        console.log('isi')
        formData.append('photo', document.getElementById('fifthCompletedProjectImg').files[0]);
        formData.append('value', 'fifthCompletedProjectImg')
        sendImg(formData)
    }        
    else if (whatsx == 'sixthCompletedProjectImg') {
        formData.append('photo', document.getElementById('sixthCompletedProjectImg').files[0]);
        formData.append('value', 'sixthCompletedProjectImg')
        sendImg(formData)
    }
    

    else if (whatsx == 'firstEventImg') {
        formData.append('photo', document.getElementById('firstEventImg').files[0]);
        formData.append('value', 'firstEventImg')
        sendImg(formData)
    }     
    else if (whatsx == 'secondEventImg') {
        formData.append('photo', document.getElementById('secondEventImg').files[0]);
        formData.append('value', 'secondEventImg')
        sendImg(formData)
    }           
    else if (whatsx == 'thirdEventImg') {
        formData.append('photo', document.getElementById('thirdEventImg').files[0]);
        formData.append('value', 'thirdEventImg')
        sendImg(formData)
    }            
    else if (whatsx == 'fourthEventImg') {
        formData.append('photo', document.getElementById('fourthEventImg').files[0]);
        formData.append('value', 'fourthEventImg')
        sendImg(formData)
    }            
    else if (whatsx == 'fifthEventImg') {
        formData.append('photo', document.getElementById('fifthEventImg').files[0]);
        formData.append('value', 'fifthEventImg')
        sendImg(formData)
    }            
    else if (whatsx == 'sixthEventImg') {
        formData.append('photo', document.getElementById('sixthEventImg').files[0]);
        formData.append('value', 'sixthEventImg')
        sendImg(formData)
    }


    else if (whatsx == 'firstGalleryImg') {
        formData.append('photo', document.getElementById('firstGalleryImg').files[0]);
        formData.append('value', 'firstGalleryImg')
        sendImg(formData)
    }

    else if (whatsx == 'secondGalleryImg') {
        formData.append('photo', document.getElementById('secondGalleryImg').files[0]);
        formData.append('value', 'secondGalleryImg')
        sendImg(formData)
    }
    else if (whatsx == 'thirdGalleryImg') {
        formData.append('photo', document.getElementById('thirdGalleryImg').files[0]);
        formData.append('value', 'thirdGalleryImg')
        sendImg(formData)
    }
    else if (whatsx == 'fourthGalleryImg') {
        formData.append('photo', document.getElementById('fourthGalleryImg').files[0]);
        formData.append('value', 'fourthGalleryImg')
        sendImg(formData)
    }
    else if (whatsx == 'fifthGalleryImg') {
        formData.append('photo', document.getElementById('fifthGalleryImg').files[0]);
        formData.append('value', 'fifthGalleryImg')
        sendImg(formData)
    }
    else if (whatsx == 'sixthGalleryImg') {
        formData.append('photo', document.getElementById('sixthGalleryImg').files[0]);
        formData.append('value', 'sixthGalleryImg')
        sendImg(formData)
    }
    else if (whatsx == 'sixthServImg') {
        formData.append('photo', document.getElementById('sixthServImg').files[0]);
        formData.append('value', 'sixthServImg')
        sendImg(formData)
    
    }
    else if (whatsx == 'fifthServImg') {
        formData.append('photo', document.getElementById('fifthServImg').files[0]);
        formData.append('value', 'fifthServImg')
        sendImg(formData)
    }
    else if (whatsx == 'fourthServImg') {
        formData.append('photo', document.getElementById('fourthServImg').files[0]);
        formData.append('value', 'fourthServImg')
        sendImg(formData)
    }
    else if (whatsx == 'thirdServImg') {
        formData.append('photo', document.getElementById('thirdServImg').files[0]);
        formData.append('value', 'thirdServImg')
        sendImg(formData)
    }
    else if (whatsx == 'secServImg') {
        formData.append('photo', document.getElementById('secServImg').files[0]);
        formData.append('value', 'secServImg')
        sendImg(formData)
    }
    else if (whatsx == 'firstServImg') {
        formData.append('photo', document.getElementById('firstServImg').files[0]);
        formData.append('value', 'firstServImg')
        sendImg(formData)
    }
}
function sendImg(frmDta) {

    fetch(srv+"upImg", {
        method: 'PUT',
        body: frmDta
    }) 
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        alert(data.msg)
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}
