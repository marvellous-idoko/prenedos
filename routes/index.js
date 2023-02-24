const path = require('path');

const express = require('express');
const db = require("../schema/database");

// const rootDir = require('../util/path');

const router = express.Router();
// let dbt  ;
// (async function(){
//        dbt = await db.findById('630d4d987a298eb00f946dbb')
// })();

router.get('/', async(req, res, next) => {
  res.redirect('home')
}) 
 router.get('/home', async(req, res, next) => {
    let dbt = await db.findById('630d4d987a298eb00f946dbb')
    let data = JSON.parse(dbt['address'])
  res.render('home', { title: 'products',
                    headingOne: data['firstHeading'],
                    headingTwo: data['secHeading'],
                    secSlideImg:data['secSlideImg'],
                    firstSlideImg:data['firstSlideImg'],
                    paraOne1: data['firstPara1'],
                    paraOne2: data['firstPara2'],
                    paraOne3: data['firstPara3'],
                    paraTwo1: data['secondPara1'],
                    paraTwo2: data['secondPara2'],
                    paraTwo3: data['secondPara3'],
                    svc1title: data['svc1title'],
                    svc1des: data['svc1des'],
                    svc2title: data['svc2title'],
                    svc2des: data['svc2des'],
                    svc3title: data['svc3title'],
                    svc3des: data['svc3des'],
                    svc4title: data['svc4title'],
                    svc4des: data['svc4des'],
                    svc5title: data['svc5title'],
                    svc5des: data['svc5des'],
                    svc6title: data['svc6title'],
                    svc6des: data['svc6des'],
                    // svc1title: data['svc1title'],
                    // svc1des: data['svc1des'],

                });
});

router.get('/aboutUs', (req, res, next) => {
    res.render('about-us', { data: '',abtUs:true});
  });
  
router.get('/contact', (req, res, next) => {
    res.render('contact-us', { cntUs:true });
  });
  router.get('/projects', async(req, res, next) => {
    let dbt = await db.findById('630d4d987a298eb00f946dbb')
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
    let dbt = await db.findById('630d4d987a298eb00f946dbb')
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

  router.get('/faqs', (req, res, next) => {
    res.render('faqs', { faqs:true });
  });

  
module.exports = router;