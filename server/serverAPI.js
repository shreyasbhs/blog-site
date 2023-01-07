const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const jwt = require('jsonWebtoken');
const {hashPassword,comparePassword}  = require('./managePassword')
const { addNewUser } = require('./database/adduser');
const { verifyUser } = require('./database/verifyUser')
const upload = multer();
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

app.post('/adduser',(req,res)=>{
   res.set('Access-Control-Allow-Origin', '*');
   userInfo = req.body;
   console.log(userInfo);
   addNewUser(userInfo,res);
   

});

app.post('/signinUser',(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    userInfo = req.body;
    console.log(userInfo);
    signInUser(userInfo,res);
    
 
 });
app.get('/verify/:username/:token',(req,res) =>{
    console.log(req.params);
    const { username, token } = req.params;
    if(token == '123'){ 
    verifyUser(username);
    res.send("Something should have happened");
    }
    // jwt.verify(token,'<secret_key>',(err,decode)=>{
    //     if(err){
    //         res.send({
    //             status: 402,
    //             msg: "Authentication failed"
    //         })
    //     }
    //     else{
    //         verifyUser(username);
    //         res.send({
    //             status: 200,
    //             msg: "Email verification succesfull"
    //         })
    //     }
    // })
 })
app.listen(PORT,()=>{


    console.log("listening on port: " + PORT);
})