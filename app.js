"use strict"
const express=require("express");
const app=express();
const port =3000||process.env.port;

app
.get("/",(req,res)=>{
    console.log(req.url)
    res.send("<h1>hello</h1>");//determıne the content-type automatıcally
})
.post("/",(req,res)=>{})
.patch("/",(req,res)=>{})
.delete("/",(req,res)=>{})
.put("/",(req,res)=>{});

app.get("/old",(req,res)=>{
res.redirect(301,"/new");
})

app.get("/new",(req,res)=>{
    res.send("<h1>NEW</h1>");
})

app.listen(port,err=>{
if(err){
 console.log("ERROR",err);  
 return ;
}
console.log(`listening on port ${port}`)
})