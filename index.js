const path = require('path');
const express = require('express') 
const app = express();
const PORT = 80 
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public/templates/index.html'));
})
app.listen(PORT,()=>{
    console.log("website is up")
});                                                                                                                    re