// --------------------------------------------------------------------
// Connection Panel et Toggle Panel
// --------------------------------------------------------------------

function menu_connection(KaTZPit_data){
	
	// Affichage de l'Ip et du Port
	document.getElementById('IP_Host').innerHTML = serverws.ip
	document.getElementById('IP_Port').innerHTML = serverws.port
}

function menu_connection_led(flag){

	if (flag == 0) {$("#Led_Connect").attr("src","images/emergency/z_Led-Rouge.gif")}
	if (flag == 1) {$("#Led_Connect").attr("src","images/emergency/z_Led-Orange.gif")}
	if (flag == 2) {$("#Led_Connect").attr("src","images/emergency/z_Led-Verte.gif")}
	
}

function DCS_Focus_check(KaTZPit_data){
	if (KaTZPit_data["DCS_Focus"] ==2) {$("#Led_DCS").fadeIn()} else {$("#Led_DCS").fadeOut()}
}


function menu_Toggle(panel){
	
	// Toggle de la valeur du panel à changer 0>1 et 1>0
	Panel_On[panel] = (Panel_On[panel]+1) % 2
	console.log(panel," = ",Panel_On[panel])
	
	
	
	//if (Panel_On["Target"] == 0) {document.getElementById("Panel_Target").style.display = "none"}
	//else {document.getElementById("Panel_Target").style.display = "block"}
	
	// Panel Electric
	if (Panel_On["Electric"] == 0) {document.getElementById("Panel_Elec-Light").style.display = "none"}
	else {document.getElementById("Panel_Elec-Light").style.display = "block"}
	
	// Panel Engine
	if (Panel_On["Start"] == 0) {document.getElementById("Panel_Start").style.display = "none"}
	else {document.getElementById("Panel_Start").style.display = "block"}
	
	// Panel Fuel
	if (Panel_On["Fuel"] == 0) {document.getElementById("Panel_Fuel").style.display = "none"}
	else {document.getElementById("Panel_Fuel").style.display = "block"}
	
	if (Panel_On["Combat"] == 0) {document.getElementById("Panel_Weapon").style.display = "none"}
	else {document.getElementById("Panel_Weapon").style.display = "block"}
	

	// Afficheur de position commande
	if (Panel_On["Stick"] == 0) {
	document.getElementById("Panel_Stick").style.display = "none" ;
	//document.getElementById("Cadran_CDI").style.display = "block" ;	
	}
	else {
	document.getElementById("Panel_Stick").style.display = "block" ; 
	//document.getElementById("Cadran_CDI").style.display = "none" ;
	}

	//if (Panel_On["Doc"] == 0) {document.getElementById("Panel_Doc").style.display = "none"}
	//else {document.getElementById("Panel_Doc").style.display = "block"}

	

	
}	

function menu_Affiche(num){

	document.getElementById("Panel_Doc").style.display = "block"
	if (num == 1){$("#Doc_Affiche").attr("src","doc/Check_1.png")}
	if (num == 2){$("#Doc_Affiche").attr("src","doc/Check_2.png")}
	if (num == 3){$("#Doc_Affiche").attr("src","doc/Check_3.png")}
	if (num == 4){$("#Doc_Affiche").attr("src","doc/Check_4.png")}
	if (num == 5){$("#Doc_Affiche").attr("src","doc/Check_5.png")}
	
	if (num == 6){$("#Doc_Affiche").attr("src","doc/MisBrief_1.png")}
	if (num == 7){$("#Doc_Affiche").attr("src","doc/MisBrief_2.png")}
	
	if (num == 8){$("#Doc_Affiche").attr("src","doc/MisPhoto_1.png")}
	if (num == 9){$("#Doc_Affiche").attr("src","doc/MisPhoto_2.png")}
	
	if (num == 11){$("#Doc_Affiche").attr("src","doc/Nav_1.png")}
	if (num == 12){$("#Doc_Affiche").attr("src","doc/Nav_2.png")}
	if (num == 13){$("#Doc_Affiche").attr("src","doc/Nav_3.png")}
	if (num == 14){$("#Doc_Affiche").attr("src","doc/Nav_4.png")}
	if (num == 15){$("#Doc_Affiche").attr("src","doc/Nav_5.png")}
	
	if (num == 99) {document.getElementById("Panel_Doc").style.display = "none"}
	
}