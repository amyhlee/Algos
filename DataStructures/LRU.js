class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class Cache {
  constructor(limit = 100) {
    if (typeof limit === 'number') this.limit = limit

    this.size = 0
    this.map = {}
    this.head = null
    this.tail = null
  }

}
