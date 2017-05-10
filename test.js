const main = require('./main.js')

test('adds 1 + 2 to equal 3', () => {
  expect(main.sum(1, 2)).toBe(3)
})

test('multiply 2 * 3 to equal 6', () => {
  expect(main.multiply(2, 3)).toBe(6)
})

test ('object assignment', () => {
  expect(main.obj('one', 1)).toEqual({one: 1})
  expect(main.obj('two', 2)).toEqual({one: 1, two: 2})
})

test('adding positive numbers is not zero', () => {
      expect(main.add(1, 2)).not.toBe(0)
  })
