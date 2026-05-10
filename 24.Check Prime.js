function isPrime(n) {
  // Write your logic here
  if (n <= 1) {
    return "Not Prime";
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

module.exports = { isPrime };

/*
Prime checking blind loop nahi hota.
Smart order hota hai:

n <= 1 → Not prime
n == 2 → Prime
Even number? → Not prime
Phir √n tak check karo
*/
