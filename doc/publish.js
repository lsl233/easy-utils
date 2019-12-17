var fs = require('fs');

/**
 * Publish hook for the JSDoc template.  Writes to JSON stdout.
 * @param {function} data The root of the Taffy DB containing doclet records.
 * @param {Object} opts Options.
 */
exports.publish = function(data, opts) {

	var docs = data().get().filter(function(doc) {
		console.log(doc)
		return !doc.undocumented;
	});

	let html = ''

	const list = data().get().map((doc) => {
		if (!doc.undocumented) {
			console.log(doc)
		}
	})

	fs.writeFileSync(opts.destination, JSON.stringify({docs: docs}, null, 2));

};
