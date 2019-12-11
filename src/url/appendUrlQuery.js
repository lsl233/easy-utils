import isObjectData from '../object/isObjectData'

export default function appendUrlQuery (url, query) {
	const hasQuery = url.indexOf('?') > -1
	if (isObjectData(query)) {
		let index = 0
		for (const key in query) {
			if (!query.hasOwnProperty(key)) continue
			const value = query[key]
			if (hasQuery) {
				url += `&${key}=${value}`
			} else {
				url += `${index === 0 ? '?' : '&'}${key}=${value}`
			}
			index++
		}
	}

	return url
}
