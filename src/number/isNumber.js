import { isObjectLike } from '../object/index'

export default function isNumber (value) {
	return typeof value === 'number' && (isObjectLike(value))
}
