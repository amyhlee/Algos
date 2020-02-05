class Queue {
  constructor() {
    this._storage = {}
    this._length = 0
    this._headIndex = 0
  }
  enqueue(value) {
    this._storage[this._length + this._headIndex] = value
    this._length++
  }
  dequeue() {
    if (this._length) {
      const firstVal = this._storage[this._headIndex]
      delete this._storage[this._headIndex]
      this._length--
      this._headIndex++
    }
  }
  peek() {

  }
}




class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queues {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  peek() {
    return this.first
  }
  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
    this.last.next = newNode
    this.last = newNode
    }
    this.length++
    return this
  }
  dequeue() {
    if (!this.first) {
      return null
    }
    if (this.first = this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.length--
    return this
  }
}
