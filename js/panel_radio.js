// --------------------------------------------------------------------------------
// Panel Radio
// --------------------------------------------------------------------------------


function panel_radio_update(KaTZPit_data){

	// Gestion des valeurs affichées -----------------------------------------------
	// Retour de la fréquence sélectionnée par SIOC
	document.getElementById('R_Chan0').innerHTML = (KaTZPit_data["TS_Chan"] / 1000).toFixed(2)
	
}

function panel_radio_init(KaTZPit_data){
	if (KaTZPit_data["Radiotype"]=1) {radio_T1_update()}
	if (KaTZPit_data["Radiotype"]=2) {radio_T2_update()}
	document.getElementById('R_Chan1').innerHTML = (KaTZPit_data["Chan_1_main"] + KaTZPit_data["Chan_1_dec"] / 1000).toFixed(2)
	document.getElementById('R_Chan2').innerHTML = (KaTZPit_data["Chan_2_main"] + KaTZPit_data["Chan_2_dec"] / 1000).toFixed(2)
	document.getElementById('R_Chan3').innerHTML = (KaTZPit_data["Chan_3_main"] + KaTZPit_data["Chan_3_dec"] / 1000).toFixed(2)
	document.getElementById('R_Chan4').innerHTML = (KaTZPit_data["Chan_4_main"] + KaTZPit_data["Chan_4_dec"] / 1000).toFixed(2)
}

function radio_T1_update(){
	
	// Gestion des voyants ---------------------------------------------------------
	
	if (KaTZPit_data["Freq_main"] ==310) {$("#VR_310").fadeOut()} else {$("#VR_310").fadeIn()}
	if (KaTZPit_data["Freq_main"] ==320) {$("#VR_320").fadeOut()} else {$("#VR_320").fadeIn()}
	if (KaTZPit_data["Freq_main"] ==330) {$("#VR_330").fadeOut()} else {$("#VR_330").fadeIn()}
	if (KaTZPit_data["Freq_main"] ==340) {$("#VR_340").fadeOut()} else {$("#VR_340").fadeIn()}
	if (KaTZPit_data["Freq_main"] ==350) {$("#VR_350").fadeOut()} else {$("#VR_350").fadeIn()}
	if (KaTZPit_data["Freq_main"] ==360) {$("#VR_360").fadeOut()} else {$("#VR_360").fadeIn()}

	if (KaTZPit_data["Freq_sub"] == 0) {$("#VR_00").fadeOut()} else {$("#VR_00").fadeIn()}
	if (KaTZPit_data["Freq_sub"] == 100) {$("#VR_01").fadeOut()} else {$("#VR_01").fadeIn()}
	if (KaTZPit_data["Freq_sub"] == 200) {$("#VR_02").fadeOut()} else {$("#VR_02").fadeIn()}
	if (KaTZPit_data["Freq_sub"] == 300) {$("#VR_03").fadeOut()} else {$("#VR_03").fadeIn()}
	if (KaTZPit_data["Freq_sub"] == 400) {$("#VR_04").fadeOut()} else {$("#VR_04").fadeIn()}
	if (KaTZPit_data["Freq_sub"] == 500) {$("#VR_05").fadeOut()} else {$("#VR_05").fadeIn()}
}

function radio_T2_update(){
	
	// Gestion de l'affichage de la fréquence en cours de selection ---------------------------------------------------------
	// R_Hecto , R_Deca , R-Unit , R-Deci , R-Centi1 , R_Centi 2
	document.getElementById('R_Hecto').innerHTML = Math.floor(KaTZPit_data["Freq_main"] / 100)
	document.getElementById('R_Deca').innerHTML = Math.floor(KaTZPit_data["Freq_main"] % 100 / 10)
	document.getElementById('R_Unit').innerHTML = Math.floor(KaTZPit_data["Freq_main"] % 10)
	document.getElementById('R_Deci').innerHTML = Math.floor(KaTZPit_data["Freq_sub"] / 100)
	document.getElementById('R_Centi1').innerHTML = Math.floor(KaTZPit_data["Freq_sub"] %100 / 10)
	document.getElementById('R_Centi2').innerHTML = Math.floor(KaTZPit_data["Freq_sub"] %10)
			
}

function radio_switch(){

	// Active main fréquence unité (zero > 999)
	// Active sub fréquence decimal (zero > 999)
	// Envoi d'un ordre de changement de fréquence au KaTZ-Link
	// KaTZ_Link >> Cach3 , canal sioc = 4  -----------------------------------------------

	var message_Cach3 =  KaTZPit_data["Active_main"] *1000 + KaTZPit_data["Active_sub"]
	CmdSiocSpe(4,message_Cach3)
	
}

function radio_canal(canal){

	// Selection du canal actif -----------------------------------------------
	// Zero = Manuel , puis canal 1 à canal 4
	// Pression sur temoin lumineux
	KaTZPit_data["Active_chan"] = canal
	
	// On éteint tous les voyants (iamgeOff fadeIn)
	$("#VR_sel0").fadeIn()
	$("#VR_sel1").fadeIn()
	$("#VR_sel2").fadeIn()
	$("#VR_sel3").fadeIn()
	$("#VR_sel4").fadeIn()
	
	
	// Si Manuel mise à jour immédiate
	// Synchronisation de la fréquence Active
	// allumage du voyant (imageOff fadeOut)
	
	if (KaTZPit_data["Active_chan"]==0) {
		$("#VR_sel0").fadeOut()
		KaTZPit_data["Active_main"] = KaTZPit_data["Freq_main"]
		KaTZPit_data["Active_sub"] = KaTZPit_data["Freq_sub"]
	}
	
			
	if (KaTZPit_data["Active_chan"]==1) {
		$("#VR_sel1").fadeOut()
		KaTZPit_data["Active_main"] = KaTZPit_data["Chan_1_main"]
		KaTZPit_data["Active_sub"] = KaTZPit_data["Chan_1_dec"]
	}
	
		
	if (KaTZPit_data["Active_chan"]==2) {
		$("#VR_sel2").fadeOut()
		KaTZPit_data["Active_main"] = KaTZPit_data["Chan_2_main"]
		KaTZPit_data["Active_sub"] = KaTZPit_data["Chan_2_dec"]
	}	
		
	if (KaTZPit_data["Active_chan"]==3) {
		$("#VR_sel3").fadeOut()
		KaTZPit_data["Active_main"] = KaTZPit_data["Chan_3_main"]
		KaTZPit_data["Active_sub"] = KaTZPit_data["Chan_3_dec"]
	}	
		
	if (KaTZPit_data["Active_chan"]==4) {
		$("#VR_sel4").fadeOut()
		KaTZPit_data["Active_main"] = KaTZPit_data["Chan_4_main"]
		KaTZPit_data["Active_sub"] = KaTZPit_data["Chan_4_dec"]
	}
	
	// Ordre de switch envoyé à Cach3
	radio_switch()

}

function radio_freq_mem(mem){

	// Stockage de la valeur actuelle dans la mémoire de Chan
	// Pression des touches M1 à M4	
	if (mem == 1) {
		KaTZPit_data["Chan_1_main"] = KaTZPit_data["Freq_main"]
		KaTZPit_data["Chan_1_dec"] = KaTZPit_data["Freq_sub"]
		document.getElementById('R_Chan1').innerHTML = (KaTZPit_data["Chan_1_main"] + KaTZPit_data["Chan_1_dec"] / 1000).toFixed(2)
		if (KaTZPit_data["Active_chan"]==1) {
			KaTZPit_data["Active_main"] = KaTZPit_data["Freq_main"]
			KaTZPit_data["Active_sub"] = KaTZPit_data["Freq_sub"]
			radio_switch()
		}
	}

	if (mem == 2) {
		KaTZPit_data["Chan_2_main"] = KaTZPit_data["Freq_main"]
		KaTZPit_data["Chan_2_dec"] = KaTZPit_data["Freq_sub"]
		document.getElementById('R_Chan2').innerHTML = (KaTZPit_data["Chan_2_main"] + KaTZPit_data["Chan_2_dec"] / 1000).toFixed(2)
		if (KaTZPit_data["Active_chan"]==2) {
			KaTZPit_data["Active_main"] = KaTZPit_data["Freq_main"]
			KaTZPit_data["Active_sub"] = KaTZPit_data["Freq_sub"]
			radio_switch()
		}
	}
		
	if (mem == 3) {
		KaTZPit_data["Chan_3_main"] = KaTZPit_data["Freq_main"]
		KaTZPit_data["Chan_3_dec"] = KaTZPit_data["Freq_sub"]
		document.getElementById('R_Chan3').innerHTML = (KaTZPit_data["Chan_3_main"] + KaTZPit_data["Chan_3_dec"] / 1000).toFixed(2)
		if (KaTZPit_data["Active_chan"]==3) {
			KaTZPit_data["Active_main"] = KaTZPit_data["Freq_main"]
			KaTZPit_data["Active_sub"] = KaTZPit_data["Freq_sub"]
			radio_switch()
		}
	}
		
	if (mem == 4) {
		KaTZPit_data["Chan_4_main"] = KaTZPit_data["Freq_main"]
		KaTZPit_data["Chan_4_dec"] = KaTZPit_data["Freq_sub"]
		document.getElementById('R_Chan4').innerHTML = (KaTZPit_data["Chan_4_main"] + KaTZPit_data["Chan_4_dec"] / 1000).toFixed(2)
		if (KaTZPit_data["Active_chan"]==4) {
			KaTZPit_data["Active_main"] = KaTZPit_data["Freq_main"]
			KaTZPit_data["Active_sub"] = KaTZPit_data["Freq_sub"]
			radio_switch()
		}
	}
}


function radio_freq_deci(decimal){

	// Appelée depuis le pit.html (mapping des touches)
	// Selection de la fréquence décimale
	
	// Active sub fréquence decimal (zero > 999)

	// Mode 360 Pression des touches 0.0 à 0.5 'data = 0 à 5)
	if (Math.abs(decimal) < 10) {
	
		// La fréquence sub est la valeur envoyée à la fonction
		KaTZPit_data["Freq_sub"] = decimal * 100
	}
	
	else {
	// Mode Type 2 , Pression des touches +/- 0.100, 0.025
	// decimal vaut 25 ou 100
	// Lorsque l'on cycle sur 0.025, on ne modifie pas les 0.1
		var deci = Math.floor (KaTZPit_data["Freq_sub"] / 100) *100
		var centi = KaTZPit_data["Freq_sub"] % 100 
		
		// Incrément des 0.x
		if (Math.abs(decimal) == 100){
			deci = (1000 + deci + decimal) % 1000
		}
		// Incrément des 0.0x
		else {
			centi = (100 + centi + decimal) % 100
		}
	
		KaTZPit_data["Freq_sub"] = deci + centi
	}
	
	if (KaTZPit_data["Radiotype"]=1) {radio_T1_update()}
	if (KaTZPit_data["Radiotype"]=2) {radio_T2_update()}
	
	if (KaTZPit_data["Active_chan"]==0) {
		$("#VR_sel0").fadeOut()
		KaTZPit_data["Active_main"] = KaTZPit_data["Freq_main"]
		KaTZPit_data["Active_sub"] = KaTZPit_data["Freq_sub"]
		radio_switch()
	}
	

}


function radio_freq_unit(unite){
	// Selection de la fréquence unitaire 
	
	// Mode 360 Pression des touches 310-360 (data = 310 - 360)
	if (Math.abs(unite) > 300) {	
			// La fréquence est la valeur envoyée à la fonction
			KaTZPit_data["Freq_main"] = unite
	}
	
	// Mode Type 2, Pression des touches +/- 100, 10 , 1
	// Quand on cycle sur unité on passe au dizaine
	else {
		KaTZPit_data["Freq_main"] = KaTZPit_data["Freq_main"] + unite
	}
	
	if (KaTZPit_data["Radiotype"]=1) {radio_T1_update()}
	if (KaTZPit_data["Radiotype"]=2) {radio_T2_update()}
	
	if (KaTZPit_data["Active_chan"]==0) {
		$("#VR_sel0").fadeOut()
		KaTZPit_data["Active_main"] = KaTZPit_data["Freq_main"]
		KaTZPit_data["Active_sub"] = KaTZPit_data["Freq_sub"]
		radio_switch()
	}
		
}		



	
