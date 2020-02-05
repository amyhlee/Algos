class Stack {
  constructor() {
    this._storage = {}
    this._length = 0
  }
  push(value) {
    this._storage[this.length] = value
    this._length++
  }
  pop() {
    if (this._length) {
      const lastVal = this._storage[this._length - 1]
      delete this._storage[this._length - 1]
      this._length--
      return lastVal
    }
  }
  peek() {
    if (this._length) {
      return this._storage[this.length - 1]
    }
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length - 1]
  }
  push(value) {
    this.array.push(value)
    return this
  }
  pop() {
    this.array.pop()
    return this
  }
}
