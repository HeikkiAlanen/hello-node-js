var fs = require('fs');

module.exports = function (file) {
	if (fs.existsSync("./" + file)) {
		var stats = fs.statSync("./" + file); 
		return(stats.mtime);
	}
	return(false);
};