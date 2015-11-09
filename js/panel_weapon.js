// --------------------------------------------------------------------
// Panel Systèmes d'armement
// --------------------------------------------------------------------
// Lecture donnée multiposition : dataread_posit(KaTZPit_data["NomdelaData"],6)
// Lecture donnée analogique double : dataread_split_2(KaTZPit_data["NomdelaData"])[0] ou [1]




function panel_weapon_system(KaTZPit_data){

		// Données Switch Weapon dans KaTZPit_data["Wpn_SW_1"]
		// 6 - Selction Rocket Bomb
		// 5 - Left Bomb
		// 4 - Right Bomb
		// 3 - Rocket Off/Single/Auto
		// 2 - Rocket Delay
		// 1 - Gun Mode

		
		
		// Position Master et Train/Both
		var Wpn_Master = dataread_posit(KaTZPit_data["Wpn_SW_1"],6)
		if (Wpn_Master ==3) {$("#W_Rock_Bmb").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (Wpn_Master ==0) {$("#W_Rock_Bmb").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (Wpn_Master ==1) {
		$("#W_Rock_Bmb").attr('src','images/switch/Switch-Metal-D4.png')
		$("#W_Train").attr('src','images/switch/Switch-Metal-U4.png')}
		if (Wpn_Master ==2) {
		$("#W_Rock_Bmb").attr('src','images/switch/Switch-Metal-D4.png')
		$("#W_Train").attr('src','images/switch/Switch-Metal-D4.png')}		
		
		// Position Left Bomb
		var Bmb_Left = dataread_posit(KaTZPit_data["Wpn_SW_1"],5)
		if (Bmb_Left ==1) {$("#W_Left").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (Bmb_Left ==0) {$("#W_Left").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (Bmb_Left ==-1) {$("#W_Left").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Position Right Bomb
		var Bmb_Right = dataread_posit(KaTZPit_data["Wpn_SW_1"],4)
		if (Bmb_Right ==1) {$("#W_Right").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (Bmb_Right ==0) {$("#W_Right").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (Bmb_Right ==-1) {$("#W_Right").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Position Rocket Auto
		var WpnRocket  = dataread_posit(KaTZPit_data["Wpn_SW_1"],3)
		if (WpnRocket  == 1) {$("#W_Single_Auto").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (WpnRocket  == 0) {$("#W_Single_Auto").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (WpnRocket  == 2) {$("#W_Single_Auto").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Position Rocket Delay
		if (dataread_posit(KaTZPit_data["Wpn_SW_1"],2) ==1) {$("#W_Delay").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#W_Delay").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Position Gun Select
		var Wpn_Gun = dataread_posit(KaTZPit_data["Wpn_SW_1"],1)
		if (Wpn_Gun ==1) {$("#W_Gun").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (Wpn_Gun ==0) {$("#W_Gun").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (Wpn_Gun ==-1) {$("#W_Gun").attr('src','images/switch/Switch-Metal-D4.png')}
		
		
		// Conpteur de Rocket
		Rock = KaTZPit_data["Wpn_Ammo"]* 0.011 + 1
		document.getElementById('RockCounter').innerHTML = Rock.toFixed(0)
		
		

}

	
	


