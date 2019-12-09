import { before } from '../../src/function'

describe('before', () => {
	function inputBeforeFunc () {}
	function inputFunc (value) {
		return value
	}

	test('before input not function', () => {
		expect(() => before(1, 23)).toThrow(Error)
	})

	test('before input arrow function', () => {
		const wrapperFunc = before(() => {}, (value) => value)
		expect(wrapperFunc(123)).toBe(123)
	})

	test('before', () => {
		const wrapperFunc = before(inputBeforeFunc, inputFunc)
		expect(wrapperFunc(123)).toBe(123)
	})

})
