import { isObjectData } from '../../src/object'

describe('is object data', () => {
	test('isObjectData({})', () => {
		expect(isObjectData({})).toBeTruthy()
	})
	test('isObjectData(Function)', () => {
		expect(isObjectData(Function)).toBeFalsy()
	})
	test('isObjectData(new Object())', () => {
		expect(isObjectData(new Object())).toBeTruthy()
	})

	test('isObjectData(new Number(1))', () => {
		expect(isObjectData(new Number(1))).toBeFalsy()
	})

})
