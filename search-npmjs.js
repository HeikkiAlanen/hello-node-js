	var package = process.argv[2];
	
	var dbUT = "registry.npmjs.org";
	
	var nano = require('nano')('http://registry.npmjs.org');
	
	var koe = nano.use(package);
 	koe.get('latest', function(err, body) {
		if (!err) {
			console.log("Latest version of " + package + " is " + body.version);
		}
	});
