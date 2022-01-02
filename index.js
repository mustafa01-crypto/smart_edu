const express = require('express');

const app = express();


app.get('/' ,async (req,res)=>{

    res.status(200).send("INDEx sayfası")
})


const port = 3000;
app.listen(port,()=>{
    console.log("Success 3000")
});