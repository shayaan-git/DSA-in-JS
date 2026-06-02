function printRightTriangleAlphabets(n) {
    // Write your logic here
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(String.fromCharCode(64 + j) + " ")
        }
        process.stdout.write("\n");
    }
}

module.exports = { printRightTriangleAlphabets };

// A
// A B
// A B C
// A B C D
// A B C D E