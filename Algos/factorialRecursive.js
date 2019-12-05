// write a function that returns the factorial of a given parameter

function factorial(number) {
  let answer = 1
  for (let i = 2; i <= number; i++) {
    product *= i
  }
  return product
}

function factorialRecursive(number) {
  if (number < 2) {
    return number
  }
  return number * factorialRecursive(number - 1)
}
