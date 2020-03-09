// find if path exists from root to leaf

function findSum(root, sum) {
  if (root === null) return false

  if (root.val === sum && root.left === null && root.right === null) {
    return true
  }

  return findSum(root.left, sum - root.val) || findSum(root.right, sum - root.val)
}
