import { getType } from '../object/index'

export default function isNumber (value) {
	return typeof value === 'number' || getType(value) === '[object Number]'
}
