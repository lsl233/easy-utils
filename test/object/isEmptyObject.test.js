import { isEmptyObject } from '../../src/object'

describe('is empty object', () => {
	test('isEmptyObject({a: 1})', () => {
		expect(isEmptyObject({a: 1})).toBeFalsy()
	})
	test('isEmptyObject({})', () => {
		expect(isEmptyObject({})).toBeTruthy()
	})

	test('isEmptyObject([])', () => {
		expect(isEmptyObject([])).toBeFalsy()
	})

	test('isEmptyObject(new Object())', () => {
		expect(isEmptyObject(new Object())).toBeTruthy()
	})

	const inputObject = {}
	test('isEmptyObject(inputObject)', () => {
		expect(isEmptyObject(inputObject)).toBeTruthy()
	})
})
