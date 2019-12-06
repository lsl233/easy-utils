import isFunction from './isFunction'
/**
 * 结束
 *
 * @param func
 * @param afterFunc
 * @returns {Function|void}
 */
export default function after (func, afterFunc) {
	if (!isFunction(afterFunc)) return console.error('Expected a function')
	if (!isFunction(func)) return console.error('Expected a function')

	return function (...arg) {
		const result = func.apply(this, arg)
		afterFunc()
		return result
	}
}