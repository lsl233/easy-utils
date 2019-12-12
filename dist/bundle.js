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
		if (!isFunction(beforeFunc)) throw new Error('beforeFunc expected a function')
		if (!isFunction(func)) throw new Error('func Expected a function')

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
	function beforeManual (beforeFunc, func) {
		if (!isFunction(beforeFunc)) return console.error('Expected a function')
		if (!isFunction(func)) return console.error('Expected a function')

		return function (...arg) {
			beforeFunc(() => func.apply(this, arg));
		}
	}

	/**
	 * return 之前执行
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
	function afterManual (func, afterFunc) {
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

	function beforeAndAfterManual (beforeFunc, func, afterFunc) {
		return function () {
			return afterManual(beforeManual(beforeFunc, func), afterFunc)
		}
	}

	function calculateExecutionTime (func, txt = '[execution time]') {
		return beforeAndAfter(
			() => console.time(txt),
			func,
			() => console.timeEnd(txt)
		)
	}

	function getType(value) {
		return Object.prototype.toString.call(value)
	}

	function isObjectData (value) {
	    return getType(value) === '[object Object]'
	}

	/**
	 * @name isArray
	 * @param {*} value 验证对象
	 * @returns {Boolean} 是否数组
	 */
	function isArray (value) {
		return Array.isArray(value)
	}

	function castPath (path) {
		if (isArray(path)) return path
		return path.split('.')
	}

	function getValue(obj, path, defaultValue) {
		if (isObjectData(obj) || isArray(obj)) {
			const keys = castPath(path);
			for (let i = 0, l = keys.length; i < l; i++) {
				const key = keys[i];
				const item = obj[key];
				if (item) {
					obj = obj[key];
				} else {
					return defaultValue
				}
			}
			return obj
		}
		return defaultValue

	}

	function isEmptyObject (value) {
		return isObjectData(value) && JSON.stringify(value) === '{}'
	}

	function isNumber (value) {
		return typeof value === 'number' || getType(value) === '[object Number]'
	}

	/**
	 * 创建一个连续数组
	 * @param start int
	 * @param end	int
	 * @param step	int
	 * @returns {int[]}
	 * @example
	 *
	 * range(1, 6)
	 * // => [ 1, 2, 3, 4, 5, 6 ]
	 *
	 *  * range(6)
	 * // => [ 1, 2, 3, 4, 5, 6 ]
	 */
	function range (start, end, step = 1) {
		if (arguments.length === 0) return []
		if (arguments.length === 1) {
			end = start;
			start = 1;
		}

		if (!isNumber(start)) throw new Error('`start` need Number')
		if (!isNumber(end)) throw new Error('`end` need Number')
		if (!isNumber(step)) throw new Error('`step` need Number')

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

	/**
	 * 增加URL参数
	 * @param url {string} URL地址（没有验证URL合法性）
	 * @param query {object} 扩展参数
	 * @returns {string} 扩展后的URL
	 */
	function appendURLQuery (url, query) {
		if (isObjectData(query)) {
			const hasQuery = url.indexOf('?') > -1;
			let index = 0;
			for (const key in query) {
				if (!query.hasOwnProperty(key)) continue
				const value = query[key];
				if (hasQuery) {
					url += `&${key}=${value}`;
				} else {
					url += `${index === 0 ? '?' : '&'}${key}=${value}`;
				}
				index++;
			}
		}
		return url
	}

	const typeTuple = [Number, String, Boolean];

	/**
	 * URL 查询参数转换为Object
	 * @param url {String} url地址（没有严格验证url）
	 * @param types {Object} 类型转换
	 * @return Object 参数对象
	 */
	function convertURLQueryToObject (url, types) {
		const queryString = url.split('?')[1];
		const obj = {};
		if (!queryString) return obj
		const keyValueStrings = queryString.split('&');
		for (const item of keyValueStrings) {
			const [key, value] = item.split('=');
			if (types && types[key] && typeTuple.indexOf(types[key]) > -1) {
				obj[key] = types[key](value);
			} else {
				obj[key] = value;
			}
		}
		return obj
	}

	exports.after = after;
	exports.afterManual = afterManual;
	exports.appendQueryToURL = appendURLQuery;
	exports.before = before;
	exports.beforeAndAfter = beforeAndAfter;
	exports.beforeAndAfterManual = beforeAndAfterManual;
	exports.beforeManual = beforeManual;
	exports.calculateExecutionTime = calculateExecutionTime;
	exports.castPath = castPath;
	exports.convertURLQueryToObject = convertURLQueryToObject;
	exports.getType = getType;
	exports.getValue = getValue;
	exports.isArray = isArray;
	exports.isEmptyObject = isEmptyObject;
	exports.isFunction = isFunction;
	exports.isNumber = isNumber;
	exports.isObjectData = isObjectData;
	exports.range = range;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
