class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function reverseSublist(head, p, q) {
  let curr = head
  let prev = null
  let i = 0

  while (curr !== null && i < p - 1) {
    prev = curr
    curr = curr.next
    i++
  }

  let lastNodeFirstPart = prev
  let lastNodeSublist = curr
  i = 0

  while (curr !== null && i < q - p + 1) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
    i++
  }

  if (lastNodeFirstPart !== null) {
    lastNodeFirstPart.next = prev
  } else {
    head = prev
  }
  lastNodeSublist.next = curr
  return head
}

function reverseByK(head, k) {
  if (k <= 1 || head === null) return head

  let curr = head
  let prev = null

  while (true) {

    let lastNodeFirstPart = prev
    let lastNodeSublist = curr
    let i = 0

    while (curr !== null && i < k) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
      i++
    }

    if (lastNodeFirstPart !== null) {
      lastNodeFirstPart.next = prev
    } else {
      head = prev
    }
    lastNodeSublist.next = curr

    if (curr === null) {
      break
    }
    prev = lastNodeSublist
  }
  return head
}
