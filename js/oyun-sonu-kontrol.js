function yilanBasKontrol(basSatir, basSutun){
	for(var i = 1;i < yilan.parcalar.length;i++){
		if(yilan.parcalar[i][0] == basSatir && yilan.parcalar[i][1] == basSutun)
		{
			var a = false;
			break;
		}
		else
		{
			var a = true;
		}
	}
	if(a == false)
	{
		clearInterval(yilan.hareketInterval);
		document.getElementById("mesaj-kutusu").style.display = "block";
		document.getElementById("puan-gosterge").innerText = "";
		document.getElementsByClassName("toplam-skor")[0].innerText = "Skor:" + yilan.puan;
			
		yilan.yon = "";
		yilan.yiyecek = [],
		yilan.zorluk = "";
		yilan.bonusYiyecekSayac = 0;
		yilan.bonusYiyecek = [];
		yilan.puan = 0;
		yilan.hareketInterval = "";
		yilan.sonHareketEdilenYon = "";
		yilan.bonusYiyecekKalanZaman = 0;
		yilan.parcalar = [];
		
		document.getElementById("sayac").style.display = "none";
		
		setTimeout(function(){
			document.getElementById("mesaj-kutusu").style.display = "none";
			document.getElementById("baslangic-ekrani").style.display = "block";
		},3000);
	}
}