var filu = process.argv[2];

var m = require('./task-3-2.js');
var dateFormat = require('./node_modules/dateformat');

var timestamp = m(filu);
if (timestamp !== false) {
	var date = new Date(timestamp);
	
	dateFormat.masks.finTime = 'dd.mm.yyyy HH.MM';
    console.log(dateFormat(date, "finTime"));
	
	/*
	var fin = date.getDate() + '.' + 
	(date.getMonth() + 1) + '.' +
	date.getFullYear();
	fin += ' ' + date.getHours() + '.' + date.getMinutes();
	console.log(fin);
	*/
} else {
	console.log("Tiedostoa ei löydy!");
}