// --------------------------------------------------------------------
// Panel Hydraulic
// --------------------------------------------------------------------


function panel_hydraulic_update(KaTZPit_data){
	// Flag Divers et Moteur regroupées dans "Eng_Flag"
	// 1- Start Button
	// 2- Force Trim
	// 3- Hydro
	// 4- Lowrpm
	// 5- Fuel
	// 6- Gov Auto
	// 7- DeIce
	
	if (dataread_posit(KaTZPit_data["Eng_Flag"],2) ==1) {$("#HYD-Force").attr('src','images/Switch-Metal-U2.gif')} else {$("#HYD-Force").attr('src','images/Switch-Metal-D2.gif')}
	if (dataread_posit(KaTZPit_data["Eng_Flag"],3) ==1) {$("#HYD-Cont").attr('src','images/Switch-Metal-U2.gif')} else {$("#HYD-Cont").attr('src','images/Switch-Metal-D2.gif')}
	
}











