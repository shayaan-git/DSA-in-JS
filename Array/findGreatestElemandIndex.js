function findGreatestElementAndIndex(arr) {
    // Write your logic here
    let maxElement = arr[0];
    let maxIndex = 0; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
            maxIndex = i;
        }
    }
    return [maxElement, maxIndex]

}

module.exports = { findGreatestElementAndIndex };