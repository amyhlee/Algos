class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


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
    // example using Node class
    let newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
  prepend(value) {
    // example without using Node class
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
  }
}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList(5))
console.log(myLinkedList(16))
