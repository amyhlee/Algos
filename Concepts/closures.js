//Closures and first class functions

//write a function called partial that makes the following work

function add(a, b) {
  return a + b
}

const add5 = partial(add ,5)

add5(4) // 9

//partial accepts two arguments, function and number
//partial must return a function, because we're assigning its return value to add5 and then calling add5()

function partial(fn, num) {
  return function(b) {
    return fn(num, b)
  }
}

