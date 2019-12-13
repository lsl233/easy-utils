import getType from '../object/getType'

export default function isString(value) {
	return typeof value === 'string' || getType(value) === '[object String]'
}
