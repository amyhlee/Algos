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
