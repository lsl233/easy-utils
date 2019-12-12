import { isString } from '../string'

const typeTuple = [Number, String, Boolean]

/**
 * URL 查询参数转换为Object
 * @param url {String} url地址（没有严格验证url）
 * @param types {Object} 类型转换
 * @return Object 参数对象
 */
export default function convertURLQueryToObject (url, types) {
	const obj = {}
	if (!isString(url)) {
		return obj
	}
	const queryString = url.split('?')[1]

	if (!queryString) return obj
	const keyValueStrings = queryString.split('&')
	for (const item of keyValueStrings) {
		const [key, value] = item.split('=')
		if (types && types[key] && typeTuple.indexOf(types[key]) > -1) {
			obj[key] = types[key](value)
		} else {
			obj[key] = value
		}
	}
	return obj
}
