import isArray from './isArray'
import isObjectData from '../object/isObjectData'
import isString from '../string/isString'
import isNumber from '../number/isNumber'

export default function maxByArrayObject (values, key) {
	if (!isArray(values)) {
		throw new Error('values Expected `array object`')
	}

	if (!(isString(key) || isNumber(key))) throw new Error('key Expected `String` or `Number`')
	if (values.length === 0) throw new Error('values.length === 0')

	let maxItem
	for (const item of values) {
		if (isObjectData(item)) {
			if (maxItem) {
				maxItem = item[key] > maxItem[key] ? item : maxItem
			} else {
				maxItem = item
			}
		} else {
			throw new Error('values item Expected object')
		}
	}

	return maxItem
}
