// --------------------------------------------------------------------
// Panel Engine
// --------------------------------------------------------------------

function panel_engine_start(KaTZPit_data){
	// Flag Divers et Moteur regroupées dans "Eng_Flag"
	// 1- Primer
	// 2- Start Cover
	// 3- Start
	// 4- Oil Dilution
	// 5- Fuel Booster Pump
	// 6- Blower Light
	// 7- Charger Mode
	// 8- Charger Cover
	
	// Position Mode Turbo (High/Low/Auto)
		if (dataread_posit(KaTZPit_data["Eng_Flag"],7) ==-1) {$("#S_Charger").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["Eng_Flag"],7) ==1) {$("#S_Charger").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["Eng_Flag"],7) ==0) {$("#S_Charger").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Position Blower Cap
		if (dataread_posit(KaTZPit_data["Eng_Flag"],8) ==1) {$("#S_Charger_Cover").attr('src','images/start/P51D_Cover_Open.png')} else {$("#S_Charger_Cover").attr('src','images/start/P51D_Cover_Charger.png')}
	
	// Lampe High Turbo
		if (dataread_posit(KaTZPit_data["Eng_Flag"],6) ==1) {$("#S_Blower_Lght").attr('src','images/start/P51D_Blower_On.png')} else {$("#S_Blower_Lght").attr('src','images/start/P51D_Blower_Off.png')}

	// Fuel Booster Pump
		if (dataread_posit(KaTZPit_data["Eng_Flag"],5) ==1) {$("#S_Fuel").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#S_Fuel").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Oil Dilution
		if (dataread_posit(KaTZPit_data["Eng_Flag"],4) ==1) {$("#S_Oil").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#S_Oil").attr('src','images/switch/Switch-Metal-D4.png')}

	// Starter
		if (dataread_posit(KaTZPit_data["Eng_Flag"],2) ==1) {$("#S_Start").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#S_Start").attr('src','images/switch/Switch-Metal-D4.png')}


	// Starter Cap
		if (dataread_posit(KaTZPit_data["Eng_Flag"],3) ==1) {$("#S_Start_Cover").attr('src','images/start/P51D_Cover_Open.png')} else {$("#S_Start_Cover").attr('src','images/start/P51D_Cover_Charger.png')}
	
	// Primer
		if (dataread_posit(KaTZPit_data["Eng_Flag"],1) ==1) {$("#S_Primer").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#S_Primer").attr('src','images/switch/Switch-Metal-D4.png')}
	
	

}













