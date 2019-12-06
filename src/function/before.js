import isFunction from './isFunction'
/**
 *  开始
 *
 * @param beforeFunc
 * @param func
 * @returns {Function|void}
 */
export default function before (beforeFunc, func) {
	if (!isFunction(beforeFunc)) return console.error('Expected a function')
	if (!isFunction(func)) return console.error('Expected a function')

	return function (...arg) {
		beforeFunc()
		return func.apply(this, arg)
	}
}
