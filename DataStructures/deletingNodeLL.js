//delete middle node

function ListNode(val) {
  this.val = val
  this.next = null
}

function deleteNode(node) {
  node.val = node.next.val
  node.next = node.next.next
}

//Remove all elements from a linked list of integers that have value val.
//deleting head or tail node

function deleteTailNode(head, val) {
  let curr = head
  let prev = null

  while (curr) {
    if (curr.val === val) {
      if (prev) {
        prev.next = curr.next
      } else {
        head = curr.next
      }
    } else {
      prev = curr
    }
    curr = curr.next
  }
  return head
}


// delete node that is kth element from end of array

function deleteK(head, k) {
  if (head === null || head.next === null || k <= 0) return head

  let curr = head
  let list_length = 1

  while (curr.next !== null) {
    curr = curr.next
    list_length += 1
  }

  let numNodeToDelete = list_length - k
  let priorNode = head

  for (let i = 0; i < numNodeToDelete - 1; i++) {
    priorNode = priorNode.next
  }

  priorNode.next = priorNode.next.next
  return head
}
