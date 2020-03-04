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



