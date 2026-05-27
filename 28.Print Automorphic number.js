function isAutomorphic(n) {
  // Write your logic here
  let sqr = n ** 2; // n= 25
  let digits = n.toString().length; // 2

  let lastdigits = sqr % 10 ** digits;

  if (lastdigits === n) {
    return "Yes";
  } else return "No";
}

module.exports = { isAutomorphic };


/* OR */

function isAutomorphic(n) {
    let sqr = n * n
    
    while (n > 0) {

        if (n % 10 !== sqr % 10) {
            return "No"
        }

        n = Math.floor(n / 10)
        sqr = Math.floor(sqr / 10)
    }
    return "Yes"
}
module.exports = { isAutomorphic }