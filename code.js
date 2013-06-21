javascript:
/*	-- Anleitung --
	1.	Den Code unten in ein Lesezeichen kopieren.
	2.	plug.dj öffnen, einloggen und einen Raum wählen
	3.	Auf das Lesezeichen klicken und los gehts!
	4.	mit /cmd alle Commands ausgeben
	
	1.	Copy the code into a bookmark
	2.	open plug.dj, login and choose a room
	3.	click on the bookmark and let's party hard!
	4.	/cmd shows all commands
*/

/*	-- Code --	*/
	/*	Sofort ausgeführter Code
		Immediately conducted code
	*/
	alert("Firefox: ctrl + shift + K\nweitere Befehle / more commands: /cmd");
	
	/*	Aktivierte EventListeners
		Activated EventListeners
	*/
	/*	Funktion chat() wird bei einem neuen Chateintrag gestartet
		chat()-function loaded on chatevent
	*/
	API.addEventListener(API.CHAT, chat);
	
	/*	chat()-Funktion wird von ChatEvent gestartet
		chat()-function loaded on chatevent
	*/
	function chat(data)
	{
		var mes = data.message;
		switch(mes){
			case "/hello":
				alert("Hey! Let's party hard!");
				break;
			case "/cmd":
				cmd();
				break;
			case "/halloween":
				halloween();
				break;
			default:
				break;
		};
		/* Form der übertragenen Daten -- given data
		data.type
		// "message", "emote", "moderation", "system"
		data.from
		// the username of the person
		data.fromID
		// the user id of the person
		data.message
		// the chat message
		data.language
		// the two character code of the incoming language
		//*/
	}
	
	/*	Die Funktion cmd() gibt einen link zu allen Befehlen aus
		cmd() gives a link with a list of all commands
	*/
	function cmd(){
		link = "http://pastebin.com/ScMuWALX";
		API.sendChat(link);
	}
	
	/*	Die Funktion halloween() gibt eine Anleitung für die Halloween Charaktere aus
		Instruction vor halloween avatars
	*/
	function halloween(){
		API.sendChat("http://pastebin.com/VN1W4pAd");
	}
;
