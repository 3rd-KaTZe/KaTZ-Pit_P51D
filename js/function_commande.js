function CmdStack(Cmd){
	//console.log("Mise en Buffer de la commande ..", Cmd)
	Order_List.push(Cmd)
	//console.log("Buffer Size = ", Order_List.length)
	
}

function CmdSend(){
	//console.log("CmdSend, Position des Flags d'entrée",KaTZPit_data["Ordre1"],KaTZPit_data["Ordre2"],KaTZPit_data["PingBack"])
	//console.log(KaTZPit_data["Ordre1"])
	//console.log(KaTZPit_data["Ordre2"])
	//console.log(KaTZPit_data["PingBack"])
	// Les ordres en cours sont stocké dans l'array Order_List
	//if (KaTZPit_data["Ordre1"]==0 && KaTZPit_data["Ordre2"]==0 && KaTZPit_data["PingBack"]==0) {
		
		// Si la list des ordres en cours est non vide, on envoi l'ordre zero, et on décale la list vers le bas
		if (Order_List.length > 0) {
			//console.log("Envoi de la commande ..",Order_List[0])
			var nextorder = Order_List.shift()
			var typeordre = nextorder.substring(0,1)
			//console.log("Type Ordre ..",typeordre)
			// Envoi de l'ordre -------------------------------------------------->>>			
			serverws_send(nextorder)
			
			// Fonction flag desactivée avec KaTZ-Link_V3
			// Blockage des flags d'emission pour éviter l'overflow
			//if (typeordre==1){KaTZPit_data["Ordre1"]=1}
			//if (typeordre==2){KaTZPit_data["Ordre2"]=1}
			//if (typeordre>2){KaTZPit_data["PingBack"]=1}
			
			//console.log("CmdSend, Position des Flags de Sortie",KaTZPit_data["Ordre1"],KaTZPit_data["Ordre2"],KaTZPit_data["PingBack"])
						
		}			
	
}

function DCS_Focus() {
	
	// Commande de Controle de DCS (channel 1 + Valeur)
	var commande_DCS = "7=1"
	
	CmdStack(commande_DCS)
	console.log("Envoi au buffer de la commande ..", commande_DCS);
}


function CmdSioc(Val) {
	
	// Commande de Controle de DCS (channel 1 + Valeur)
	var commande_DCS = "1="+Val
	
	CmdStack(commande_DCS)
	console.log("Envoi au buffer de la commande ..", commande_DCS);
}

function CmdSiocDCS(Element) {

	// Commande de Controle de Sioc (channel 2 + Valeur)
	// Ceci concerne les commande DCS
	// La valeur est un nombre de 8 chiffres TDDBBBVV
	// DD est le Device
	// BBB est le numero du bouton
	// T est le type de bouton (1-Twowayswitch)
	// VV est la valeur renvoyée (qui sera multiplié dans le .lua
	
	var commande= $("#"+Element).data('internal-id')
	// var ele = document.getElementById(Element)
	// var commande = ele.data('internal-id')
	
		
	var commande_DCS = "2="+ commande
	CmdStack(commande_DCS)
	console.log("Envoi au buffer de la commande ..", commande_DCS);

}


// Fonction de commande des Switches avec un capot
function CmdSiocDCS2(Element) {

	//console.log(Element)
	var commande= $("#"+Element).data('internal-id')
	
	// On récupère la valeur de commande du capot correspondant au switch
	// Le tableau de correspondance est indiquée dans la fonction Cmd_Capot()
	var Capot = Cmd_Capot[Element]
	var CapotC = Capot - 1
	//console.log(Capot)
	
	// Une salve de Trois commandes est envoyé à DCS
	// Séquencage effectué par la fonction CmdStack()
	// Ouverture du Capot
	CmdDCSRaw(Capot)
		
	// Basculement de l'interrupteur
	CmdDCSRaw(commande)
	
	// Fermeture du capot
	CmdDCSRaw(CapotC)
		
}

function CmdDCSRaw(Cmd){

var commande_DCS = "2="+ Cmd
	CmdStack(commande_DCS)
	//console.log("Envoi au buffer de la commande ..", commande_DCS);


}

function CmdDCSRaw3(Cmd1,Cmd2,Cmd3){

	// Commande Triple (Capot)
	// On envoi CapotO, Bouton, CapotF

	var commande_DCS = "2="+ Cmd1
	CmdStack(commande_DCS)
	var commande_DCS = "2="+ Cmd2
	CmdStack(commande_DCS)
	var commande_DCS = "2="+ Cmd3
	CmdStack(commande_DCS)
	
	
	//console.log("Envoi au buffer de la commande ..", commande_DCS);
	


}

function CmdSiocSpe(Num, Val) {

	// Commande de Controle de Sioc (channel Num + Valeur)
	var commande_DCS = Num +"="+ Val
	CmdStack(commande_DCS)
	//console.log("Envoi au buffer de la commande ..", commande_DCS);

}

function Cmd_Capot_init(){

	// Pour chaque interrupteur, la commande capot est enregistrée
	console.log("Initialisation des données de switch")
	
	var Cmd_Capot = {
		"F-EEG-G":"10400200",
		"F-EEG-D":"10400400",
		"F-Vanne-G":"10200901",
		"F-Vanne-D":"10201001",
		"F-Vanne-APU":"10301100",
		"F-Vanne-X":"10201101",
		"E-Bat-SWG":"10200600",
		"E-Bat-SWD":"10200400",
		"E-Grnd-SWDC":"10200200",
		
								
	}
	
	return (Cmd_Capot);

}

function Door(){
	// Si porte cockpit ouverte on ferme, else on ouvre
	if (KaTZPit_data["Cockpit"]==1) {
		CmdDCSRaw('11701501')
		CmdDCSRaw('11701601')}
	else {
		CmdDCSRaw('11701500')
		CmdDCSRaw('11701600')}

}