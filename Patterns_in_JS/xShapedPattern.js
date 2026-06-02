function printXShapePattern(n) {
    // Write your logic here
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }

}

module.exports = { printXShapePattern };

// *   *
//  * * 
//   *  
//  * * 
// *   *