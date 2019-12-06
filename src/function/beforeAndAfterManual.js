import afterManual from './afterManual'
import beforeManual from './beforeManual'

export default function beforeAndAfterManual (beforeFunc, func, afterFunc) {
	return function () {
		return afterManual(beforeManual(beforeFunc, func), afterFunc)
	}
}
