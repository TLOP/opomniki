window.addEventListener('load', function() {
	
	
	
	//globalno rezerviran čas in imena opomnikov
	//var opomnik;
	//var cas;
	
	
	var dodajOpomnik = function (event){
		var ime =document.querySelector('#naziv_opomnika').value;
		var cass =document.querySelector('#cas_opomnika').value;
		document.querySelector('#naziv_opomnika').value="";
		document.querySelector('#cas_opomnika').value="";
		
		document.querySelector('#opomniki').innerHTML+="\
		<div class='opomnik'>\
		     <div class='naziv_opomnika'>" + ime + " </div>  <div class='cas_opomnika'> Opomnik čez <span>"  +  cass  +  "  </span> sekund.</div></div>";
		
	}
	
	
	
	
	
	
	
	
	document.querySelector('#dodajGumb').addEventListener('click', dodajOpomnik);
	
	//Pridobivanje imena uporabnika in prva vpisna stvar
	var izvediPrijavo = function(event){
		
		var uporabnik = document.querySelector('#uporabnisko_ime').value;
		
		document.querySelector('#uporabnik').innerHTML=uporabnik;
		
		document.querySelector('.pokrivalo').style.visibility="hidden";
	}
	
	
	document.querySelector('#prijavniGumb').addEventListener('click', izvediPrijavo);
	//var ime_uporabnika;
	
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	//če klikne si naj shrani ime in izgine
	/*document.getElementById('prijavniGumb').addEventListener('click',function(){
		ime_uporabnika=document.getElementById('uporabnisko_ime').innerHTML;
		document.getElementById('pokrivalo').style.display='false';
	})*/
	
});