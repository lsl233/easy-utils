import { getType } from '../object/index'

/**
 * @name isNumber
 * @param {*} value 任意参数
 * @returns {boolean}
 */
export default function isNumber (value) {
	return typeof value === 'number' || getType(value) === '[object Number]'
}
