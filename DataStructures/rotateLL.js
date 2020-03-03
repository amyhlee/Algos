function rotate(head, k) {
  if (head === null || head.next === null || k <= 0) return head

  let list_length = 1
  let last_node = head

  while (last_node.next !== null) {
    last_node = last_node.next
    list_length += 1
  }

  last_node.next = head
  k %= list_length
  let skip_length = list_length - k
  let tail = head

  for (let i = 0; i < skip_length - 1; i++) {
    tail = tail.next
  }

  head = tail.next
  tail.next = null
  return head
}
