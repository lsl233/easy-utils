import { isNil } from '../../src/other'

describe('isNil', () => {
	test('isNil(0)', () => {
		expect(isNil(0)).toBeFalsy()
	})

	test('isNil(\'\')', () => {
		expect(isNil('')).toBeFalsy()
	})

	test('isNil(unll)', () => {
		expect(isNil(null)).toBeTruthy()
	})

	test('isNil(void 0)', () => {
		expect(isNil(void 0)).toBeTruthy()
	})
})
