class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 0
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList(5))
console.log(myLinkedList(16))
