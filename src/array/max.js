import isArray from './isArray'
import { isObject } from '../object'

export default function max (value) {
	const defaultValue = 0
	if (!isArray(value)) {
		console.warn('value Expected Array')
		return defaultValue
	}
	if (value.length === 0) return defaultValue
	if (isObject(value[0])) {

	}

	return Math.max.apply(this, value)
}
