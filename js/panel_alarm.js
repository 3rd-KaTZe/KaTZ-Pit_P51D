// --------------------------------------------------------------------
// Panel Alarme
// --------------------------------------------------------------------


function panel_alarm_update(KaTZPit_data){

	
	// Flag Divers regroup�es dans "Alarm_1"
	// 1- Start -- Bouton desactiv� dans l'UPdate 2014
	// 2- Master Warning
	// 3- Low Rpm
	// 4- Fire
	
	if (dataread_posit(KaTZPit_data["Alarm_1"],4) == 1) {$("#Alrm_Fire").fadeIn()} else {$("#Alrm_Fire").fadeOut()}
	if (dataread_posit(KaTZPit_data["Alarm_1"],3) == 1) {$("#Alrm_RPM").fadeIn()} else {$("#Alrm_RPM").fadeOut()}
	if (dataread_posit(KaTZPit_data["Alarm_1"],2) == 1) {$("#Alrm_Caution").fadeIn()} else {$("#Alrm_Caution").fadeOut()}
	
	// D�termination du chrono de d�marrage
	//var i_start = dataread_posit(KaTZPit_data["Alarm_1"],1)
	// Bouton demarrage desactiv�, utilisation de la valeur turbine � gaz > 0
	var i_start = dataread_split_2(KaTZPit_data["TorGas"])[0]
	
	// Si : D�marrage
	if (i_start > 1) {
		
		// Si : Passage d'arret � marche
		if (KaTZPit_data["Start_flag"] == 0) {
			// Fonction Chrono enregistre l'heure de mise en route
			Start_Chrono()
			// Allumage du voyant de d�marrage
			$("#Alrm_Start").fadeIn()
			// Initialisation du flag d�marrage
			KaTZPit_data["Start_flag"] = 1}
			
		// Incr�mentation du chrono de d�marrage (si on ne veur que compter le temps de mise en route
		//var i_chrono = KaTZPit_data["TimeMis"] - KaTZPit_data["Start_time"]
		//document.getElementById('Start_Chrono').innerHTML = time_format_1(i_chrono)	
		if (i_start > 400){$("#Alrm_Start").fadeOut()}
		
	} 
	
	else {
		// Extinction du chrono de d�marrage
		$("#Alrm_Start").fadeOut()
		if (KaTZPit_data["Start_flag"] == 1) {
			// Reset du flag d�marrage
			KaTZPit_data["Start_flag"] = 0}
	}
	
	// Incr�mentation du chrono de marche (on affiche le temps de marche moteur)
	var i_chrono = KaTZPit_data["TimeMis"] - KaTZPit_data["Start_time"]
	document.getElementById('Start_Chrono').innerHTML = time_format_1(i_chrono)
		
	}
	
	function Start_Chrono(){
	// Mise � zero du Chrono :  time d�part = time mission actuel
	KaTZPit_data["Start_time"] = KaTZPit_data["TimeMis"]
	
}











