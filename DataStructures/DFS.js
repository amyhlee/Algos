// find if path exists from root to leaf

function findSum(root, sum) {
  if (root === null) return false

  if (root.val === sum && root.left === null && root.right === null) {
    return true
  }

  return findSum(root.left, sum - root.val) || findSum(root.right, sum - root.val)
}

// return all paths that equals sum from root to leaf

function findPaths(root, sum) {
  let allPaths = []

  findPathRecursive(currentNode, sum, [], allPaths)
  return allPaths
}

function findPathRecursive(currentNode, sum, currentPath, allPaths) {
  if (root === null) return

  currentPath.push(currentNode.value)

  if (currentNode.value === sum && currentNode.left === null && currentNode.right === null) {
    allPaths.push(currentPath)
  } else {
    findPathRecursive(currentNode.left, sum - currentNode.value, currentPath, allPaths)
    findPathRecursice(currentNode.right, sum - currentNode.value, currentPath, allPaths)
  }
  currentPath.pop()
}
