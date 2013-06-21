javascript:
	/*	Immediately conducted code	*/
	alert("Firefox: ctrl + shift + K\nweitere Befehle / more commands: /cmd");
	
	/*	Activated EventListeners	*/
	/*	chat()-function loaded on chatevent	*/
	API.addEventListener(API.CHAT, chat);
	
	/*	chat()-function loaded on chatEvent	*/
	function chat(data)
	{
		var mes = data.message;
		switch(mes){
			case "/hello":
				alert("Hey! Let's party hard!");
				break;
			case "/cmd":
				text = cmd();
				API.sendChat(text);
				break;
			case "/halloween":
				text = halloween();
				API.sendChat(text);
				break;
			default:
				break;
		};
		/* given data
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
	
	/*	cmd() gives a link with a list of all commands	*/
	function cmd(){
		link = "https://github.com/Muryoutaisuu/djmury/blob/master/commands.md";
		return link;
	}
	
	/*	Instruction for halloween avatars	*/
	function halloween(){
		link = "http://pastebin.com/VN1W4pAd";
		return link;
	}
;
