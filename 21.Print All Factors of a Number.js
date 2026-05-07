function printFactors(n) {
  // Write your logic here
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
}

module.exports = { printFactors };

// --------------------OR Another WAY: -------------------------

function printFactors(n) {
  // Write your logic here
  let small = [];
  let large = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      small.push(i);

      if (i !== n / i) {
        large.push(n / i);
      }
    }
  }

  small.forEach((num) => process.stdout.write(num + " "));
  large.reverse().forEach((num) => process.stdout.write(num + " "));

  // // Pehle small print karo
  // for (let num of small) {
  //     process.stdout.write(num + ' ');
  // }

  // // Fir large reverse me
  // for (let i = large.length - 1; i >= 0; i--) {
  //     process.stdout.write(large[i] + ' ');
  // }
}

module.exports = { printFactors };
