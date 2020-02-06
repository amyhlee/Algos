/* Create a data structure KStacks that represents a set of k stacks. It should only use one array. The following methods must be supported by KStacks.

push(val, stackNumber) –> pushes x to stack number ‘sn’ where sn is from 0 to k-1
pop(stackNumber) –> pops an element from stack number ‘sn’ where sn is from 0 to k-1
*/

class KStacks {
  constructor(size) {
    this._storage = []
    this._lengths = new Array(size).fill(0)
  }
  _getLength(stackId) {
     return this._lengths[stackId - 1]
  }
}
