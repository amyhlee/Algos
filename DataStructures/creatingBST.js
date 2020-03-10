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

function findSecondLargest(root) {
  let current = root

  if (!root || !root.left && !root.right) {
    throw Error ('tree must have at least 2 nodes')
  }

  while (current) {
    //1st case: current is largest and has subtree, second largest within subtree

    if (current.left && !current.right) {
      return findLargest(current.left)
    }

    //2nd case: if current is parent of largest and largest has no children
    //current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value
    }
    current = current.value
  }
}
