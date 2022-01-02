const express = require('express');

const app = express();


//Template Engine

app.set("view engine","ejs");


//MiddleWare 

app.use(express.static('public'));

//Routes
app.get('/' ,async (req,res)=>{

    res.status(200).render('index',{
        page_name:'index'
    });
})

app.get('/about' ,async (req,res)=>{

    res.status(200).render('about',{
        page_name:'about'
    });
})


const port = 3000;
app.listen(port,()=>{
    console.log("Success 3000")
});