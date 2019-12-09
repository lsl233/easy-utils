import isObjectData from './isObjectData'

export default function isEmptyObject (value) {
	return isObjectData(value) && JSON.stringify(value) === '{}'
}
