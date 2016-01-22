var express = require("express");
var app = express();

app.set("view engine", 'jade');

app.use(require('stylus').middleware( __dirname+'/public')); //stylus
app.use( express.static(__dirname+"/public") ); //public folder
app.use( express.static(__dirname+"/views") ); //views

//routes for ui-router to work
app.get("/views/first", function(req, res, next){
	res.render("first.jade");
});
app.get("/views/second", function(req, res, next){
	res.render("second.jade");
});
app.get("/", function(req, res, next){
	res.render("layout.jade", {title:'index'});
});

//fires app on port
app.listen( process.env.port || 3000);

module.exports = app;