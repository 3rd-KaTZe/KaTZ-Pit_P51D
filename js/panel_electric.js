// --------------------------------------------------------------------
// Panel Electric
// --------------------------------------------------------------------

function panel_electric_system(KaTZPit_data){


	// Toutes les données regroupées dans "E_DC_SW"
	// 1- Switch Generator
	// 2- Switch Battery
	// 3- Non Utilisé
	// 4- Switch Gun Heat 
	// 5- Switch Pitot Heat
	// 6- Non Utilisé
	// 7- Switch Wing Light
	// 8- Switch Tail Light
	
		
	// Switch Gen, Batterie (On/Off)
		if (dataread_posit(KaTZPit_data["E_DC_SW"],1) ==1) {$("#E_Gen").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_Gen").attr('src','images/switch/Switch-Metal-D4.png')}
		if (dataread_posit(KaTZPit_data["E_DC_SW"],2) ==1) {$("#E_Batt").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_Batt").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Gun / Pitot Heat (On/Off)
		if (dataread_posit(KaTZPit_data["E_DC_SW"],4) ==1) {$("#E_GunH").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_GunH").attr('src','images/switch/Switch-Metal-D4.png')}
		if (dataread_posit(KaTZPit_data["E_DC_SW"],5) ==1) {$("#E_PitotH").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_PitotH").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Position Light Wing/Tail (Bright/OFF/Dim)
		if (dataread_posit(KaTZPit_data["E_DC_SW"],6) ==1) {$("#E_Wing_Light").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],6) ==0) {$("#E_Wing_Light").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],6) ==-1) {$("#E_Wing_Light").attr('src','images/switch/Switch-Metal-D4.png')}
	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],7) ==1) {$("#E_Tail_Light").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],7) ==0) {$("#E_Tail_Light").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],7) ==-1) {$("#E_Tail_Light").attr('src','images/switch/Switch-Metal-D4.png')}
		
	// Langing Light (On/Off)
		if (dataread_posit(KaTZPit_data["E_DC_SW"],8) ==1) {$("#E_Landing_Light").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_Landing_Light").attr('src','images/switch/Switch-Metal-D4.png')}

	
}

function switch_ACVolt(ac){
	var a_origine = -45
	var a_gain = 45
	
	$("#ELEC-AC-Volt").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*ac)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*ac)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*ac)+'deg)',
	})

}

function switch_DCVolt(dc){
	var d_origine = -90
	var d_gain = 45
	
	$("#ELEC-DC-Volt").css({
		'-moz-transform':'rotate('+(d_origine+d_gain*dc)+'deg)',
		'-webkit-transform':'rotate('+(d_origine+d_gain*dc)+'deg)',
		'-ms-transform':'rotate('+(d_origine+d_gain*dc)+'deg)',
	})

}
