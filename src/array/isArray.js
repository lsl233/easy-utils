/**
 * 验证是否为数组
 * @param {String} value 验证对象
 * @returns {Boolean} 是否数组
 * @example
 * isArray([]) //=> true
 */
function isArray (value) {
	return Array.isArray(value)
}

export default isArray
