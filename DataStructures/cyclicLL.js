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


