export default function range (start, end, step = 1) {
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
