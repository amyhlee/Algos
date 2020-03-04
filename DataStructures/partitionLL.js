//Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.


function oddEvenPartition(head) {
  let odd = head
  let even = head.next
  let evenHead = head.next

  while (odd.next !== null && even.next !== null) {
    odd.next = even.next
    odd = even.next
    even.next = odd.next
    even = odd.next
  }
  odd.next = evenHead
  return head
}


//alternate solution: group all even nodes followed by odd nodes

function partition(head) {
  let curr = head
  let i = 0
  let oddDummy = new Node()
  let oddTail = oldDummy
  let evenDummy = new Node()
  let evenTail = evenDummy

  while (curr !== null) {
    if (i % 2) {
      evenTail.next = curr
      evenTail = curr
    } else {
      oddTail.next = curr
      oddTail = curr
    }
    curr = curr.next
    i += 1
  }
  evenTail.next = oddDummy.next
  oddTail.next = null
  return evenDummy.next
}
