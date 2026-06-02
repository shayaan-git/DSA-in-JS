function printInvertedRightTriangle(n) {
    // Write your logic here
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            process.stdout.write("* ")
        }
        process.stdout.write("\n");
    }
}

module.exports = { printInvertedRightTriangle };

// * * * * *
// * * * *
// * * *
// * *
// *