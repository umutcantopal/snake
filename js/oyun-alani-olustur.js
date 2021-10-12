// window.addEventListener("load",function(){
	oyunAlani = document.getElementById("container");
	
	for(var i = 1;i <= 220;i++)
	{
		oyunAlani.innerHTML += "<div class='kutu'></div>";
	}
	
	var kutular = document.getElementsByClassName("kutu");
	var kutularArray = [];
	for(var i = 0;i < 220;i++)
	{
		kutularArray.push(kutular[i]);
	}
	
	var kutularArrayBolunmus = [];
	
	for(var i = 0;i < 10;i++)
	{
		kutularArrayBolunmus[i] = kutularArray.splice(0,22);
	}
	
	// console.log(kutularArrayBolunmus);
	for(var i = 0;i < kutularArrayBolunmus.length;i++)
	{
		var satir = "satir"+(i+1);
		for(var y = 0;y < kutularArrayBolunmus[i].length;y++)
		{
			kutularArrayBolunmus[i][y].classList.add(satir);
			var sutun = "sutun"+(y+1);
			kutularArrayBolunmus[i][y].classList.add(sutun);
		}
	}
	
	oyunAlani.innerHTML += "<div id='puan-gosterge'></div>";
	oyunAlani.innerHTML += "<div id='sayac'></div>";
	
	// oyunAlani.innerHTML += "<div id='alt-panel'><div id='puan-gosterge'></div><div id='sayac'></div></div>";
	
	document.getElementById("sayac").style.display = "none";
	document.getElementById("puan-gosterge").innerText = "0";
// })