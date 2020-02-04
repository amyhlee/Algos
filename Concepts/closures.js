//Closures and first class functions

//write a function called partial that makes the following work

function add(a, b) {
  return a + b
}

const add5 = partial(add ,5)

add5(4) // 9

function partial(fn, num) {
  return function(b) {
    return fn(num, b)
  }
}

