class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function traverse(root) {
  let result = []

  if (root === null) {
    return result
  }

  const queue = new Deque()
  queue.push(root)
  while(queue.length) {
    let currentLevel = []
    for (let i = 0; i < queue.length; i++) {
      let currentNode = queue.shift()
      currentLevel.push(currentNode.val)

      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
    result.push(queue)
  }
  return result
}

function traverse2() {
  let result = []
  let queue = []
  let node = this.root

  queue.push(node)

  while (queue.length) {
    node = queue.shift()
    result.push(node)

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return result
}

function minimumDepth(root) {
  let queue = []

  if (root === null) return 0

  queue.push(root)
  let minimumDepth = 0
  while (queue.length) {
    minimumDepth++
    let currentLevel = []
    let levelSize = queue.length

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift()
      currentLevel.push(currentNode.val)

      if (currentNode.left === null && currentNode.right === null) {
        return minimumDepth
      }
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
  }
}
