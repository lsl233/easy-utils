import { appendUrlQuery } from '../../src/url'

describe('append url query', () => {
	test('appendUrlQuery(\'https://github.com\', { id: \'123\' })', () => {
		expect(appendUrlQuery('https://github.com', { id: '123' })).toBe('https://github.com?id=123')
	})

	test('appendUrlQuery(\'https://github.com?key=1\', { id: \'123\' })', () => {
		expect(appendUrlQuery('https://github.com?key=1', { id: '123' })).toBe('https://github.com?key=1&id=123')
	})

	test('appendUrlQuery(\'https://github.com\', {})', () => {
		expect(appendUrlQuery('https://github.com', {})).toBe('https://github.com')
	})

	test('appendUrlQuery(\'https://github.com\')', () => {
		expect(appendUrlQuery('https://github.com')).toBe('https://github.com')
	})
})
