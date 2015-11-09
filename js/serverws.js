var serverws = {
	// IP + Port de la machine qui fait tourner le KaTZ-Link
	ip : "192.168.0.10",
	port : 9000,
	auto_connect : false,   //true,
	delay : 15000,
	socket : null
};
	
//var timer = null;

// Procedure de connection à la websocket
function serverws_connect(){

	console.log("Essai Connection " + serverws.ip + ":" + serverws.port);
	
	try {
        serverws.socket.close()
     } catch(exception) {}
    
	
	menu_connection_led(1) // voyant de connection orange
	
	var url = "ws://" + serverws.ip + ":" + serverws.port + "/";
	serverws.socket = new WebSocket(url);
	
	try {
		serverws.socket.onopen = function() {
			console.log("connection serveur démarrée")
			menu_connection_led(2) // voyant de connection vert
			serverws_Open();
		} 
		
		serverws.socket.onmessage = function(event) {
	    	//console.log("data received");
	    	// fonction dans panel.js
			serverws_Message(event);
		} 

		serverws.socket.onclose = function(){
			// fonction dans panel.js
			console.log("Deconnection du Serveur")
			menu_connection_led(0) // voyant de connection rouge
			serverws_Close();
			// Fonction de reconnection automatique
			//if(serverws.auto_connect){timer = setTimeout(serverws_connect,serverws.delay);}
		}

		serverws.socket.onerror = function(error){
			console.log("ERREUR connection serveur")
			menu_connection_led(0) // voyant de connection rouge
		}
	} 

	catch(exception) {
		 //console.log("ERREUR connection serveur exception")
		 // fonction dans panel.js
		 serverws_Error(exception);
	}
}

function serverws_Open(){
	// Lancement de la boucle de rafraichissement du KaTZ-Pit
	mytimer = setInterval(pit_main, 100);
}

function serverws_Message(event){

	received_msg = event.data

	// stockage du message sous forme d'objet
	var new_data = JSON.parse(received_msg)
	//console.log("message received",new_data);
	
	var dataref;
	
	// Transfert des données recues dans le tableau KaTZ-Pit_Data
	for (dataref in new_data){
		KaTZPit_data[dataref]=new_data[dataref]
		}
		
	// Si reception d'un Ping sur le canal 8, on répond sur le canal 7
	if (KaTZPit_data["Ping"] != KaTZPit_data["Ping_old"]){
		CmdSiocSpe(7, KaTZPit_data["Ping"])
		KaTZPit_data["Ping_old"] = KaTZPit_data["Ping"]
	}
		
}


function serverws_send(command){

	if(serverws.socket.readyState==1){
		serverws.socket.send(command);
		//console.log("Envoi de la commande _ module serverws_send ..", command);
	}
}

function serverws_Close(){
	// Arrêt de la boucle de rafraichissement du KaTZ-Pit
	clearInterval(mytimer);
}



