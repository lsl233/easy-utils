import isObjectData from './isObjectData'
import isArray from '../array/isArray'

export default function getValue(obj, path, defaultValue) {
	if (!isObjectData(obj) || !isArray) return defaultValue
	const keys = path.split('.')
	for (let i = 0, l = keys.length; i < l; i++) {
		const key = keys[i]
		const item = obj[key]
		if (item) {
			obj = obj[key]
		} else {
			return defaultValue
		}
	}
	return obj
}
