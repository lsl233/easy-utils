import isArray from '../array/isArray'
import isFunction from '../function/isFunction'

/**
 * 过滤数组
 * @param {Object[]} value 源数组对象
 * @param {Function} func 回调函数，返回 true 不过滤， 返回 false 过滤
 * @returns {Array} 过滤后的数组
 */
function filter (value, func) {
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

export default filter
