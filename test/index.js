const test = require('tap').test
const convertToBytes = require('../dist/commonjs').convertToBytes

test('Integer Test', function (t) {
  const digit = 5
  t.is(convertToBytes(digit, 16), '0x5')
  t.end()
})

test('String Test', function (t) {
  const digit = '5'
  t.is(convertToBytes(digit, 16), '0x5')
  t.end()
})

test('No prepend', function (t) {
  const digit = '26'
  t.is(convertToBytes(digit, 16, false), '1a')
  t.end()
})
