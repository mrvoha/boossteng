const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = 'womanizer2000';
var password = 'Ivanmary2660';
var shared_secret = '';

var games = [1293830, 440, 570];
var status = 1;


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});