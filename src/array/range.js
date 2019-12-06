/**
 * 创建一个连续数组
 * @param start int
 * @param end	int
 * @param step	int
 * @returns {int[]}
 * @example
 *
 * range(1, 6)
 * // => [ 1, 2, 3, 4, 5, 6 ]
 *
 *  * range(6)
 * // => [ 1, 2, 3, 4, 5, 6 ]
 */
export default function range (start, end, step = 1) {
	if (arguments.length === 0) return []
	if (arguments.length === 1) {
		end = start
		start = 1
	}
	let index = -1
	let length = end - start
	const result = new Array(length)
	length += 1

	while(length--) {
		result[++index] = start
		start += step
	}
	return result
}
