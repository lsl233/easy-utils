import isFunction from './isFunction'

export default function isArrowFunction (value) {
	return isFunction(value) && !value.prototype
}
