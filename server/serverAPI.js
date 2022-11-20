const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { addNewUser } = require('./database/adduser')
const upload = multer();
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());


app.post('/adduser',(req,res)=>{
   
//    console.log(req);
//    console.log(JSON.stringify(req).indexOf('password'));
   res.set('Access-Control-Allow-Origin', '*');
   userInfo = req.body;
   
   console.log(userInfo);
    addNewUser(userInfo,res);
   

});
app.listen(PORT,()=>{


    console.log("listening on port: " + PORT);
})