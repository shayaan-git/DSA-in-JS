function printVShapePattern(n) {
    // Write your logic here
    for (let i = 0; i < n; i++) {

        // left space
        for (let j = 0; j < i; j++) {
            process.stdout.write(" ");
        }

        // left star
        process.stdout.write("*");

        // middle space
        for (let j = 2 * n - 3; j > (2 * i); j--) {
            process.stdout.write(" ");
        }

        // right star
        if (i !== n - 1) {
            process.stdout.write("*");
        }

        // right spaces ki zaruat nahi -- aage invisible spaces print karwane ka koi sense nahi banta.
        // for (let j = 0; j <= i; j++) {
        //     process.stdout.write("-");
        // }
        process.stdout.write("\n")
    }
}

module.exports = { printVShapePattern };

// *       * 
//  *     *  
//   *   *   
//    * *    
//     * 