	/**	Immediately conducted code	*/
	
	/*	this line will do an alert, in which the most important informations are given to the users	*/
	alert("Firefox: ctrl + shift + K\nweitere Befehle / more commands: /cmd\nPlease visit github.com/Muryoutaisuu/djmury for mor information");
	/*	this line will automatically autowoot the current song	*/
	$('#woot').click();
	/*switchAutowoot();*/
	
	/**	Activated EventListeners	*/
	
	/*	chat()-function loaded on chatevent	*/
	API.addEventListener(API.CHAT, chat);
	/*	nextDJ()-function loaded on DJChange-Event	*/
	API.addEventListener(API.DJ_ADVANCE, nextDJ);
	/*	scoreUpdate()-function loaded on Score-Update-Event	*/
	API.addEventListener(API.ROOM_SCORE_UPDATE, scoreUpdate);
	
	/**	initializing global variables	*/
	
	var gl_roomscore = API.getRoomScore();	/*	use for saving roomscore to display it after a new song begins	*/
	var window.gl_autowoot = true;	/*	is used for checking whether the bot should autowoot or not	*/
	var gl_sendstatistics = false;	/*	ist used for checking whether the bot should send the roomscore/statistics to chat and make them public	*/
	
	/**	functions	*/

	/*	chat()-function loaded on chatevent
		this function is always triggered, when the chatevent ist triggered, which means always when somebody writes something	*/
	function chat(data)
	{
		/*	saves the message into the variable 'mes'	*/
		var mes = data.message;
		/*	checks, whether the message is a known command and executes corresponding command	*/
		switch(mes){
			/*	was just used for testing, but never deleted, why should I? :-)	*/
			case "/hello":
				alert("Hey! Let's party hard!");
				break;
			/*	will display all known/user-oriented functions and commands listed on a link	*/
			case "/cmd":
				text = cmd();
				API.sendChat(text);
				break;
			/*	will display a link with instructions for helloween avatars	*/
			case "/helloween":
				text = helloween();
				API.sendChat(text);
				break;
			/*	won't do anything, if the command is unknown	*/
			default:
				break;
		}
	}
	
	/*	nextDJ()-function loaded on DJChange-Event
		this function is always triggered, when the djAdvance-event is triggered, normally when dj changes, usually after a song	*/
	function nextDJ(obj){
		string = sendScore();
		/*	if gl_sendstatistics is true, it will send statistics to chat and make them public	*/
		if (window.gl_sendstatistics){
			API.sendChat(string);
		}
		console.info(string);	/*	sends the scoredata as a string to the info-console of the webbrowser	*/
		window.gl_roomscore = API.getRoomScore();	/*	resets the roomscore, actually not really needed	*/
		/*	if gl_autowoot is true, it will autowoot the new song	*/
		if (window.gl_autowoot){
			$('#woot').click();
		}
	}
	
	/*	cmd() returns a link with a list of all commands	*/
	function cmd(){
		link = "https://github.com/Muryoutaisuu/djmury/blob/master/commands.md";
		return link;
	}
	
	/*	returns a link with nstruction for helloween avatars	*/
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
	
	/*	scoreUpdate(obj) is called, whenever the score in the room changes.
		The global variable gl_roomscore is updated	*/
	function scoreUpdate(obj){
		window.gl_roomscore = obj;
	}
	
	/*	gets score from current song, actually not needed or used	*/
	function getScore(){
		return API.getRoomScore();
	}
	
	/*	switch autowoot	*/
	function switchAutowoot(){
		window.gl_autowoot = !window.gl_autowoot;
		if (window.gl_autowoot){
			console.info("You are wooting now.");
			$('#woot').click();
		} else {
			console.info("You aren't wooting anymore.");
		}
	}
	
	/*	switch sendstatistics into chat	*/
	function switchSendstatistics(){
		window.gl_sendstatistics = !window.gl_sendstatistics;
		if (window.gl_sendstatistics){
			console.info("You are now sending statistics into chat.");
		} else {
			console.info("You aren't sending any statistics to chat anymore.");
		}
	}
