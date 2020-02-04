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
  set(key, value) {
    const node = new Node(key, value)

    if (this.map[key]) {
      this.remove(key)
    } else {
      if (this.size >= this.limit) {
        delete this.map[this.tail]
        this.size--
        this.tail = this.tail.prev
        this.tail.next = null
      }
    }
    this.setHead(node)
  }
  remove(key) {
    //check if key exists
    if (this.map[key]) {
      const node = this.map[key]

      //update head and tail accordingly
      if (node.prev !== null) {
        node.prev.next = node.next
      } else {
        this.head = node.next
      }
      if (node.next !== null) {
        node.next.prev = node.prev
      } else {
        this.tail = node.prev
      }
      //removal
      delete this.map[key]
      this.size--
    }
  }
  clear(limit = 10) {
    if (typeof limit === 'number') this.limit = limit

    this.size = 0
    this.map = {}
    this.head = null
    this.tail = null
  }

}
