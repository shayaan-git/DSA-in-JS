function findSecondGreatestElement(arr) {
    // Write your logic here
    let max = arr[0];
    let smax = 0;   // -infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            smax = max;
            max = arr[i];
        } else if (arr[i] > smax && arr[i] !== max) {
            smax = arr[i]
        }

    }
    return smax

}

module.exports = { findSecondGreatestElement };