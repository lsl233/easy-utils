const fs = require('fs')

const beforeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>EasyUtils demo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
`

const afterHTML = `
</body>
</html>
`

function renderParams (params) {
	if (!params) return ''
		// <span>${item.description && item.description}</span>
	return `
		<div class="params">
			${params && params.map((item) => `<p><span>${item.name && item.name}</span><span>${item.type && item.type.names && item.type.names.map(typeName => typeName.join('|'))}</span><span>${item.description && item.description}</span></p>`).join(' ')}
		</div>
	`
}

/**
 * Publish hook for the JSDoc template.  Writes to JSON stdout.
 * @param {function} data The root of the Taffy DB containing doclet records.
 * @param {Object} opts Options.
 */
exports.publish = function (data, opts) {

	const list = data().get().map((doc) => {
		if (!doc.undocumented) {
			console.log(doc)
			return `
				<div>
					<div class="title"><h3>${doc.name}</h3><span>${doc.description}</span></div>
					${renderParams(doc.params)}
				</div>
			`
		}
		return ''
	})

	fs.writeFileSync(opts.destination, beforeHTML + list.join('') + afterHTML)

}
