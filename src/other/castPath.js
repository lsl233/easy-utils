import isArray from '../array/isArray'

export default function castPath (path) {
	if (isArray(path)) return path
	return path.split('.')
}
