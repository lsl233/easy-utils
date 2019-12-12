import { convertURLQueryToObject } from '../../src/url'

describe('convert url query to object', () => {
	test('convertURLQueryToObject(\'https://github.com?id=123&type=123\', { id: Number, type: Number })', () => {
		expect(convertURLQueryToObject('https://github.com?id=123&type=123', { id: Number, type: Number })).toEqual({id: 123, type: 123})
	})

	test('convertURLQueryToObject(\'https://github.com?id=123&type=123\'', () => {
		expect(convertURLQueryToObject('https://github.com?id=123&type=123')).toEqual({id: '123', type: '123'})
	})

	test('convertURLQueryToObject(\'https://github.com?id=123&type=123\'', () => {
		expect(convertURLQueryToObject('https://github.com?id=123&type=123')).toEqual({id: '123', type: '123'})
	})

	test('convertURLQueryToObject(\'https://github.com\'', () => {
		expect(convertURLQueryToObject('https://github.com')).toEqual({})
	})

	test('convertURLQueryToObject(\'\')', () => {
		expect(convertURLQueryToObject('')).toEqual({})
	})

	test('convertURLQueryToObject(1)', () => {
		expect(convertURLQueryToObject(1)).toEqual({})
	})
})
