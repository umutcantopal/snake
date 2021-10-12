function yiyecekUret(){
	var kontrol = true;
	do{
		var randomSatirNo = Math.floor(Math.random() * 10) + 1;
		var randomSutunNo = Math.floor(Math.random() * 22) + 1;

		var randomSatir = "satir"+randomSatirNo;
		var randomSutun = "sutun"+randomSutunNo;

		var yiyecek = [randomSatir, randomSutun];
		// console.log(kontrol);
		for(var i = 0;i < yilan.parcalar.length;i++)
		{
			if(yilan.parcalar[i][0] == yiyecek[0] && yilan.parcalar[i][1] == yiyecek[1])
			{
				kontrol  = false;
				break;
			}
			else
			{
				kontrol = true;
			}
		}
	}while(kontrol == false);


	if(kontrol == true)
	{
		yilan.yiyecek = yiyecek;
		document.querySelector(".kutu."+randomSatir+"."+randomSutun).classList.add("yiyecek");
	}
}

function bonusYiyecekUret(){
	var kontrol = true;
	do{
		var randomSatirNo = Math.floor(Math.random() * 10) + 1;
		var randomSutunNo = Math.floor(Math.random() * 22) + 1;

		var randomSatir1 = "satir"+randomSatirNo;
		var randomSutun1 = "sutun"+randomSutunNo;
		
		if(randomSatir1 != "satir10" && randomSutun1 != "sutun22")
		{
			var randomSatir2 = "satir"+(randomSatirNo+1);
			var randomSutun2 = "sutun"+randomSutunNo;
			
			var randomSatir3 = "satir"+randomSatirNo;
			var randomSutun3 = "sutun"+(randomSutunNo+1);
			
			var randomSatir4 = "satir"+(randomSatirNo+1);
			var randomSutun4 = "sutun"+(randomSutunNo+1);
			
			var bonusYiyecek = [
				[randomSatir1, randomSutun1],
				[randomSatir2, randomSutun2],
				[randomSatir3, randomSutun3],
				[randomSatir4, randomSutun4]
			];
			
			for(var i = 0;i < yilan.parcalar.length;i++)
			{
				for(var y = 0;y < bonusYiyecek.length;y++)
				{
					if(yilan.parcalar[i][0] == bonusYiyecek[y][0] && yilan.parcalar[i][1] == bonusYiyecek[y][1])
					{
						kontrol  = false;
						break;
					}
					else
					{
						kontrol = true;
					}
				}
				if(kontrol == false){break}
			}
		}
		else
		{
			kontrol = false;
		}
	}while(kontrol == false);
	
	if(kontrol == true)
	{
		yilan.bonusYiyecek = bonusYiyecek;
		
		for(var i = 0;i < 4;i++){
			document.querySelector(".kutu."+bonusYiyecek[i][0]+"."+bonusYiyecek[i][1]).classList.add("bonus-yiyecek");
		}
	}
}

function bonusYiyecekTimer(){
	// console.log(yilan.bonusYiyecekKalanZaman);
	var sayac = document.getElementById("sayac");
	
	if(yilan.bonusYiyecekKalanZaman == 1)
	{
		for(var i = 0;i < 4;i++)
		{
			document.querySelector(".kutu."+yilan.bonusYiyecek[i][0]+"."+yilan.bonusYiyecek[i][1]).classList.remove("bonus-yiyecek");
		}
		yilan.bonusYiyecek == [];
		sayac.style.display = "none";
		sayac.style.width = "374px";
		yilan.bonusYiyecekKalanZaman = 0;
	}
	else
	{
		sayac.style.display = "inline-block";
		
		var uzunluk = getComputedStyle(sayac).width;
		var uzunlukInt = uzunluk.split("px")[0];
		sayac.style.width = (uzunlukInt-17) + "px";
		
		yilan.bonusYiyecekKalanZaman -= 1;
	}
}