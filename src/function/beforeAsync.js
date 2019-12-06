import isFunction from './isFunction'

/**
 * 手动开始
 *
 * @param beforeFunc
 * @param func
 * @returns {Function|void}
 */
export default function beforeAsync (beforeFunc, func) {
	if (!isFunction(beforeFunc)) return console.error('Expected a function')
	if (!isFunction(func)) return console.error('Expected a function')

	return function (...arg) {
		beforeFunc((...values) => {
			func.apply(this, arg.concat(values))
		})
	}
}
