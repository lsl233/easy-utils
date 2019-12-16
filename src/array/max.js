import isArray from './isArray'

export default function max (values) {
	const defaultValue = 0
	if (!isArray(values)) {
		console.warn('value Expected Array')
		return defaultValue
	}
	if (values.length === 0) return defaultValue

	return Math.max.apply(this, values)
}
