function hareket(){
		var yilanYeniKonum = [];
		
		var satirNo = parseInt(yilan.parcalar[0][0].split("satir")[1]);
		var sutunNo = parseInt(yilan.parcalar[0][1].split("sutun")[1]);
		
		for(var i = 0;i < yilan.parcalar.length;i++)
		{
			document.querySelector(".kutu."+yilan.parcalar[i][0]+"."+yilan.parcalar[i][1]).classList.remove("yilan-parca");
		}
		
		switch(yilan.yon){//switch case ile yöne göre sadece yilanin başını, dizideki ilk elemanı, hareket ettiriyoruz
			case "sag":
				// satir ayni, sutun +1
				var yeniSutunNo = sutunNo + 1;
				
				if(yeniSutunNo > 22){
					yeniSutunNo = 1;
				}
				var yeniSatir = "satir"+(satirNo);
				var yeniSutun = "sutun"+yeniSutunNo;
				yilanYeniKonum.push([yeniSatir,yeniSutun]);
				yilanBasKontrol(yeniSatir, yeniSutun);
				break;
			
			case "sol":
				//satir ayni, sutun -1
				var yeniSutunNo = sutunNo - 1;
				if(yeniSutunNo < 1){
					yeniSutunNo = 22;
				}
				var yeniSatir = "satir"+(satirNo);
				var yeniSutun = "sutun"+yeniSutunNo;
				yilanYeniKonum.push([yeniSatir,yeniSutun]);
				yilanBasKontrol(yeniSatir, yeniSutun);
				break;
			
			case "yukari":
				//sutun ayni, satir -1
				var yeniSatirNo = satirNo - 1;
				if(yeniSatirNo < 1){
					yeniSatirNo = 10;
				}
				var yeniSatir = "satir"+yeniSatirNo;
				var yeniSutun = "sutun"+(sutunNo);
				yilanYeniKonum.push([yeniSatir,yeniSutun]);
				yilanBasKontrol(yeniSatir, yeniSutun);
				break;
			
			case "asagi":
				//sutun ayni, satir +1
				var yeniSatirNo = satirNo + 1;
				if(yeniSatirNo > 10){
					yeniSatirNo = 1;
				}
				var yeniSatir = "satir"+yeniSatirNo;
				var yeniSutun = "sutun"+(sutunNo);
				yilanYeniKonum.push([yeniSatir,yeniSutun]);
				yilanBasKontrol(yeniSatir, yeniSutun);
				break;
		}
		
		for(var i = 1;i < yilan.parcalar.length;i++) //yilan dizisindeki, her bir öndeki elemanın değerini bir arkasındaki elemana atamak için
		{
			var yeniSatir = yilan.parcalar[i - 1][0];
			var yeniSutun = yilan.parcalar[i - 1][1];
			yilanYeniKonum.push([yeniSatir,yeniSutun]);
		}
		
		yilan.parcalar = yilanYeniKonum;
		
		for(var i = 0;i < yilan.parcalar.length;i++)
		{
			document.querySelector(".kutu."+yilan.parcalar[i][0]+"."+yilan.parcalar[i][1]).classList.add("yilan-parca");
		}
		
		document.getElementById("puan-gosterge").innerText = yilan.puan;
		
		//
		yilan.sonHareketEdilenYon = yilan.yon;
		//yiyecekle alakalı kodlar
		if(yilan.bonusYiyecekKalanZaman > 0 && yilan.bonusYiyecek.length == 4)
		{
			bonusYiyecekTimer();
		}
		
		if(yilan.parcalar[0][0] == yilan.yiyecek[0] && yilan.parcalar[0][1] == yilan.yiyecek[1])
		{
			yilan.parcalar.push(yilan.yiyecek);
			yilan.puan += yilan.yiyecekPuan();
			clearInterval(yilan.hareketInterval);
			yilan.hareketInterval = setInterval(hareket,yilan.hiz(),yilan.yon);
			
			document.querySelector(".kutu."+yilan.yiyecek[0]+"."+yilan.yiyecek[1]).classList.remove("yiyecek");;
			yiyecekUret();
			
			if(yilan.bonusYiyecekSayac == 4)
			{
				bonusYiyecekUret();
				document.getElementById("sayac").style.width = "374px";
				yilan.bonusYiyecekKalanZaman = 22;//bir satırı toplam kaç saniyede geçebileceği süre
				yilan.bonusYiyecekSayac = 0;
			}
			else
			{
				yilan.bonusYiyecekSayac += 1;
			}
		}
		
		if(yilan.bonusYiyecek.length == 4)
		{
			for(var i = 0;i < yilan.bonusYiyecek.length;i++)
			{
				if(yilan.parcalar[0][0] == yilan.bonusYiyecek[i][0] && yilan.parcalar[0][1] == yilan.bonusYiyecek[i][1])
				{
					for(var a = 0;a < yilan.bonusYiyecek.length;a++)
					{
						document.querySelector(".kutu."+yilan.bonusYiyecek[a][0]+"."+yilan.bonusYiyecek[a][1]).classList.remove("bonus-yiyecek");
					}
					//bonus puan hesaplama : (kalan zaman * 4,54 * bonus puan) / 100
					var eklenecekBonusPuan = Math.floor((yilan.bonusYiyecekKalanZaman * 4.54 * yilan.bonusYiyecekPuan()) / 100);
					yilan.puan += eklenecekBonusPuan;
					document.getElementById("sayac").style.display = "none";
					document.getElementById("sayac").style.width = "374px";
					yilan.bonusYiyecek = [];
				}
			}
		}
		//yiyecekle alakalı kodlar
}