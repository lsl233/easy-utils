const { isArray } = require('../../dist/bundle')

describe('is array', () => {
	test('isArray([1, 2, 3])', () => {
		expect(isArray([1, 2, 3])).toBeTruthy()
	})
	test('isArray(1)', () => {
		expect(isArray(1)).not.toBeTruthy()
	})
	test('isArray()', () => {
		expect(isArray()).not.toBeTruthy()
	})
	test('isArray({0: 1, 1: 1, 3: 1, length: 3})', () => {
		expect(isArray({ 0: 1, 1: 1, 3: 1, length: 3 })).not.toBeTruthy()
	})
})
