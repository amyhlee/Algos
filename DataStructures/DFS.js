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

// find the sum of all the paths from root to leaf

function findAllSums(root) {
  return findSumRecursive(root, 0)
}

function findSumRecursive(currentNode, sum) {
  if (currentNode === null) return 0

  sum += currentNode.val

  if (currentNode.left === null && currentNode.right === null) {
    return sum
  }

  return findSumRecursive(currentNode.left, sum) +
    findSumRecursive(currentNode.right, sum)
}




// given a binary tree and number sequence, find if it exists from root to leaf

function findMatch(root, sequence) {
  if (root === null) return sequence.length === 0

  return findMatchRecursive(root, sequence, 0)
}

function findMatchRecursive(current, sequence, sequenceIndex) {
  if (current === null) return false

  const seqLen = sequence.length - 1

  if (sequenceIndex >= seqLen || current.val !== sequence[sequenceIndex]) {
    return false
  }

  if (current.left === null && current.right === null && sequenceIndex === seqLen - 1) {
    return true
  }

  return findMatchRecursive(current.left, sequence, sequenceIndex + 1) ||
    findMatchRecursive(current.right, sequence, sequenceIndex + 1)
}
