"use strict"
const express=require("express");
const app=express();
const port =3000||process.env.port;

const http=require("http")
//this will displays all httpp methods (get,post,patch,put,optıons,header,delete) the basic ones 
//console.log(http.METHODS);
//thıs wıll displays all the status codes of http Ex: 404 :error , 200: ok etc .....
//console.log(http.STATUS_CODES);
//the data commıng ın they could be at any form bınary,obj ... 
//so to get these data with the req property we have to use middlewares
app
.get("/",(req,res)=>{
   // console.log(req.url)
    //console.log(req.headers);
  
  console.log(req.ip);
  console.log(req.hostname);
  console.log(req.method); //get
  console.log(req.protocol); //http /https
  console.log(req.path); // just the path part of the url
  console.log(req.subdomains); //  test.sales.example.com ['test','sales]

 console.log(req.query); // querystring
  //console.log(req.params); // /user/72  /product/234234
  // app.get("/user/:id")  app.get("/product/:id")
  // req.params.id
  res.status(404).end();
    //res.send("<h1>hello</h1>");//determıne the content-type automatıcally
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