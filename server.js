const path = require('path');

const express = require('express');
const expressHbs = require('express-handlebars');
const fileUpload = require("express-fileupload");

var mongoose = require("mongoose");

const app = express();

app.engine('hbs', expressHbs.engine({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'views/partials');

const adminData = require('./routes/admin');
const general = require('./routes/index');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload()  );
let URL = 'mongodb+srv://CaptJackSparrow:GcLNtd0BR6xiW11b@educatcluster0.xr1hmp5.mongodb.net/?retryWrites=true&w=majority'
// let URL = 'mongodb://localhost:27017/'

mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', ()=>{
    console.log("connected to DB");
});
mongoose.connection.on('error',(err)=>{
    if(err)console.log("error in DB connection"+err);
    console.log("connected")
})
app.use('/admin', adminData.routes);
app.use('/CSS', (req,res)=>{
    // console.log(__dirname+'/CSS'+req.url)
    res.sendFile(__dirname+'/CSS'+req.url)
});
app.use('/img', (req,res)=>{
    // console.log(__dirname+'/CSS'+req.url)
    res.sendFile(__dirname+'/img'+req.url)
});

app.use('/routes/images', (req,res)=>{
    console.log()
    res.sendFile(__dirname+'/routes/images'+req.url)
});
app.use('/JS', (req,res)=>{
    // console.log(__dirname+'/CSS'+req.url)
    res.sendFile(__dirname+'/JS'+req.url)
});
app.use(general);

// app.use((req, res, next) => {
//     res.render('nsd', {pageTitle: "Page Not Found"})
// });
const port = process.env.PORT || 3000;
app.listen(port);
