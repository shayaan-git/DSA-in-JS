function moveZerosToEnd(arr) {
    // Write your logic here

    let result = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result.push(arr[i])
        }
    }

    while (zeroCount > 0) {
        result.push(0)
        zeroCount--
    }

    return result;

}

module.exports = { moveZerosToEnd };