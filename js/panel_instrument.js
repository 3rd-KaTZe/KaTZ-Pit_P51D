// --------------------------------------------------------------------
// Panel Analogique du P-51D
// --------------------------------------------------------------------

// fonctions de gestion des instruments dans "instrument.js"

function panel_instrument_flight(KaTZPit_data){
	
		// Animation des jauges instrument de vol-------------------------------------------------------------------
		// Montre de Bord
		var hr = Math.floor(KaTZPit_data["Clock"] / 3600)
		var mn = Math.floor(KaTZPit_data["Clock"] % 3600 / 60)
		var sec = KaTZPit_data["Clock"] % 60
			
		instrument_Clock(hr,mn,sec)

		// Badin	
		instrument_Airspeed(IAS_L(KaTZPit_data["IAS"]))
				
		// Altimetre Baro , 2 aiguilles  -------------------------------------------------------------
		var QNH_Aig = dataread_split_2(KaTZPit_data["QNH"])
		instrument_Altitude(QNH_Aig[1],QNH_Aig[0])
		
		// Cadran Bille et Side Split  ---------------------------------------------------------------
		var SpeedSplit = dataread_split_2(KaTZPit_data["EUP"])
		instrument_Bille(SpeedSplit[1], SpeedSplit[0])
		
		// Rotation HSI   --------------------------------------------------------------------------
		//var i_Cap = 360 - KaTZPit_data["Cap"]/10  La rosace ne tourne pas sur le P51
		var i_Way = (KaTZPit_data["Way"]/10)
		var i_Route = (KaTZPit_data["Route"]/10)
		instrument_HSI(i_Way, i_Route)	
		
		
		// Valeur Compas   --------------------------------------------------------------------------
		var i_compas = (KaTZPit_data["Cap"]*0.36).toFixed(0)
		var a_compas = i_compas.toString()
		var l_compas = a_compas.length
		if (l_compas <2) {a_compas = "00" + a_compas}
		else if (l_compas < 3) {a_compas = "0" + a_compas}
		else { a_compas = a_compas}
				
		document.getElementById('Compas_Value').innerHTML = a_compas
				
			
		// ADI  -------------------------------------------------------------------------------------
		var ADI_Pitch = KaTZPit_data["Pitch"]
		
		// Calcul de variation de l'horizon artificiel range 0% à 100%
		var ADI_Pitch_A = Math.min(Math.max((ADI_Pitch + 1000) / 2000,0),1)
		
		document.getElementById('ADI_Pitch_V1').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
		document.getElementById('ADI_Pitch_V2').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
			
		instrument_ADI(SpeedSplit[0],KaTZPit_data["Bank"],ADI_Pitch_A)

		// Vario -------------------------------------------------------------------------------------
		instrument_Vario(Vario_L(KaTZPit_data["Vario"]))
		
		// G-Metre -------------------------------------------------------------------------------------
		instrument_GMetre(KaTZPit_data["Acc_G"])


}

		
		
function panel_instrument_engine(KaTZPit_data){

		//RPM Moteur -----------------------------------------------------------------------
		// Rotation de l'aiguille Moteur et de l'aiguille Rotor
		instrument_RPM(KaTZPit_data["RPM_Rot"])

		//Manifold Pressure -----------------------------------------------------------------------
		// Rotation du Manifold pressure
		instrument_Manifold(KaTZPit_data["Eng_rpm"])

		//Suction -----------------------------------------------------------------------
		// Rotation de la depression (suction)
		instrument_Suction(dataread_split_3(KaTZPit_data["Utility_1"])[0])

		//Paramètres Carb et Coolant Temperature
		// Variables : 204,Eng_Temp,1
		// Variables : 204,Eng_Temp,0
		instrument_Cool(dataread_split_2(KaTZPit_data["Eng_temp"])[0])
		instrument_Carb(dataread_split_2(KaTZPit_data["Eng_temp"])[1])
		
		//Animation du cadrans de Parametre Huile
		// Variables : 250,Eng_Oil_deg,1 + 260,Eng_Oil_pre,1 + 406,Fuel_2,0

		var EngOT = dataread_split_2(KaTZPit_data["Eng_Oil_deg"])[1]
		var EngOP = dataread_split_2(KaTZPit_data["Eng_Oil_pre"])[1]
		var FuelP = dataread_split_2(KaTZPit_data["Fuel_2"])[0]
		
		// Cadrans de la température d'huile moteur et Pression Fuel
		instrument_OilTemp(EngOT,EngOP,FuelP)
		

}

function panel_instrument_fuel(KaTZPit_data){

		// Variable : Fuel_1 (Export Direct du %age scale)
		var FuelL = (dataread_split_2(KaTZPit_data["Fuel_1"])[1])
		var FuelR = (dataread_split_2(KaTZPit_data["Fuel_1"])[0])
		var FuelF = (dataread_split_2(KaTZPit_data["Fuel_2"])[1])
		
		// Selecteur : CutOff et Tank
		var FuelCO = dataread_posit(KaTZPit_data["COff"],1)
		var FuelSel = dataread_posit(KaTZPit_data["COff"],2)
				
		// Cadrans Pression et Quantité Fuel
		instrument_Fuel(FuelL,FuelR,FuelF,FuelCO,FuelSel)
				
}

function panel_instrument_service(KaTZPit_data){

		//Hydraulic -----------------------------------------------------------------------
		var Amp = dataread_split_3(KaTZPit_data["Utility_2"])[1]
		var Hydro = dataread_split_3(KaTZPit_data["Utility_1"])[1]
		var Magneto = dataread_posit(KaTZPit_data["E_DC_SW"],3)
		
		//Oxygen -----------------------------------------------------------------------
		var O2Pres = dataread_split_3(KaTZPit_data["Utility_1"])[2]
		var O2Flow = dataread_split_3(KaTZPit_data["Utility_2"])[0]
		
		// Envoi au Panel Service
		instrument_service(Amp,Hydro,Magneto,O2Pres,O2Flow)
}

function panel_instrument_mechanic(KaTZPit_data){

		// Trim Pitch Echelle différente Piqué et Cabré
		var TrimP0 = dataread_split_3(KaTZPit_data["Trim"])[2]
		var TrimP = (TrimP0 / 10).toFixed(0) 
		
		if (TrimP0 < 0)
		{TrimP = Math.abs((TrimP0 * 0.25)).toFixed(0)
		document.getElementById('Trim_Pitch').innerHTML = TrimP + "°  TH"
		}
		
		if (TrimP0 >= 0)
		{TrimP = (TrimP0 * 0.1).toFixed(0)
		document.getElementById('Trim_Pitch').innerHTML = "NH "  + TrimP + "°"
		}
				
		// Trim Aileron, et Rudder -10° à 10°
		var TrimA = (dataread_split_3(KaTZPit_data["Trim"])[1]/10).toFixed(0)
		var TrimR = (dataread_split_3(KaTZPit_data["Trim"])[0]/10).toFixed(0)
		
		// Affichage des Trims Aileron et Rudder
		if (TrimA == 0 ){document.getElementById('Trim_Aileron').innerHTML = Math.abs(TrimA) + "°"}
		if (TrimA > 0 ){document.getElementById('Trim_Aileron').innerHTML = TrimA + "° >"}
		if (TrimA < 0 ){document.getElementById('Trim_Aileron').innerHTML = "< " + Math.abs(TrimA) + "°"}
		
		if (TrimR == 0 ){document.getElementById('Trim_Rudder').innerHTML = Math.abs(TrimR) + "°"}
		if (TrimR > 0 ){document.getElementById('Trim_Rudder').innerHTML = TrimR + "° >"}
		if (TrimR < 0 ){document.getElementById('Trim_Rudder').innerHTML = "< " + Math.abs(TrimR) + "°"}
		
		// Affichage Position Flaps
		instrument_Flaps(dataread_split_3(KaTZPit_data["Flaps_Pos"])[0])
	
		
}



