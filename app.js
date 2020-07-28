const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");  

var path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

app.set("views",path.resolve(__dirname,'views'));  
var gamePath = path.resolve(__dirname,'public');  

app.use(express.static(gamePath));  

app.use(bodyParser.urlencoded({extended:false}))  
   
app.get("/rock",function(req,res){
  res.render("rock" );
  } );
 var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Server started on port 3000");
});
module.exports = app;