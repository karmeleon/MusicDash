var dash_button = require('node-dash-button');
var fs = require('fs');
var config = require('./config.json');
const exec = require('child_process').exec;

var dash = dash_button(config.mac, null, null, 'all');
console.log('Listening to Dash button with MAC address ' + config.mac);
dash.on('detected', function() {
	console.log('Playing sound');
	var files = fs.readdirSync('./sounds');
	var fileToPlay = 'sounds/' + files[Math.floor(Math.random() * files.length)];
	// this app has to be run as root to access pcap, but it can't be run as root
	// to play audio via pulse. execute mplayer as a non-superuser instead.
	var cmd = 'mplayer "' + fileToPlay + '"';
	exec('exec su -s /bin/sh -c \'exec "$0" "$@"\' ' + config.user + ' -- ' + cmd);
});
