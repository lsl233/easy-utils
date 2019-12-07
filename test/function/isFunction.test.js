import { isFunction } from '../../src/function'



describe('is function', () => {
	class TestClass {}
	test('isFunction({})', () => {
		expect(isFunction({})).toBeFalsy()
	})
	test('isFunction(Function)', () => {
		expect(isFunction(Function)).toBeTruthy()
	})
	test('isFunction(TestClass)', () => {
		expect(isFunction(TestClass)).toBeTruthy()
	})

	test('isFunction(Number)', () => {
		expect(isFunction(Number)).toBeTruthy()
	})

})
