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
  insert(index, value) {
    let newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    length++
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  remove(index) {
    const leader = this.traverseToIndex(index-1)
    const nodeToRemove = leader.next
    leader.next = nodeToRemove.next
    this.length--
  }
  // reverse() {
  //   if(!this.head.next) {
  //     return this.head
  //   }
  //   let first = this.head
  //   let second = this.head.next
  //   while(second) {
  //     let temp = second.next
  //     second.next = first
  //     first = second
  //     second = temp
  //   }
  //   this.head.next = null
  //   this.head = first
  //   return this
  // }
  reverse() {
    let prev = null
    let curr = this.head
    let next = null
    while(curr) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
  }
}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList(5))
console.log(myLinkedList(16))
