import { isArray } from '../../src/array'

describe('is array', () => {
	test('isArray([1, 2, 3])', () => {
		expect(isArray([1, 2, 3])).toBeTruthy()
	})
	test('isArray(1)', () => {
		expect(isArray(1)).toBeFalsy()
	})
	test('isArray()', () => {
		expect(isArray()).toBeFalsy()
	})
	test('isArray({0: 1, 1: 1, 3: 1, length: 3})', () => {
		expect(isArray({ 0: 1, 1: 1, 3: 1, length: 3 })).toBeFalsy()
	})
})
