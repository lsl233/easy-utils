import { filter } from '../../src/array'

describe('filter', () => {
	test('filter([1, 2, 3], (item, index, arr) => i > 2)', () => {
		expect(filter([1, 2, 3], (item, index, arr) => item > 2)).toEqual([3])
	})

	test('filter()', () => {
		expect(() => filter()).toThrow()
	})

	test('filter([])', () => {
		expect(() => filter([])).toThrow()
	})
})
