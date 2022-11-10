class CJSClass {
  constructor () {
    this.foo = 'bar'
  }

  method () {
    return this.foo
  }
}

function right(value) {
  return { _tag: 'Right', right: value }
}

module.exports = {
  CJSClass,
  right
}
