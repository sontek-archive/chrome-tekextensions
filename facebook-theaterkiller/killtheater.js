function kill_theater() {
	var url = window.location.href;
	if (url.indexOf("&theater") !=-1) {
		console.log("in theater... redirecting");
		window.location.href = url.split("&theater")[0];
	}
}

setInterval ( "kill_theater()", 1000 );