import isObjectData from './isObjectData'
import isArray from '../array/isArray'
import castPath from '../other/castPath'

export default function getValue(obj, path, defaultValue) {
	if (isObjectData(obj) || isArray(obj)) {
		const keys = castPath(path)
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
	return defaultValue

}
