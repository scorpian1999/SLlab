const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("index1");
  });

app.get("/index2",function(req,res){
    res.render("index2");
  });

app.listen(3000,function(){
    console.log("Server on Port 3000 running")
});
