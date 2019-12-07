const { getValue } = require('../../dist/bundle')

describe('get value', () => {
	test('getValue(obj)', () => {
		expect(getValue(
			{
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
		, 'a.b.c.d.e.f')).toBe(2)
	})


	test('getValue(obj)', () => {
		expect(getValue(
			{
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
			, 'a.b.c.d.e')).toEqual({
				f: 2
			})
	})

	test('getValue(obj)', () => {
		expect(getValue(
			{
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
			, 'a.b.c.d.g', 'hello')).toEqual('hello')
	})
})
