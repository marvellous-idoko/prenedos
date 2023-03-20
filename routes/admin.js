const path = require('path');

const express = require('express');
const db = require("../schema/database");
const fir = require('@firebase/app')
const firebase  = require('@firebase/storage')

const firebaseConfig = {
    apiKey: "AIzaSyAQ_h2S5Sv8OOyclKDN1JE_xrT88zAOsxA",
    authDomain: "max-75153.firebaseapp.com",
    databaseURL: "https://max-75153.firebaseio.com",
    projectId: "max-75153",
    storageBucket: "max-75153.appspot.com",
    messagingSenderId: "98827445633"
  }

fir.initializeApp(firebaseConfig)
// const rootDir = require('../util/path');

const router = express.Router();
const products = [];
let dbt;
(async function(){
      // prod 
  // dbt = await db.findById('630d2084647428d2d665306f')
      // local
        dbt = await db.findById('630d4d987a298eb00f946dbb')
       console.log(dbt)
})();

router.get('/', async(req, res, next) => {
    let data = JSON.parse(await dbt['address'])
    res.render('admin', { data: '[Admin]',
                        adminCSS:true,
                        headingOne: data['firstHeading'],
                        headingTwo: data['secHeading'],
                    });
});

router.post('/upd', async (req, res, next) => {
    let data = JSON.parse(dbt['address'])
    let y = req.body.case
    console.log(y)
    data[y] = req.body.value
    
    dbt['address'] = JSON.stringify(data)
    console.group(JSON.parse(dbt['address']))
    dbt.save()
    res.json({code:1,msg:'done'})

  });
router.put('/upImg', async(req,res,next)=>{
    // console.log(req.files)
   let data = JSON.parse(dbt['address'])
    let ase =  req.body.value
    let li = __dirname + '/images/' + 'swiftnet'+Math.floor(Math.random() * 10000000000) + '.png';
    // fireUploader(req.files.photo)

    req.files.photo.mv(li,async ()=>{
        // data[ase] = "./"+li.slice(20)
        data[ase] = await fireUploader(req.files.photo.data)
        var storageRef = firebase.getStorage()
        var d =  firebase.ref(storageRef,`prenedos_images/swiftnet${+Math.floor(Math.random() * 10000000000)}.png`)
        let uploadTask = firebase.uploadBytes(d,req.files.photo.data) 
         uploadTask.then(async()=>{
            data[ase] = await firebase.getDownloadURL(d)
            //  console.log(url)
             console.log(data[ase])
             console.log(data)
             dbt['address'] = JSON.stringify(data)
             dbt.save()
             res.json({code:1,msg:'upload comeplete'})        
         })
    })
})


router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});
fireUploader = async (image)=>{
    let url
    var storageRef = firebase.getStorage()
   var d =  firebase.ref(storageRef,`prenedos_images/swiftnet${+Math.floor(Math.random() * 10000000000)}.png`)
   let uploadTask = firebase.uploadBytes(d,image) 
    uploadTask.then(async()=>{
        url = await firebase.getDownloadURL(d)
        console.log(url)
    })
//    uploadTask.then() => {
//     // uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => url = downloadURL)
  
//     console.log('Uploaded a blob or file!');
//   });
//   firebase.getDownloadURL((await uploadTask).ref).then((downloadURL) => {
//     url = downloadURL;
//   });
   // let uploadTask = storageRef.child(`users_images/${image.name}/`).put(image);
    // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //   (snapshot) => { 
    //     uploadTask.snapshot.ref.getDownloadURL().then(downloadURL =>{ url = downloadURL;console.log(url)})
    //   })
      return url;
    }
exports.routes = router;
exports.products = products;