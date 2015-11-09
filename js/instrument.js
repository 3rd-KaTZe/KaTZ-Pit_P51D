// --------------------------------------------------------------------
// Fonction d'Animation des instruments
// --------------------------------------------------------------------

// Classé par ordre alpha

function instrument_ADI(bille,bank,pitch){
	var a_origine = 0
	var bi_gain = -0.02
	var ba_gain = -0.18
	
	var pitch_strech = 2 * pitch
	var pitch_origin = -160
	var pitch_gain = 320
	
	$("#ADI_Bille").css({
		'-moz-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
	})
	
	$("#ADI_Bank").css({
		'-moz-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
		'-ms-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
	})
	
	// expansion compression de la zone Top
	// Top Bleu Clair, on fixe l'origine du "scale down" en haut
	$("#ADI_Pitch_T").css({
	'-moz-transform-origin':'top left',
	'-webkit-transform-origin':'top left',
	'-ms-transform-origin':'top left',
	})

	// Scale vertical
	$("#ADI_Pitch_T").css({
	'-moz-transform':'scaleY('+pitch_strech+')',
	'-webkit-transform':'scaleY('+pitch_strech+')',
	'-ms-transform':'scaleY('+pitch_strech+')',
	})
	
	// Translation vers le bas , de la barre d'horizon
	
	$("#ADI_Pitch_C").css({
	'-moz-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	'-webkit-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	'-ms-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	})
}



	

	
function instrument_Airspeed(val){
	var a_origine = 0
	var l_gain = 1
	
	$("#AIG_Airspeed").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}



function instrument_Altitude(aig1000,aig){
	var a_origine = 0
	var l_gain = 0.360
	
	$("#AIG_Altitude").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*aig)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*aig)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*aig)+'deg)',
	})
	
	$("#AIG_Alti1000").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*aig1000)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*aig1000)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*aig1000)+'deg)',
	})
}


function instrument_Bille(aiguille,bille){
	
	var a_origine = 0
	var l_gain = 0.025
	var r_gain = -0.028
	
	$("#AIG_Bille").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
	})

	$("#Bille_Bille").css({
		'-moz-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
	})
}

function instrument_Cool(Cotemp){

	var e_origine = -70
	var e_gain = 0.13
	
	$("#AIG_Coolant").css({
		'-moz-transform':'rotate('+(e_origine+e_gain*Cotemp)+'deg)',
		'-webkit-transform':'rotate('+(e_origine+e_gain*Cotemp)+'deg)',
		'-ms-transform':'rotate('+(e_origine+e_gain*Cotemp)+'deg)',
	})
	
	

}

function instrument_Carb(Catemp){

	var e_origine = -70
	var e_gain = 0.13
	
	$("#AIG_Carb").css({
		'-moz-transform':'rotate('+(e_origine+e_gain*Catemp)+'deg)',
		'-webkit-transform':'rotate('+(e_origine+e_gain*Catemp)+'deg)',
		'-ms-transform':'rotate('+(e_origine+e_gain*Catemp)+'deg)',
	})
	
	

}

function instrument_Clock(hr,mn,sec){
	var a_origine = 0
	var h_gain = 30
	var m_gain = 6
	var s_gain = 6
	
	
	$("#AIG_Clock_hr").css({
		'-moz-transform':'rotate('+(a_origine+h_gain*hr)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+h_gain*hr)+'deg)',
		'-ms-transform':'rotate('+(a_origine+h_gain*hr)+'deg)',
	})

	$("#AIG_Clock_mn").css({
		'-moz-transform':'rotate('+(a_origine+m_gain*mn)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+m_gain*mn)+'deg)',
		'-ms-transform':'rotate('+(a_origine+m_gain*mn)+'deg)',
	})

	$("#AIG_Clock_sec").css({
		'-moz-transform':'rotate('+(a_origine+s_gain*sec)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+s_gain*sec)+'deg)',
		'-ms-transform':'rotate('+(a_origine+s_gain*sec)+'deg)',
	})
	
		
}



function instrument_Exhaust(temp){

	var e_origine = 80
	var e_gain = 0.26
	
	$("#AIG_Exhaust").css({
		'-moz-transform':'rotate('+(e_origine+e_gain*temp)+'deg)',
		'-webkit-transform':'rotate('+(e_origine+e_gain*temp)+'deg)',
		'-ms-transform':'rotate('+(e_origine+e_gain*temp)+'deg)',
	})
}

function instrument_Flaps(position){

	var origine_f = 102
	var gain_f = -0.85
	
	//console.log("flaps= ",position)
	
	if (position == 100){	
	$("#P_Flaps").css({
		'-moz-transform':'translate(0px,'+(-5)+'px)',
		'-webkit-transform':'translate(0px,'+(-5)+'px)',
		'-ms-transform':'translate(0px,'+(-5)+'px)',
	})
	}
	
	else {
	$("#P_Flaps").css({
		'-moz-transform':'translate(0px,'+(origine_f + gain_f * position)+'px)',
		'-webkit-transform':'translate(0px,'+(origine_f + gain_f * position)+'px)',
		'-ms-transform':'translate(0px,'+(origine_f + gain_f * position)+'px)',
	})
	}
}


function instrument_Fuel(left,right,fuse,cutoff,select){

	var origine_w = -90
	var gain_w = 1.80
	
	var origine_f = -90
	var gain_f = 1.80
	
	var origine_c = 0
	var gain_c = -100
		
	var origine_s = -45
	var gain_s = -67
	
	
	$("#F_AIG_Left").css({
		'-moz-transform':'rotate('+(origine_w+gain_w*left)+'deg)',
		'-webkit-transform':'rotate('+(origine_w+gain_w*left)+'deg)',
		'-ms-transform':'rotate('+(origine_w+gain_w*left)+'deg)',
	})
	
	$("#F_AIG_Right").css({
		'-moz-transform':'rotate('+(origine_w+gain_w*right)+'deg)',
		'-webkit-transform':'rotate('+(origine_w+gain_w*right)+'deg)',
		'-ms-transform':'rotate('+(origine_w+gain_w*right)+'deg)',
	})
	
	$("#F_AIG_Fuselage").css({
		'-moz-transform':'rotate('+(origine_f+gain_f*fuse)+'deg)',
		'-webkit-transform':'rotate('+(origine_f+gain_f*fuse)+'deg)',
		'-ms-transform':'rotate('+(origine_f+gain_f*fuse)+'deg)',
	})
	
	$("#F_CutOff").css({
		'-moz-transform':'translate(0px,'+(origine_c + gain_c * cutoff)+'px)',
		'-webkit-transform':'translate(0px,'+(origine_c + gain_c * cutoff)+'px)',
		'-ms-transform':'translate(0px,'+(origine_c + gain_c * cutoff)+'px)',
	})
	
	$("#F_Select").css({
		'-moz-transform':'rotate('+(origine_s+gain_s*select)+'deg)',
		'-webkit-transform':'rotate('+(origine_s+gain_s*select)+'deg)',
		'-ms-transform':'rotate('+(origine_s+gain_s*select)+'deg)',
	})
	

}



function instrument_Gas(gas){

	var g_origine = 0
	var g_gain = 0.27
	
	$("#AIG_Gas").css({
		'-moz-transform':'rotate('+(g_origine+g_gain*gas)+'deg)',
		'-webkit-transform':'rotate('+(g_origine+g_gain*gas)+'deg)',
		'-ms-transform':'rotate('+(g_origine+g_gain*gas)+'deg)',
	})
}

function instrument_GMetre(ge){

	var a_origine = -95
	var a_gain = 3.33
	
	$("#AIG_GMetre").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*ge)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*ge)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*ge)+'deg)',
	})
}

function instrument_HSI(way,route){
	var a_origine = 0
	var a_gain = 1

	$("#AN_Way").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
	})

	$("#AN_Route").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
	})
}

function instrument_Manifold(pre){
		
	var t_origine = -107
	var t_gain = 0.345
	
	$("#AIG_Manifold").css({
		'-moz-transform':'rotate('+ (t_origine + t_gain * pre)+'deg)',
		'-webkit-transform':'rotate('+ (t_origine + t_gain * pre)+'deg)',
		'-ms-transform':'rotate('+ (t_origine + t_gain * pre)+'deg)',
	})
}


function instrument_OilPress(Epress,Tpress){

	var origine_1 = 70
	var gain_1 = 0.25
	
	var origine_2 = 160
	var gain_2 = 0.25
	
	$("#AIG_EngP").css({
		'-moz-transform':'rotate('+(origine_1+gain_1*Epress)+'deg)',
		'-webkit-transform':'rotate('+(origine_1+gain_1*Epress)+'deg)',
		'-ms-transform':'rotate('+(origine_1+gain_1*Epress)+'deg)',
	})
	
	$("#AIG_TraP").css({
		'-moz-transform':'rotate('+(origine_2+gain_2*Tpress)+'deg)',
		'-webkit-transform':'rotate('+(origine_2+gain_2*Tpress)+'deg)',
		'-ms-transform':'rotate('+(origine_2+gain_2*Tpress)+'deg)',
	})

}


function instrument_OilTemp(EOT,EOP,FP){

	var e_origine = -90
	var e_gain = 0.18

	var t_origine = 180
	
	var f_origine = 180
	var f_gain = -0.18
	
	
	$("#AIG_OilTemp").css({
		'-moz-transform':'rotate('+(e_origine+e_gain*EOT)+'deg)',
		'-webkit-transform':'rotate('+(e_origine+e_gain*EOT)+'deg)',
		'-ms-transform':'rotate('+(e_origine+e_gain*EOT)+'deg)',
	})

	$("#AIG_OilPress").css({
		'-moz-transform':'rotate('+(t_origine+e_gain*EOP)+'deg)',
		'-webkit-transform':'rotate('+(t_origine+e_gain*EOP)+'deg)',
		'-ms-transform':'rotate('+(t_origine+e_gain*EOP)+'deg)',
	})
	
	$("#AIG_FuelPress").css({
		'-moz-transform':'rotate('+(f_origine+f_gain*FP)+'deg)',
		'-webkit-transform':'rotate('+(f_origine+f_gain*FP)+'deg)',
		'-ms-transform':'rotate('+(f_origine+f_gain*FP)+'deg)',
	})
	
	
	

}

function instrument_Pitch(val){
	var a_origine = 255
	var l_gain = 0.21
	
	$("#AIG_Pitch").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}


// Rotation des aiguilles moteurs (left, right), avions Russes
// Le gain est ajusté pour faire correspondre 
// le placement de l'aiguille avec la valeur exacte

function instrument_RPM(eng){
	var a_origine = -163
	
	var l_gain = 0.326
		
	$("#AIG_RPM_Eng").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*eng)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*eng)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*eng)+'deg)',
	})
	
}	

function instrument_service(Amp,Hydro,Magneto,O2Pres,O2Flow){

	var origine_a = -45
	var gain_a = 0.90
	
	var origine_h = -90
	var gain_h = 1.80
	
	var origine_o = -90
	var gain_o = 1.80
		
	var origine_m = 130
	var gain_m = 33
	
	var O2Flow_strech = 0.01 * O2Flow
	
	
	$("#S_AIG_Amp").css({
		'-moz-transform':'rotate('+(origine_a+gain_a*Amp)+'deg)',
		'-webkit-transform':'rotate('+(origine_a+gain_a*Amp)+'deg)',
		'-ms-transform':'rotate('+(origine_a+gain_a*Amp)+'deg)',
	})
	
	$("#S_AIG_Hyd").css({
		'-moz-transform':'rotate('+(origine_h+gain_h*Hydro)+'deg)',
		'-webkit-transform':'rotate('+(origine_h+gain_h*Hydro)+'deg)',
		'-ms-transform':'rotate('+(origine_h+gain_h*Hydro)+'deg)',
	})
	
	$("#S_AIG_Oxy").css({
		'-moz-transform':'rotate('+(origine_o+gain_o*O2Pres)+'deg)',
		'-webkit-transform':'rotate('+(origine_o+gain_o*O2Pres)+'deg)',
		'-ms-transform':'rotate('+(origine_o+gain_o*O2Pres)+'deg)',
	})
	
	$("#S_Magneto").css({
		'-moz-transform':'rotate('+(origine_m+gain_m*Magneto)+'deg)',
		'-webkit-transform':'rotate('+(origine_m+gain_m*Magneto)+'deg)',
		'-ms-transform':'rotate('+(origine_m+gain_m*Magneto)+'deg)',
	})
	
	// expansion compression de la zone Top
	// Top Bleu Clair, on fixe l'origine du "scale down" en haut
	$("#S_Blink1").css({
	'-moz-transform-origin':'top left',
	'-webkit-transform-origin':'top left',
	'-ms-transform-origin':'top left',
	})

	// Scale vertical
	$("#S_Blink1").css({
	'-moz-transform':'scaleY('+O2Flow_strech+')',
	'-webkit-transform':'scaleY('+O2Flow_strech+')',
	'-ms-transform':'scaleY('+O2Flow_strech+')',
	})
		
	// expansion compression de la zone Bottom
	// Top Bleu Clair, on fixe l'origine du "scale down" en bas
	$("#S_Blink2").css({
	'-moz-transform-origin':'bottom left',
	'-webkit-transform-origin':'bottom left',
	'-ms-transform-origin':'bottom left',
	})

	// Scale vertical
	$("#S_Blink2").css({
	'-moz-transform':'scaleY('+O2Flow_strech+')',
	'-webkit-transform':'scaleY('+O2Flow_strech+')',
	'-ms-transform':'scaleY('+O2Flow_strech+')',
	})

}


function instrument_Suction(Suc){

	var e_origine = -150
	var e_gain = 3
	
	$("#AIG_Suction").css({
		'-moz-transform':'rotate('+(e_origine+e_gain*Suc)+'deg)',
		'-webkit-transform':'rotate('+(e_origine+e_gain*Suc)+'deg)',
		'-ms-transform':'rotate('+(e_origine+e_gain*Suc)+'deg)',
	})

}

function instrument_Vario(val){
	
	var a_origine = -90
	var l_gain = 1
	
	$("#AIG_Vario").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}

function instrument_Volt(ac,dc){

	var origine_1 = -50
	var gain_1 = 0.12
	
	var origine_2 = -60
	var gain_2 = 0.14
	
	$("#AIG_VoltAC").css({
		'-moz-transform':'rotate('+(origine_1+gain_1*ac)+'deg)',
		'-webkit-transform':'rotate('+(origine_1+gain_1*ac)+'deg)',
		'-ms-transform':'rotate('+(origine_1+gain_1*ac)+'deg)',
	})
	
	$("#AIG_VoltDC").css({
		'-moz-transform':'rotate('+(origine_2+gain_2*dc)+'deg)',
		'-webkit-transform':'rotate('+(origine_2+gain_2*dc)+'deg)',
		'-ms-transform':'rotate('+(origine_2+gain_2*dc)+'deg)',
	})

}













	
