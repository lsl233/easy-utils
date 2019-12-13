import { max } from '../../src/array'

describe('数组最大', () => {
	test('[1, 10, 2, 4, 1]', () => {
		expect(max([1, 10, 2, 4, 1])).toBe(10)
	})

	test('[]', () => {
		expect(max([])).toBe(0)
	})

	test('', () => {
		expect(max()).toBe(0)
	})

	test('undefined', () => {
		expect(max(undefined)).toBe(0)
	})
})
