
//-- Web Server

var express = require('express');
var app = express();
app.listen(3000);



//-- DB

var vegetal = { "type" : 'VE',
				"age" : 0,
				"viellir" : function () {
					this.age= count++;
				},
			
};

var herbivore = { "type" : 'HE', 
					"age" : 0,
					"viellir" : function () {
						this.age = count++;
					},
};

var carnivore = { "type" : 'CA', 
					"age" : 0,
					"viellir" : function () {
						this.age = count++;
					},
};

var cailloux = { "type" : 'ROCK', 
					"age" : 0,
					"viellir" : function () {
					this.age= count++
					},
};

var espece = [vegetal, herbivore, carnivore, cailloux];








//-- Routes



app.use(express.static('public'));




app.get('/getEspece', function(req, res){
	var obj = espece[Math.round(Math.random() * 3)];
	res.send( obj );
});










