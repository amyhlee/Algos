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
  setHead(node) {
    node.next = this.head
    node.prev = null
    //if head exists
    if (this.head !== null) {
      this.head.prev = node
      this.head = node
    }
    //if tail does not exist
    if (this.tail === null) {
      this.tail = node
    }
    this.map[node.key] = node
    this.size++
  }
  get(key) {
    if (this.map[key]) {
      const value = this.map[key].value
      const node = new Node(key, value)
      this.remove(key)
      this.setHead(node)
      return value
    }
  }



}
