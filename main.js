module.exports = {

  sum: function (a, b) {
    return a + b
  },

  multiply: function (a, b) {
    return a * b
  },

  obj: function (key, value) {
    var obj = {}
    obj[key] = value
    console.log(obj)
    return obj
  }
}
