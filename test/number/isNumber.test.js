const { isNumber } = require('../../dist/bundle')

describe('is number', () => {
	test('isNumber(1)', () => {
		expect(isNumber(1)).toBeTruthy()
	})

	test('isNumber(1.1)', () => {
		expect(isNumber(1.1)).toBeTruthy()
	})

	test('isNumber(new Number(1))', () => {
		expect(isNumber(new Number(1))).toBeTruthy()
	})

	test('isNumber(new Number(1.233))', () => {
		expect(isNumber(Number(1.233))).toBeTruthy()
	})

	test('isNumber(\'1\')', () => {
		expect(isNumber('1')).toBeFalsy()
	})

	test('isNumber([])', () => {
		expect(isNumber([])).toBeFalsy()
	})

	test('isNumber({})', () => {
		expect(isNumber({})).toBeFalsy()
	})

	test('isNumber(null)', () => {
		expect(isNumber(null)).toBeFalsy()
	})

	test('isNumber(undefined)', () => {
		expect(isNumber(undefined)).toBeFalsy()
	})


})
