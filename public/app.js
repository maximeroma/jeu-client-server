$(document).ready(function ()
{
	
	var bestiole;
	var intervalID;
	var count = 0;


	// fonction générer un tableau dynamique

	function generateTable (line, col)
	{     
		for (var i = 0; i < line; i++) 
		{         
			$("#vue").append("<tr></tr>");           
			for (var j = 0;j  < col; j++) 
			{         
				$("#vue tr:last-child").append("<td class='' width='10' height='10' data-id='"+i+"/"+j+"'>"+'&nbsp'+"</td>");         
			}     
		}		
	};   

	//fonction pour positionner une bestiole

	function positionBestiole (line, col, bestiole)
	{
		var i = Math.round(Math.random()*line);
		var j = Math.round(Math.random()*col);
		var target= $("#vue").find('[data-id="'+i+'/'+j+'"]');
		if ( target.attr('class') === '')
		{
			target.addClass(bestiole);
		}
	};
	

	function compteur () 
	{
		count++;
	}

	function ajouterAge (bestiole)
	{
		bestiole.viellir;
		//console.log(count);
	}



	// fonction pour faire une requete

	function getAjax ()
	{
		$.ajax(
		{
			url: 'http://localhost:3000/getEspece',
			type: 'get',
		})
		.done(function (data)
		{
			bestiole = data;
			positionBestiole (20, 20, bestiole.type);
			ajouterAge(bestiole)
			console.log(bestiole.age);
		});	
	};


	function ajoutBestiole ()
	{
		intervalID = setInterval (getAjax, 500);		
		console.log(count);
	}

	generateTable (20, 20);
	ajoutBestiole ();
	

});