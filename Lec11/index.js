const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views') )
//middlewarre
app.use(express.static(path.join(__dirname, 'public')))
//body parsing middleware
app.use(express.urlencoded({ extended: true })) 

const allBlogs = [
    {id:1, blog:"Superman", author:"mav"},
    {id:2, blog:"Spiderman", author:"stanlee"},
    {id:3, blog:"Shaktiman", author:"Gangadhar"}
]

app.get('/' , (req,res)=>{
    res.send("welcome to root")
})

app.get('/blogs' , (req,res)=>{
    // res.render('index' , {allBlogs: allBlogs})
    res.render('index' , {allBlogs})
})

app.get('/blog/new' , (req,res)=>{
    res.render('new');
})
app.post('/blogs' , (req,res)=>{
    console.log(req.body , "body");
    allBlogs.push({id:allBlogs.length+1 , blog , author})
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER RUNNING AT ${PORT}`);
})