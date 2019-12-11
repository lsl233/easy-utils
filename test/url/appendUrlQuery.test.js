import { appendUrlQuery } from '../../src/url'

describe('append url query', () => {
	test('appendUrlQuery', () => {
		expect(appendUrlQuery('https://github.com', { id: '123' })).toBe('https://github.com?id=123')
		expect(appendUrlQuery('https://github.com?key=1', { id: '123' })).toBe('https://github.com?key=1&id=123')
	})
})
