// helper.js (template)
class Solution {
  /**
   * @param {bigint[]} arr - array of integers as BigInt
   * @return {bigint} sum of absolute differences across all unordered pairs
   */
  sumOfAbsDiff(arr) {
    // Write your code here

    arr.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    let prefixSum = 0n;
    let result = 0n;

    for (let i = 0; i < arr.length; i++) {
      result += arr[i] * BigInt(i) - prefixSum;
      prefixSum += arr[i];
    }

    return result;

    return 0n;
  }
}

module.exports = { Solution };
