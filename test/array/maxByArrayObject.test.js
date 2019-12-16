import { maxByArrayObject } from '../../src/array'

describe('数组最大', () => {
	test('[1, 10, 2, 4, 1]', () => {
		expect(() => maxByArrayObject([1, 10, 2, 4, 1])).toThrow(Error)
	})

	test('[]', () => {
		expect(() => maxByArrayObject([])).toThrow(Error)
	})

	test('', () => {
		expect(() => maxByArrayObject()).toThrow(Error)
	})

	test('undefined', () => {
		expect(() => maxByArrayObject(undefined)).toThrow(Error)
	})

	test('array', () => {
		expect(maxByArrayObject([
			{ value: 4 },
			{ value: 1 },
			{ value: 10 },
			{ value: 11 },
			{ value: 2 },
			{ value: 9 },
			{ value: 2 },
			{ value: 9 },

		], 'value')).toEqual({
			value: 11
		})
	})
})
