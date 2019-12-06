const { range } = require('../../dist/bundle')

describe('range', () => {
	test('range(1, 6)', () => {
		expect(range(1, 6)).toEqual([1, 2, 3, 4, 5, 6])
	})

	test('range(1, 6, 2)', () => {
		expect(range(1, 6, 2)).toEqual([1, 3, 5, 7, 9, 11])
	})

	test('range(6)', () => {
		expect(range(6)).toEqual([1, 2, 3, 4, 5, 6])
	})

	test('range()', () => {
		expect(range()).toEqual([])
	})

})

