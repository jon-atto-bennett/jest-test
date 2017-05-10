var obj = {}

module.exports = {

  sum: function (a, b) {
    return a + b
  },

  multiply: function (a, b) {
    return a * b
  },

  obj: function (key, value) {
    obj[key] = value
    return obj
  },

  add: function (a, b) {
    return a + b
  }
}
