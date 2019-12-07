import { isArray } from '../array'

export default function castPath (path) {
	if (isArray(path)) return path
	return path.split('.')
}
