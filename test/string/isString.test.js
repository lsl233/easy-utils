import { isString } from '../../src/string'

describe('is string', () => {
	test('isString({})', () => {
		expect(isString({})).toBeFalsy()
	})
	test('isString(Function)', () => {
		expect(isString(Function)).toBeFalsy()
	})

	test('isString(new Object())', () => {
		expect(isString(new Object())).toBeFalsy()
	})

	test('isString(new Number(1))', () => {
		expect(isString(new Number(1))).toBeFalsy()
	})

	test('isString(\'\')', () => {
		expect(isString('')).toBeTruthy()
	})

	test('isString(new String())', () => {
		expect(isString(new String())).toBeTruthy()
	})

})
