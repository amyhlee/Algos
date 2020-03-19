// Given a number, generate a string that produces only odd numbers of a or b

function generate(num) {
  return (n % 2 === 0) ? 'a'.repeat(n - 1) + 'b' : 'b'.repeat(n)
}

