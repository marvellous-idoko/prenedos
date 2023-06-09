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
      dbt = await db.findById('630d2084647428d2d665306f')
      
      // local
        // dbt = await db.findById('630d4d987a298eb00f946dbb')
        // old dbt = await db.findById('6424b7e6c7688400c0b586ba')
      //  console.log(dbt)
})();

router.get('/', async(req, res, next) => {
    let data = JSON.parse(await dbt['address'])
    let msgs = await dbt['msgs']
    res.render('admin', { data: '[Admin]',
                        adminCSS:true,
                        headingOne: data['firstHeading'],
                        headingTwo: data['secHeading'],
                        msgs: JSON.stringify(msgs)
                    });
});

router.post('/upd', async (req, res, next) => {
    let data = JSON.parse(dbt['address'])
    let y = req.body.case
    console.log(y)
    data[y] = req.body.value
    dbt['address'] = JSON.stringify(data)
    // console.group(JSON.parse(dbt['address']))
    dbt.save()
    res.json({code:1,msg:'done'})
}).post("/post-job", async(req,res)=>{
    
  if(dbt['jobs']){
    dbt['jobs'].push(JSON.stringify(req.body))
    }else{
      dbt['jobs'].push(JSON.stringify(req.body))
    }
    console.log(dbt['jobs'])
    dbt.save()
    res.json({code:1,msg:'Job Posted'})
    
  })
router.put('/upImg', async(req,res,next)=>{
    // console.log(req.files)
   let data = JSON.parse(dbt['address'])
    let ase =  req.body.value
    let li = __dirname + '/images/' + 'swiftnet'+Math.floor(Math.random() * 10000000000) + '.png';
    // fireUploader(req.files.photo)

    req.files.photo.mv(li,async ()=>{
        // data[ase] = "./"+li.slice(20)
        // data[ase] = await fireUploader(req.files.photo.data)
        var storageRef = firebase.getStorage()
        var d =  firebase.ref(storageRef,`prenedos_images/swiftnet${+Math.floor(Math.random() * 10000000000)}.png`)
        let uploadTask = firebase.uploadBytes(d,req.files.photo.data) 
         uploadTask.then(async()=>{
            data[ase] = await firebase.getDownloadURL(d)
            //  console.log(url)
             console.log(ase)
            //  console.log(data)
             dbt['address'] = JSON.stringify(data)
             dbt.save()
             res.json({code:1,msg:'upload comeplete'})        
         })
    })
})
.post('/messages',async(req,res)=>{
  // let data = JSON.parse(dbt['address'])
  let y =[];
  // console.log(typeof await dbt['dateREg'])
  if(dbt['msgs']){
  dbt['msgs'].push(JSON.stringify(req.body))
  }else{
    dbt['msgs'].push(JSON.stringify(req.body))
  }
  console.log(dbt['msgs'])
  dbt.save()
  res.json({code:1,msg:'we received your message'})
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
    })
      return url;
    }
exports.routes = router;
exports.products = products;