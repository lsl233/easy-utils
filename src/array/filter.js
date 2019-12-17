import { isArray } from '../array'
import { isFunction } from '../function'

export default function (value, func) {
	if (!isArray(value)) throw TypeError('value expected `array`')
	if (!isFunction(func)) throw TypeError('value expected `function`')
	const result = []
	for (let i = 0, l = value.length; i < l; i++) {
		const item = value[i]
		if (func(item, i, value)) {
			result.push(item)
		}
	}

	return result
}
