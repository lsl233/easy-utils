import isFunction from './isFunction'
/**
 * 手动结束
 * @param afterFunc
 * @param func
 * @returns {Function|void}
 */
export default function afterManual (func, afterFunc) {
	if (!isFunction(func)) return console.error('Expected a function')
	if (!isFunction(afterFunc)) return console.error('Expected a function')

	return function (...arg) {
		arg.push(afterFunc)
		func.apply(this, arg)
	}
}
