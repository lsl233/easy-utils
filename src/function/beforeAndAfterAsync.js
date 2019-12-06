import afterAsync from './afterAsync'
import beforeAsync from './beforeAsync'

export default function beforeAndAfterAsync (beforeFunc, func, afterFunc) {
	return function () {
		return afterAsync(beforeAsync(beforeFunc, func), afterFunc)
	}
}
