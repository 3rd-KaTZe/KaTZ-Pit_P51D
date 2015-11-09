// serverws.ip = "IP MACHINE DCS"; // défaut localhost
// serverws.port = "PORT";	// défaut 9000
// serverws.auto_connect = true;
// serverws.delay = 5000;

var mydata;
var obj;
var mytimer;
var my2timer;
var paneldata = new Array();
var Panel_On = {};
var KaTZPit_data = {};
var Plane_data = {};
var FL_data = {};
var RWY_data = {};
var Weapon_data={};
var Order_List = new Array();
var Cmd_Capot = {};
var CmdDelay;




window.onload = function(){

	// Chargement et indication de l'IP et Port
	// Sur le panel Emergency
	menu_connection(KaTZPit_data)

	// Initialisation des Panels affichés
	Panel_On = panel_On_init();
	menu_Toggle("Init")

}


function pit_main(){

	// Iteration Principale, fréquence fixée dans mytimer
	// Verification de DCS_Focus
	DCS_Focus_check(KaTZPit_data)
			
	// INSTRUMENT PANEL ------------------------------------------------
	
	// Mise à jour des cadrans des instruments de vol
	panel_instrument_flight(KaTZPit_data)
	
	// Mise à jour des cadrans des instruments moteur (RPM, Huile)
	panel_instrument_engine(KaTZPit_data)
	
	// Mise à jour des cadrans de données carburant (Fuel)
	panel_instrument_fuel(KaTZPit_data)
	
	// Mise à jours des éléments mécaniques
	panel_instrument_mechanic(KaTZPit_data)
	
	// Mise à jour des cadrans de service Hyd, O² , Elec
	panel_instrument_service(KaTZPit_data)
	
	
	//panel_instrument_electric(KaTZPit_data)
	
	// Mise à jour des alarmes
	//panel_alarm_update(KaTZPit_data)
	
	// Panel Target
	
	//if (Panel_On["Target"]==1){panel_target_update(KaTZPit_data)}	
	
	// PANEL DEMARRAGE ------------------------------------------------
	panel_engine_start(KaTZPit_data)
	
	// Panel Landing Light
	panel_landing_lights(KaTZPit_data)
		
	// SYSTEM PANEL ------------------------------------------------------
	
	// Lancement des subroutines en fonction des panneaux affichés dans le KaKZ_Pit
		
	//if (Panel_On["Start"]==1){
	//panel_engine_update(KaTZPit_data)
	//panel_hydraulic_update(KaTZPit_data)}
	
	if (Panel_On["Electric"]==1){panel_electric_system(KaTZPit_data)}
	
	if (Panel_On["Combat"]==1){panel_weapon_system(KaTZPit_data)}
	
	
	//if (Panel_On["Radio_360"]==1){panel_radio_update(KaTZPit_data)}
	
	if (Panel_On["Stick"]==1){panel_pilototo_input(KaTZPit_data)}
		
	CmdSend()
}



// Fonction appelée par appui sur le bouton KaTZ-Pit START
function Pit_Start(plane){
	// Demarrage du Panel par appui sur le bouton Start
	console.log("Demarrage Panel")

	// Initialisation des données KaTZ-Pit
	KaTZPit_data = paneldata_init();
	// Initialisation des données de position de pistes
	RWY_data = RWY_init();
		
	// Initialisation de la Radio
	//panel_radio_init(KaTZPit_data);

	// Affichage Initial
	pit_main();
	//paneldata_update(KaTZPit_data)

	// Lancement de la procédure de connection
	serverws_connect();

}








