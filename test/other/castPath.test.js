import { castPath } from '../../src/other'

describe('cast path', () => {
	test('castPath([])', () => {
		expect(castPath([])).toEqual([])
	})

	test('castPath([\'a\', \'c\', \'d\'])', () => {
		expect(castPath(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
	})

	test('castPath(\'1,2,3\')', () => {
		expect(castPath('1.2.3')).toEqual(['1','2','3'])
	})

	test('castPath(\'\')', () => {
		expect(castPath('')).toEqual([''])
	})
})
