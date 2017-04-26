
//-- Web Server

var express = require('express');
var app = express();
app.listen(3000);



//-- DB

var vegetal = { "type" : 'VE', };

var herbivore = { "type" : 'HE', };

var carnivore = { "type" : 'CA', };

var cailloux = { "type" : 'ROCK', }

var espece = [vegetal, herbivore, carnivore, cailloux];








//-- Routes



app.use(express.static('public'));




app.get('/getEspece', function(req, res){
	var obj = espece[Math.round(Math.random() * 3)];
	res.send( obj );
});










