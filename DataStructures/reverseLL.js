class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function reverse(head) {
    let curr = head
    let prev = null

    while (curr!== null) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }
