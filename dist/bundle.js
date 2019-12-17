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
	 * 是否是数组
	 * @method
	 * @param {String} value 验证对象
	 * @returns {Boolean} 是否数组
	 * @example
	 * isArray([]) //=> true
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

	/**
	 * @name isNumber
	 * @param {*} value 任意参数
	 * @returns {boolean}
	 */
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

	function max (values) {
		const defaultValue = 0;
		if (!isArray(values)) {
			console.warn('value Expected Array');
			return defaultValue
		}
		if (values.length === 0) return defaultValue

		return Math.max.apply(this, values)
	}

	function isString(value) {
		return typeof value === 'string' || getType(value) === '[object String]'
	}

	function maxByArrayObject (values, key) {
		if (!isArray(values)) {
			throw new Error('values Expected `array object`')
		}

		if (!(isString(key) || isNumber(key))) throw new Error('key Expected `String` or `Number`')
		if (values.length === 0) throw new Error('values.length === 0')

		let maxItem;
		for (const item of values) {
			if (isObjectData(item)) {
				if (maxItem) {
					maxItem = item[key] > maxItem[key] ? item : maxItem;
				} else {
					maxItem = item;
				}
			} else {
				throw new Error('values item Expected object')
			}
		}
		return maxItem
	}

	function filter (value, func) {
		if (!isArray(value)) throw TypeError('value expected `array`')
		if (!isFunction(func)) throw TypeError('value expected `function`')
		const result = [];
		for (let i = 0, l = value.length; i < l; i++) {
			const item = value[i];
			if (func(item, i, value)) {
				result.push(item);
			}
		}

		return result
	}

	function isNil(value) {
		return value === null || value === undefined // or value == null
	}

	/**
	 * 增加URL参数
	 * @param url {string} URL地址（没有验证URL合法性）
	 * @param query {object} 扩展参数
	 * @returns {string} 扩展后的URL
	 */
	function appendQueryToURL (url, query) {
		if (isObjectData(query)) {
			const hasQuery = url.indexOf('?') > -1;
			let index = 0;
			for (const key in query) {
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
	 * URL Query 2 Object
	 * @method
	 * @param {String} url url地址（没有严格验证url）
	 * @param {Object} types 类型转换
	 * @return {Object} 参数对象
	 */
	function convertURLQueryToObject (url, types) {
		const obj = {};
		if (!isString(url)) {
			return obj
		}
		const queryString = url.split('?')[1];

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
	exports.appendQueryToURL = appendQueryToURL;
	exports.before = before;
	exports.beforeAndAfter = beforeAndAfter;
	exports.beforeAndAfterManual = beforeAndAfterManual;
	exports.beforeManual = beforeManual;
	exports.calculateExecutionTime = calculateExecutionTime;
	exports.castPath = castPath;
	exports.convertURLQueryToObject = convertURLQueryToObject;
	exports.filter = filter;
	exports.getType = getType;
	exports.getValue = getValue;
	exports.isArray = isArray;
	exports.isEmptyObject = isEmptyObject;
	exports.isFunction = isFunction;
	exports.isNil = isNil;
	exports.isNumber = isNumber;
	exports.isObjectData = isObjectData;
	exports.max = max;
	exports.maxByArrayObject = maxByArrayObject;
	exports.range = range;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
