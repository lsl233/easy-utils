import isObjectData from '../object/isObjectData'

/**
 * 增加URL参数
 * @param url {string} URL地址（没有验证URL合法性）
 * @param query {object} 扩展参数
 * @returns {string} 扩展后的URL
 */
export default function appendQueryToURL (url, query) {
	if (isObjectData(query)) {
		const hasQuery = url.indexOf('?') > -1
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
