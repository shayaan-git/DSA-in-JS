function sumEvenOddInRange(start, end) {
    // Write your logic here
    if (start > end) {
        let t = start;
        start = end;
        end = a;
    }
    let evenSum = 0
    let oddSum = 0

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i
        }
    }
    return [evenSum, oddSum];
}

module.exports = { sumEvenOddInRange };