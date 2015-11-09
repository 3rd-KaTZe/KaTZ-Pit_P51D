// function_convert_scale.js
// Script de convertion des échelles non linéaire en valeurs réelles
// Pour les données en échelle non linéaire
// la valeur dans KaTZ-Pit_Data est la valeur exporté (0-1000 , pour 0.0-1.0)
// On la transforme en valeur réelle pour les affichages numériques
// Pour l'animation de cadran, on utilise directement la valeur exportée
// Les formules de convertion utilisent les données de mainpanel_init.lua






function Vario_L(val){
	var i_vario
	
	//Variometer_L.input		= {-6000, -5000, -4000, -3000, -2000, -1000,1000,2000,3000,4000,5000,6000}
	//Variometer_L.output		= {-170, -150, -130, -107, -80, -45, 45, 80, 107, 130, 150, 170}
	// L Output est le nb de dergré de rotation de l'aiguille
	
	var valabs = Math.abs(val)
	
	if (valabs <= 100) {i_vario = valabs * 0.45} 
	if (valabs>100) {i_vario = 45 + 0.35 * (valabs - 100) }
	if (valabs>200) {i_vario = 80 + 0.27  * (valabs - 200) }
	if (valabs>300) {i_vario = 107 + 0.23  * (valabs - 300) }
	if (valabs>400) {i_vario = 130 + 0.2  * (valabs - 400) }
	if (valabs>600) {i_vario = 172}
	
	if (val ==0){i_vario = 0} else {i_vario = i_vario * val / valabs}
		
	return i_vario
		
}

function IAS_L(val){
	var i_ias
	
	//IAS_L.input				= {0, 60, 100, 300, 700}
	//IAS_L.output			= {0, 13, 42, 232, 340}
	// L Output est le nb de dergré de rotation de l'aiguille
	
	if (val<=60) {i_ias = val * 0.2} 
	if (val>60) {i_ias = 12 + 0.725 * (val - 60) }
	if (val>100) {i_ias = 42 + 0.95 * (val - 100) }
	if (val>300) {i_ias = 232 + 0.27 * (val - 300) }
	if (val>700) {i_ias = 342}
	
	return i_ias
	
}


// Inutilisé , Export en % Scale direct
function Fuel_Scale_Wing(val){
	var i_fuel
	
	//FuelScaleUpper.input		= {0.0, 5.0, 15.0, 30.0, 45.0, 60.0, 75.0, 92.0} -- US GAL
	//Fuel_Tank_Left.output		= {0.0, 0.2, 0.36, 0.52, 0.65, 0.77, 0.92, 1.0}
	// basé sur les données BS-mainpanel_init.lua , var n°62
	
	if (val<=20) {i_fuel = val * 1.75} 
	if (val>20) {i_fuel = 35 + 1.875 * (val - 20) }
	if (val>36) {i_fuel = 65 + 0.533 * (val - 36) }
	if (val>52) {i_fuel = 94 + 0.552 * (val - 52) }
	if (val>65) {i_fuel = 117 + 1.47 * (val - 65) }
	if (val>77) {i_fuel = 139 + 1.8 * (val - 77) }
	if (val>92) {i_fuel = 166 + 0.82 * (val - 92) }
	if (val>100) {i_fuel = 180}
		
	return i_fuel
	
}

// Inutilisé , Export en % Scale direct
function Fuel_Scale_Fuse(val){
	var i_fuel
	
	//FuelScaleUpper.input				= {0.0, 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 85.0} -- US GAL
	//Fuel_Tank_Fuselage.output		= {0.0, 0.12, 0.28, 0.40, 0.51, 0.62, 0.72,	0.83, 0.96, 1.0}
	// basé sur les données BS-mainpanel_init.lua , var n°62
	
	if (val<=10) {i_fuel = val * 2.2} 
	if (val>10) {i_fuel = 22 + 2.8 * (val - 10) }
	if (val>20) {i_fuel = 50 + 2.2 * (val - 20) }
	if (val>30) {i_fuel = 72 + 2 * (val - 30) }
	if (val>50) {i_fuel =  112 + 1.8 * (val - 50) }
	if (val>60) {i_fuel =  130 + 2 * (val - 60) }
	if (val>70) {i_fuel =  150 + 2.2 * (val - 70) }
	if (val>80) {i_fuel =  172 + 1.6 * (val - 80) }
	if (val>85) {i_fuel = 180}
		
	return i_fuel
		

	
}