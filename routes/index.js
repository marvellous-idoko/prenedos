const path = require('path');

const express = require('express');
const db = require("../schema/database");

// const rootDir = require('../util/path');

const router = express.Router();
let dbt ;

(async function(){
  // prod 
  dbt = await db.findById('630d2084647428d2d665306f')
  // local
    // dbt = await db.findById('630d4d987a298eb00f946dbb')
})();
module.exports = async function fd(){
  console.log('called . . . .')
      // prod 
  dbt = await db.findById('630d2084647428d2d665306f')
  console.log(dbt)

  // local
    // dbt = await db.findById('630d4d/987a298eb00f946dbb')
     
}
router.get('/', async(req, res, next) => {
  res.redirect('home')
}) 
 router.get('/home', async(req, res, next) => {

    let data = JSON.parse(await dbt['address'])
     res.render('home', { title: 'products',

                  // First Slide
                    headingOne: data['firstHeading'],
                    paraOne1: data['firstPara1'],
                    paraOne2: data['firstPara2'],
                    paraOne3: data['firstPara3'],
                    firstSlideImg:data['firstSlideImg'],

                  // Second Slide
                    headingTwo:data['secHeading'],
                    paraTwo1: data['secondPara1'],
                    paraTwo2: data['secondPara2'],
                    paraTwo3: data['secondPara3'],
                    secSlideImg:data['secSlideImg'],
  
                  // Third Slide
                    headingThree: data['thirdHeading'],
                    paraThree1: data['thirdPara1'],
                    paraThree2: data['thirdPara2'],
                    paraThree3: data['thirdPara3'],
                    thirdSlideImg:data['thirdSlideImg'],

                  // Fourth Slide
                  headingFour: data['fourthHeading'],
                    paraFour1: data['fourthPara1'],
                    paraFour2: data['fourthPara2'],
                    paraFour3: data['fourthPara3'],
                    fourthSlideImg:data['fourthSlideImg'],

                  // Fifth Slide
                  headingFive: data['fifthHeading'],
                    paraFive1: data['fifthPara1'],
                    paraFive2: data['fifthPara2'],
                    paraFive3: data['fifthPara3'],
                    fifthSlideImg:data['fifthSlideImg'],

                    svc1title: data['svc1title'],
                    firstServImg:data['firstServImg'],
                    svc1des: data['svc1des'],

                    svc2title: data['svc2title'],
                    secServImg:data['secServImg'],
                    svc2des: data['svc2des'],

                    svc3title: data['svc3title'],
                    thirdServImg:data['thirdServImg'],
                    svc3des: data['svc3des'],

                    svc4title: data['svc4title'],
                    fourthServImg:data['fourthServImg'],
                    svc4des: data['svc4des'],

                    svc5title: data['svc5title'],
                    fifthServImg:data['fifthServImg'],
                    svc5des: data['svc5des'],

                    svc6title: data['svc6title'],
                    sixthServImg:data['sixthServImg'],
                    svc6des: data['svc6des'],

                    svc7title: data['svc7title'],
                    seventhServImg:data['seventhServImg'],
                    svc7des: data['svc7des'],

                    svc8title: data['svc8title'],
                    eightServImg:data['eightServImg'],
                    svc8des: data['svc8des'],
                    
                    svc9title: data['svc9title'],
                    ninthServImg:data['ninthServImg'],
                    svc9des: data['svc9des'],
                    // svc1des: data['svc1des'],
                });
});

router.get('/aboutUs', (req, res, next) => {
  res.render('about-us', { data: '',abtUs:true});
  });
  
router.get('/contact', (req, res, next) => {
    res.render('contact-us', { cntUs:true });
  });
router.get('/careers', async(req, res, next) => {    
      res.render('careers', {
         careers:true,
         jobs: JSON.stringify(await dbt['jobs']),        
        })
 });
  router.get('/projects', async(req, res, next) => {
    // let dbt = await db.findById('630d2084647428d2d665306f')
 
    let data = JSON.parse(dbt['address'])
    res.render('projects', {
             prjcts:true,
             
             firstOngoingProjectTitle:data['firstOngoingProjectTitle'],
             firstOngoingProjectDes:data['firstOngoingProjectDes'],
             firstOngoingProjectImg:data['firstOngoingProjectImg'],

             secOngoingProjectTitle:data['secOngoingProjectTitle'],
             secondOngoingProjectDes:data['secondOngoingProjectDes'],
             secondOngoingProjectImg:data['secondOngoingProjectImg'],
             
             thirdOngoingProjectTitle:data['thirdOngoingProjectTitle'],
             thirdOngoingProjectDes:data['thirdOngoingProjectDes'],
             thirdOngoingProjectImg:data['thirdOngoingProjectImg'],


             fourthOngoingProjectTitle:data['fourthOngoingProjectTitle'],
             fourthOngoingProjectDes:data['fourthOngoingProjectDes'],
             fourthOngoingProjectImg:data['fourthOngoingProjectImg'],

             fifthOngoingProjectTitle:data['fifthOngoingProjectTitle'],
             fifthOngoingProjectDes:data['fifthOngoingProjectDes'],
             fifthOngoingProjectImg:data['fifthOngoingProjectImg'],

             
             sixthOngoingProjectTitle:data['sixthOngoingProjectTitle'],
             sixthOngoingProjectDes:data['sixthOngoingProjectDes'],
             sixthOngoingProjectImg:data['sixthOngoingProjectImg'],
             

             firstCompletedProjectTitle:data['firstCompletedProjectTitle'],
             firstCompletedProjectDes:data['firstCompletedProjectDes'],
             firstCompletedProjectImg:data['firstCompletedProjectImg'],

             secCompletedProjectTitle:data['secCompletedProjectTitle'],
             secondCompletedProjectDes:data['secondCompletedProjectDes'],
             secondCompletedProjectImg:data['secondCompletedProjectImg'],
             
             thirdCompletedProjectTitle:data['thirdCompletedProjectTitle'],
             thirdCompletedProjectDes:data['thirdCompletedProjectDes'],
             thirdCompletedProjectImg:data['thirdCompletedProjectImg'],
             
             fourthCompletedProjectTitle:data['fourthCompletedProjectTitle'],
             fourthCompletedProjectDes:data['fourthCompletedProjectDes'],
             fourthCompletedProjectImg:data['fourthCompletedProjectImg'],

             fifthCompletedProjectTitle:data['fifthCompletedProjectTitle'],
             fifthCompletedProjectDes:data['fifthCompletedProjectDes'],
             fifthCompletedProjectImg:data['fifthCompletedProjectImg'],

             sixthCompletedProjectTitle:data['sixthCompletedProjectTitle'],
             sixthCompletedProjectDes:data['sixthCompletedProjectDes'],
             sixthCompletedProjectImg:data['sixthCompletedProjectImg']
            });
  });

  router.get('/events', async(req, res, next) => {
    // let dbt = await db.findById('630d2084647428d2d665306f')
  let data = JSON.parse(dbt['address'])
     res.render('events', { prjcts:true,
      firstEventTitle:data['firstEventTitle'],
      firstEventDes:data['firstEventDes'],
      firstEventImg:data['firstEventImg'],
      
      secEventTitle:data['secEventTitle'],
      secondEventDes:data['secondEventDes'],
      secondEventImg:data['secondEventImg'],
      
      thirdEventTitle:data['thirdEventTitle'],
      thirdEventDes:data['thirdEventDes'],
      thirdEventImg:data['thirdEventImg'],

      fourthEventTitle:data['fourthEventTitle'],
      fourthEventDes:data['fourthEventDes'],
      fourthEventImg:data['fourthEventImg'],

      fifthEventTitle:data['fifthEventTitle'],
      fifthEventDes:data['fifthEventDes'],
      fifthEventImg:data['fifthEventImg'],

      sixthEventTitle:data['sixthEventTitle'],
      sixthEventDes:data['sixthEventDes'],
      sixthEventImg:data['sixthEventImg'],


      firstGalleryTitle:data['firstGalleryTitle'],
      firstGalleryDes:data['firstGalleryDes'],
      firstGalleryImg:data['firstGalleryImg'],

      secGalleryTitle:data['secGalleryTitle'],
      secondGalleryDes:data['secondGalleryDes'],
      secondGalleryImg:data['secondGalleryImg'],

      thirdGalleryTitle:data['thirdGalleryTitle'],
      thirdGalleryDes:data['thirdGalleryDes'],
      thirdGalleryImg:data['thirdGalleryImg'],

      fourthGalleryTitle:data['fourthGalleryTitle'],
      fourthGalleryDes:data['fourthGalleryDes'],
      fourthGalleryImg:data['fourthGalleryImg'],

      fifthGalleryTitle:data['fifthGalleryTitle'],
      fifthGalleryDes:data['fifthGalleryDes'],
      fifthGalleryImg:data['fifthGalleryImg'],

      sixthGalleryTitle:data['sixthGalleryTitle'],
      sixthGalleryDes:data['sixthGalleryDes'],
      sixthGalleryImg:data['sixthGalleryImg']
   });
 
  });
  
  router.get('/services', (req, res, next) => {
  let data = JSON.parse(dbt['address'])
    res.render('services', { 
      services:true,


      svc1title: data['svc1title'],
      firstServImg:data['firstServImg'],
      svc1des: data['svc1des'],

      svc2title: data['svc2title'],
      secServImg:data['secServImg'],
      svc2des: data['svc2des'],

      svc3title: data['svc3title'],
      thirdServImg:data['thirdServImg'],
      svc3des: data['svc3des'],

      svc4title: data['svc4title'],
      fourthServImg:data['fourthServImg'],
      svc4des: data['svc4des'],

      svc5title: data['svc5title'],
      fifthServImg:data['fifthServImg'],
      svc5des: data['svc5des'],

      svc6title: data['svc6title'],
      sixthServImg:data['sixthServImg'],
      svc6des: data['svc6des'],

      svc7title: data['svc7title'],
      seventhServImg:data['seventhServImg'],
      svc7des: data['svc7des'],

      svc8title: data['svc8title'],
      eightServImg:data['eightServImg'],
      svc8des: data['svc8des'],
      
      svc9title: data['svc9title'],
      ninthServImg:data['ninthServImg'],
      svc9des: data['svc9des'],
    
      svc10title: data['svc10title'],
      tenthServImg:data['tenthServImg'],
      svc10des: data['svc10des'],
    });
  })
    router.get('/faqs', (req, res, next) => {
  res.render('faqs', { faqs:true });
  });

  
module.exports = router;