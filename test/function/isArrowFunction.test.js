import { isArrowFunction } from '../../src/function'

describe('is arrow function', () => {
	class TestClass {}
	function testFunc () {}

	test('isArrowFunction({})', () => {
		expect(isArrowFunction({})).toBeFalsy()
	})

	test('isArrowFunction(TestClass)', () => {
		expect(isArrowFunction(TestClass)).toBeFalsy()
	})

	test('isArrowFunction(testFunc)', () => {
		expect(isArrowFunction(testFunc)).toBeFalsy()
	})

	test('isArrowFunction(() => {}))', () => {
		expect(isArrowFunction(() => {})).toBeTruthy()
	})
})
