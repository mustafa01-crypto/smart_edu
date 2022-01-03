
exports.aboutPage = (req,res)=>{

    res.status(200).render('about',{
        page_name:'about'
    });
}
exports.indexPage =(req,res)=>{

    res.status(200).render('index',{
        page_name:'index'
    });
}