(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.easyUtils = {}));
}(this, (function (exports) { 'use strict';

	function isFunction (func) {
		return (typeof func === 'function')
	}

	/**
	 *  开始
	 *
	 * @param beforeFunc
	 * @param func
	 * @returns {Function|void}
	 */
	function before (beforeFunc, func) {
		if (!isFunction(beforeFunc)) return console.error('Expected a function')
		if (!isFunction(func)) return console.error('Expected a function')

		return function (...arg) {
			beforeFunc();
			return func.apply(this, arg)
		}
	}

	/**
	 * 手动开始
	 *
	 * @param beforeFunc
	 * @param func
	 * @returns {Function|void}
	 */
	function beforeAsync (beforeFunc, func) {
		if (!isFunction(beforeFunc)) return console.error('Expected a function')
		if (!isFunction(func)) return console.error('Expected a function')

		return function (...arg) {
			beforeFunc((...values) => {
				func.apply(this, arg.concat(values));
			});
		}
	}

	/**
	 * 结束
	 *
	 * @param func
	 * @param afterFunc
	 * @returns {Function|void}
	 */
	function after (func, afterFunc) {
		if (!isFunction(afterFunc)) return console.error('Expected a function')
		if (!isFunction(func)) return console.error('Expected a function')

		return function (...arg) {
			const result = func.apply(this, arg);
			afterFunc();
			return result
		}
	}

	/**
	 * 手动结束
	 * @param afterFunc
	 * @param func
	 * @returns {Function|void}
	 */
	function afterAsync (func, afterFunc) {
		if (!isFunction(func)) return console.error('Expected a function')
		if (!isFunction(afterFunc)) return console.error('Expected a function')

		return function (...arg) {
			arg.push(afterFunc);
			func.apply(this, arg);
		}
	}

	function beforeAndAfter (beforeFunc, func, afterFunc) {
		return after(before(beforeFunc, func), afterFunc)
	}

	function beforeAndAfterAsync (beforeFunc, func, afterFunc) {
		return function () {
			return afterAsync(beforeAsync(beforeFunc, func), afterFunc)
		}
	}

	function calculateExecutionTime (func, txt = '[execution time]') {
		return beforeAndAfter(
			() => console.time(txt),
			func,
			() => console.timeEnd(txt)
		)
	}

	function isObject (obj) {
	    return (Object.prototype.toString.call(obj) === '[object Object]')
	}

	function isArray (arr) {
	    return Array.isArray(arr)
	}

	function range (start, end, step = 1) {
	    let index = -1;
	    let length = end - start;
	    const result = new Array(length);
	    length += 1;

	    while(length--) {
	        result[++index] = start;
	        start += step;
	    }

	    return result
	}

	exports.after = after;
	exports.afterAsync = afterAsync;
	exports.before = before;
	exports.beforeAndAfter = beforeAndAfter;
	exports.beforeAndAfterAsync = beforeAndAfterAsync;
	exports.beforeAsync = beforeAsync;
	exports.calculateExecutionTime = calculateExecutionTime;
	exports.isArray = isArray;
	exports.isFunction = isFunction;
	exports.isObject = isObject;
	exports.range = range;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
