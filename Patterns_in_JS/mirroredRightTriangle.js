function printMirroredRightTriangle(n) {
    // Write your logic here
    for (let i = 1; i <= n; i++) {
        // spaces
        for (let j = n; j > i; j--) {
            process.stdout.write("  ");
        }
        // stars
        for (let k = 1; k <= i; k++) {
            process.stdout.write("* ");
        }
        process.stdout.write("\n");
    }
}

module.exports = { printMirroredRightTriangle };

//         *
//       * *
//     * * *
//   * * * *
// * * * * *