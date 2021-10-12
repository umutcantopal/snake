var yilan = {
	yon : "",
	yiyecek : [],
	zorluk : "",
	bonusYiyecekSayac : 0,
	bonusYiyecek : [],
	puan : 0,
	hiz : function(){
		switch(this.zorluk){
			case "kolay":
			var a = (300 - (this.parcalar.length - 3));
			if(a < 30) //minimum 30 milisaniye
			{
				return 30;
			}
			else
			{
				return a;
			}
			
			case "orta":
			var a = (200 - (this.parcalar.length - 3));
			if(a < 30)
			{
				return 30;
			}
			else
			{
				return a;
			}
			
			case "zor":
			var a = (100 - (this.parcalar.length - 3));
			if(a < 30)
			{
				return 30;
			}
			else
			{
				return a;
			}
		}
	},
	hareketInterval : "",
	sonHareketEdilenYon : "",
	yiyecekPuan : function(){
		switch(this.zorluk){
			case "kolay":
			return 4;
			
			case "orta":
			return 6;
			
			case "zor":
			return 8;
		}
	},
	bonusYiyecekPuan : function(){
		switch(this.zorluk){
			case "kolay":
			return 400;
			
			case "orta":
			return 600;
			
			case "zor":
			return 800;
		}
	},
	bonusYiyecekKalanZaman : 0,
	parcalar: []
};

document.getElementById("mesaj-kutusu").style.display = "none";

for(var i = 0;i < yilan.length;i++)
{
	var yilanParca = document.querySelector(".kutu."+yilan.parcalar[i][0]+"."+yilan.parcalar[i][1]);
	yilanParca.classList.add("yilan-parca");
}

var baslatButon = document.getElementById("oyun-baslat-buton");
var zorlukAyarButonlar = document.getElementsByClassName("zorluk");
var secilizorluk = document.getElementsByClassName("secilizorluk");

baslatButon.addEventListener("click", oyunBaslatFonk);
for(var i = 0;i< zorlukAyarButonlar.length;i++)
{
	zorlukAyarButonlar[i].addEventListener("click", zorlukDegistirFonk);
}

function oyunBaslatFonk(){
	var kutu = document.getElementsByClassName("kutu");
	for(var i = 0;i < kutu.length;i++)//önceki oyundan kalanları temizlemek için
	{
		kutu[i].classList.remove("yilan-parca");
		kutu[i].classList.remove("yiyecek");
		kutu[i].classList.remove("bonus-yiyecek");
	}
	
	yilan.zorluk = secilizorluk[0].getAttribute("zorluk");
	yiyecekUret();
	yilan.hareketInterval = setInterval(hareket,yilan.hiz());
	document.getElementById("baslangic-ekrani").style.display = "none";
	
	yilanAyarla(secilizorluk[0].getAttribute("zorluk"));
}

function zorlukDegistirFonk(e){
	for(var i = 0;i< zorlukAyarButonlar.length;i++)
	{
		zorlukAyarButonlar[i].classList.remove("secilizorluk");
	}
	e.target.classList.add("secilizorluk");
}

function yilanAyarla(zorluk){
	yilan.yon = "sag";
	yilan.zorluk = zorluk;
	yilan.parcalar = [
		["satir5","sutun11"],
		["satir5","sutun10"],
		["satir5","sutun9"],
	];
}







