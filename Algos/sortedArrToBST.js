function TreeNode(value) {
  this.value = value
  this.right = null
  this.left = null
}

const sortedArrToBST = function(nums) {
  if (!nums.length) return null

  const middle = Math.floor(nums.length / 2)
  const rootNode = new TreeNode(nums[middle])

  rootNode.left = sortedArrToBST(nums.slice(0, middle))
  rootNode.right = sortedArrToBST(nums.slice(middle + 1))

  return rootNode
}
