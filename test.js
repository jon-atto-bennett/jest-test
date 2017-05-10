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

  test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
