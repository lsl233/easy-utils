import before from './before'
import after from './after'

export default function beforeAndAfter (beforeFunc, func, afterFunc) {
	return after(before(beforeFunc, func), afterFunc)
}
