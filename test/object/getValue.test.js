import { getValue } from '../../src/object'



describe('get value', () => {
	const input = {
		a: {
			b: {
				c: {
					d: {
						e: {
							f: 2
						}
					}
				}
			}
		}
	}
	test('getValue(tsetObj1n \'a.b.c.d.e.f\')', () => {
		expect(getValue(input, 'a.b.c.d.e.f')).toBe(2)
	})


	test('getValue(tsetObj1 \'a.b.c.d.e\')', () => {
		expect(getValue(input, 'a.b.c.d.e')).toEqual({
				f: 2
			})
	})

	test('getValue(tsetObjn \'a.b.c.d.g\')', () => {
		expect(getValue(input, 'a.b.c.d.g')).toBe(undefined)
	})

	test('getValue(tsetObjn \'a.b.c.d.g\', 0)', () => {
		expect(getValue(input, 'a.b.c.d.g', 0)).toBe(0)
	})

	test('getValue(tsetObjn \'a.b.c.d.g\')', () => {
		expect(getValue(null, 'a.b.c.d.g')).toBe(undefined)
	})
})
