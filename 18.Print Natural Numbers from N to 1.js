/**
 * prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
  //Write your code here
  for (i = n; i >= 1; i--) {
    process.stdout.write(i + " ");
  }
}

module.exports = { printNumbers };

// --------------------OR Another WAY: -------------------------

/**
 * Recursively prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
  //Write your code here
  if (n <= 0) return;
  process.stdout.write(n + " ");
  printNumbers(n - 1);
}

module.exports = { printNumbers };
