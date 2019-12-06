import beforeAndAfter from './beforeAndAfter'

export default function calculateExecutionTime (func, txt = '[execution time]') {
	return beforeAndAfter(
		() => console.time(txt),
		func,
		() => console.timeEnd(txt)
	)
}
