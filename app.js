var express = require("express");
var app = express();

app.set("view engine", 'jade');

app.use( express.static(__dirname+"/public") );
app.use( express.static(__dirname+"/views") );


app.get("/views/first", function(req, res, next){
	console.log("a");
	res.render("first.jade", {title:'first'});
})

app.get("/", function(req, res, next){
	res.render("first.jade", {title:'index'});
});


app.listen( process.env.port || 3000);