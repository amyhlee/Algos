// write a function that returns a boolean that checks of LL contains a cycle
class LinkedListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


function cycleLL(root) {
  let slowRunner = root
  let fastRunner = root

  while(slowRunner && fastRunner.next) {
    slowRunner = slowRunner.next
    fastRunner = fastRunner.next.next

    if (slowRunner === fastRunner) [
      return true
    ]
  }
  return false
}

// find the length of a cycle in LL

function cycle(head) {
  let slow = head
  let fast = head

  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return cycleCount(slow)
    }
  }
  return 0
}

function cycleCount(slow) {
  let current = slow
  let cycleLength = 0

  while (true) {
    current = current.next
    cycleLength += 1

    if (current === slow) {
      break
    }
  }
  return cycleLength
}

