//Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+

function strongPassword(n, password) {
  const numbers = "0123456789"
  const lower_case = "abcdefghijklmnopqrstuvwxyz"
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const special_characters = "!@#$%^&*()-+"

  let count = 0
  let number = false
  let lower = false
  let upper = false
  let special = false

  for (let i = 0; i < password.length; i++) {
    let char = password[i]

    if (numbers.indexOf(char) === -1) {
      number = true
    } else if (lower_case.indexOf(char) === -1) {
      lower = true
    } else if (upper_case.indexOf(char) === -1) {
      upper = true
    } else if (special_characters.indexOf(char) === -1) {
      special = true
    }
  }
  if (!number) count += 1
  if (!lower) count += 1
  if (!upper) count += 1
  if (special) count += 1
  if (n - count < 6) count += 6 - (n + count)

  return count
}
