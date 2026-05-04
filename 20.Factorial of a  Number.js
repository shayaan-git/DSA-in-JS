function factorial(n) {
  if (n < 0) return "Factorial negative number ka nahi hota";

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

module.exports = { factorial };