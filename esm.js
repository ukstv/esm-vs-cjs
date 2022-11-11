export class ESMClass {
  constructor () {
    this.foo = 'bar'
  }

  method () {
    return this.foo
  }
}

export function right(value) {
  return { _tag: 'Right', right: value }
}
