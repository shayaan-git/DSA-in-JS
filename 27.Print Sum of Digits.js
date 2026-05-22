function sumOfDigits(n) {
    // Write your logic here
    let sum = 0;
    while (n > 0) {
        let rem = n % 10
        sum += rem
        n = Math.floor(n / 10)
    }
    return sum
}

module.exports = { sumOfDigits };