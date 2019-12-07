import { getType } from '../../src/object'

describe('is type', () => {
	test('isType(1)', () => {
		expect(getType(1)).toBe('[object Number]')
	})

	test('isType(new Number(1))', () => {
		expect(getType(new Number(1))).toBe('[object Number]')
	})

	test('isType(Function)', () => {
		expect(getType(Function)).toBe('[object Function]')
	})

	test('isType(undefined)', () => {
		expect(getType(undefined)).toBe('[object Undefined]')
	})

	test('isType(null)', () => {
		expect(getType(null)).toBe('[object Null]')
	})

	test('isType([])', () => {
		expect(getType([])).toBe('[object Array]')
	})

	test('isType(false)', () => {
		expect(getType(false)).toBe('[object Boolean]')
	})

	test('isType(NaN)', () => {
		expect(getType(NaN)).toBe('[object Number]')
	})

	test('isType(\'\')', () => {
		expect(getType('')).toBe('[object String]')
	})
})
