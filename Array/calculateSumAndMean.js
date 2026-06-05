function calculateSumAndMean(arr, n) {
    // Write your logic here
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let mean = Number(sum / n).toFixed(1);
    return [sum, mean];
}

module.exports = { calculateSumAndMean };