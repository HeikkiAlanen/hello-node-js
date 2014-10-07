var task32 = require('../task-3-2.js');

exports.task32 = function(test) {
		test.expect(2);
		var value = task32('README1.md');
		test.strictEqual(value, false, "False returned. OK.");
		var value2 = task32('README.md');
		test.strictEqual(value2 instanceof Date, true, "File found");
		test.done();
	};
