var fs = require('fs');

function cb (err, data){
	if (err) return console.error(err);
	var str = data.toString();
	var array = str.split('\n');
	var lineas = array.length - 1;
	console.log(lineas);
 }

fs.readFile(process.argv[2], cb);
