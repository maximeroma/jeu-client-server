$(document).ready(function()
{
	
	var bestiole;
	var intervalID;


	// fonction générer un tableau dynamique

	function generateTable (line, col)
	{     
		for (var i = 0; i < line; i++) 
		{         
			$("#vue").append("<tr data-row='"+i+"'></tr>");           
			for (var j = 0;j  < col; j++) 
			{         
				$("#vue tr:last-child").append("<td width='10' height='10' data-id='"+i+"/"+j+"'>"+'&nbsp'+"</td>");         
			}     
		}		
	};   

	//fonction pour positionner une bestiole

	function positionBestiole (line, col, bestiole)
	{
		var y = Math.round(Math.random()*line);
		var x = Math.round(Math.random()*col);
		var target= $("#vue").find('[data-id="'+y+'/'+x+'"]');
		console.log(target);
		target.html(bestiole);
	}
	



	function getAjax ()
	{
		$.ajax(
		{
			url: 'http://localhost:3000/getEspece',
			type: 'get',
		})
		.done(function(data){
			console.log (data);
			bestiole = data;
			console.log (bestiole.type);
			positionBestiole (20,20, bestiole.type);		
		});	
	}

	function ajoutBestiole ()
	{
		intervalID = setInterval (getAjax, 1000);
	}

	generateTable (20, 20);
	ajoutBestiole();
	

});