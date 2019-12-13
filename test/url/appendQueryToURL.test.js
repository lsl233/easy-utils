import { appendQueryToURL } from '../../src/url'

describe('append url query', () => {
	test('appendQueryToURL(\'https://github.com\', { id: \'123\' })', () => {
		expect(appendQueryToURL('https://github.com', { id: '123' })).toBe('https://github.com?id=123')
	})

	test('appendQueryToURL(\'https://github.com?key=1\', { id: \'123\' })', () => {
		expect(appendQueryToURL('https://github.com?key=1', { id: '123' })).toBe('https://github.com?key=1&id=123')
	})

	test('appendQueryToURL(\'https://github.com\', {})', () => {
		expect(appendQueryToURL('https://github.com', {})).toBe('https://github.com')
	})

	test('appendQueryToURL(\'https://github.com\')', () => {
		expect(appendQueryToURL('https://github.com')).toBe('https://github.com')
	})

	test('appendQueryToURL(\'https://github.com\')', () => {
		expect(appendQueryToURL('https://github.com')).toBe('https://github.com')
	})
})
