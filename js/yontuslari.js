document.addEventListener("keydown", keydownFonk);

function keydownFonk(e){
	// left = 37
	// up = 38
	// right = 39
	// down = 40
	
	var basilanTus = e.keyCode;
	var yeniYon;
	
	if(basilanTus == "37" || basilanTus == "38" || basilanTus == "39" || basilanTus == "40")
	{
		switch(basilanTus){
			case 37:
				if(yilan.yon == "sag" || yilan.sonHareketEdilenYon == "sag")
				{
					break;
				}
				else
				{
					yilan.yon = "sol";
				}
			break;
			
			case 38:
				if(yilan.yon == "asagi" || yilan.sonHareketEdilenYon == "asagi")
				{
					break;
				}
				else
				{
					yilan.yon = "yukari";
				}
			break;
			
			case 39:
				if(yilan.yon == "sol" || yilan.sonHareketEdilenYon == "sol")
				{
					break;
				}
				else
				{
					yilan.yon = "sag";
				}
			break;
			
			case 40:
				if(yilan.yon == "yukari" || yilan.sonHareketEdilenYon == "yukari")
				{
					break;
				}
				else
				{
					yilan.yon = "asagi";
				}
			break;
		}
	}
}