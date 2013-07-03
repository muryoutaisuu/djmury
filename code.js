javascript:
	/*	Immediately conducted code	*/
	alert("Firefox: ctrl + shift + K\nweitere Befehle / more commands: /cmd");
	$('#button-vote-positive').click();
	
	/*	Activated EventListeners	*/
	/*	chat()-function loaded on chatevent	*/
	API.addEventListener(API.CHAT, chat);
	/*	nextDJ()-function loaded on DJChange-Event	*/
	API.addEventListener(API.DJ_ADVANCE, nextDJ);
	/*	scoreUpdate()-function loaded on Score-Update-Event	*/
	API.addEventListener(API.ROOM_SCORE_UPDATE, scoreUpdate);
	
	/*	initializing global variables	*/
	var gl_roomscore = API.getRoomScore();
	var gl_autowoot = true;
	console.info(gl_autowoot);
	
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
			case "/helloween":
				text = helloween();
				API.sendChat(text);
				break;
			default:
				break;
		}
	}
	
	/*	nextDJ()-function loaded on DJChange-Event	*/
	function nextDJ(obj){
		string = sendScore();
		/* API.sendChat(string); //*/
		console.info(string);
		window.gl_roomscore = API.getRoomScore();
		if (window.gl_autowoot){
			$('#button-vote-positive').click();
		}
	}
	
	/*	cmd() gives a link with a list of all commands	*/
	function cmd(){
		link = "https://github.com/Muryoutaisuu/djmury/blob/master/commands.md";
		return link;
	}
	
	/*	Instruction for helloween avatars	*/
	function helloween(){
		link = "http://pastebin.com/VN1W4pAd";
		return link;
	}
	
	/*	returns score of last song as a string	*/
	function sendScore(){
		var x = window.gl_roomscore;
		var pos = x.positive;
		var neg = x.negative;
		var cur = x.curates;
		var string = "/em pos: " + pos + ", neg: " + neg + ",  fav:" + cur + ".";
		return string;
	}
	
	function scoreUpdate(obj){
		window.gl_roomscore = obj;
	}
	
	/*	gets score from current song	*/
	function getScore(){
		return API.getRoomScore();
	}
	
	/*	switch autowoot	*/
	function switchAutowoot(){
		window.gl_autowoot = !window.gl_autowoot;
		if (window.gl_autowoot){
			console.info("You are wooting now.");
		} else {
			console.info("You aren't wooting anymore.");
		}
	}
;
