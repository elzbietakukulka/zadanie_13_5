var os = require('os');
process.stdin.setEncoding('utf8');

function timeCounting() {
	var uptime = os.uptime();
	var uptimeRound = Math.round(uptime);
	var uptimeHours = Math.floor(uptimeRound/3600);
	var uptimeMinutes = Math.round((uptimeRound/60)-(uptimeHours*60));
	var uptimeSeconds = uptimeRound-(uptimeMinutes*60)-(uptimeHours*3600);
	console.log('Uptime: '.green, + uptimeHours + " h " + uptimeMinutes + " min " + uptimeSeconds + " sec");
}

exports.timeCounting = timeCounting;