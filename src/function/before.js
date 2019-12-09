import isFunction from './isFunction'
import isArrowFunction from './isArrowFunction'
/**
 *  开始
 *
 * @param beforeFunc
 * @param func
 * @returns {Function|void}
 */
export default function before (beforeFunc, func) {
	if (!isFunction(beforeFunc)) throw new Error('beforeFunc expected a function')
	if (!isFunction(func)) throw new Error('func Expected a function')

	return function (...arg) {
		beforeFunc()
		if (isArrowFunction(func)) {
			return func(...arg)
		} else {
			return func.apply(this, arg)
		}

	}
}
