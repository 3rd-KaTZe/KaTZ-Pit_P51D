// --------------------------------------------------------------------
// Panel Landing Lights
// --------------------------------------------------------------------

function panel_landing_lights(KaTZPit_data){
	// Voyant Train Atterissage dans "Train"
	// 1- Red Light
	// 2- Green Light
	
	
	
	
	// Lampe Landing Green
		if (dataread_posit(KaTZPit_data["Train"],2) ==1) {$("#Lnd_Lght_Green").attr('src','images/landing/P51D_landlight_greenon.png')} else {$("#Lnd_Lght_Green").attr('src','images/landing/P51D_landlight_greenoff.png')}
		
	// Lampe Landing Red
		if (dataread_posit(KaTZPit_data["Train"],1) ==1) {$("#Lnd_Lght_Red").attr('src','images/landing/P51D_landlight_redon.png')} else {$("#Lnd_Lght_Red").attr('src','images/landing/P51D_landlight_redoff.png')}



}













