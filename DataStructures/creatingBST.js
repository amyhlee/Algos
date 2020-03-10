class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    if(!this.root) {
      return false
    }
      let currentNode = this.root
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left
        } else if (value > currentNode.value) {
          currentNode = currentNode.right
        } else if (value === currentNode.value) {
          return currentNode
        }
      }
    return false
  }
  remove() {

  }
}


// find largest in BST

function findLargest(root) {
  let current = root

  while(current) {
    if (!current.right) {
      return current.value
    }
    current = current.right
  }
}

// find second largest in BST
// consider two cases: if largest has no children and when largest has children
