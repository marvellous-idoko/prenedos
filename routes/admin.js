const path = require('path');

const express = require('express');
const db = require("../schema/database");

// const rootDir = require('../util/path');

const router = express.Router();
const products = [];
let dbt;
(async function(){
       dbt = await db.findById('630d4d987a298eb00f946dbb')
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
    req.files.photo.mv(li,()=>{
        data[ase] = "./"+li.slice(20)
        console.log(data)
        dbt['address'] = JSON.stringify(data)
        dbt.save()
        res.json({code:1,msg:'upload comeplete'})        
    })
})


router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;