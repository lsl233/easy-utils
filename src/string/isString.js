import { getType } from '../object'

export default function isString(value) {
	return typeof value === 'string' || getType(value) === '[object String]'
}
