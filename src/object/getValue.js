import isObject from './isObject'
import { isArray } from '../array/index'

export default function getValue(obj, path, defaultValue) {
	if (!isObject(obj) || !isArray) return defaultValue
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
