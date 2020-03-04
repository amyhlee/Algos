class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// reverse sublist (p, q) within LL

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
  let next = null // used to temp store next node
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

// reverse LL every k number of elements

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

// Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

function reverseEveryK(head, k) {
  if (k <= 1 || head === null) return head

  let curr = head
  let prev = null

  while (true) {
    let lastNodeFirstPart = prev
    let lastNodeSublist = curr
    let i = 0
    let next = null

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

    i = 0
    while (curr !== null && i < k) {
      prev = curr
      curr = curr.next
      i++
    }

    if (curr === null) break
  }
  return head
}
