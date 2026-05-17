function calculatePower(a, b) {
    // Write your logic here
    let result = 1;
    for(let i=1; i<=b; i++){
        result *= a
    }
    return result
}

module.exports = { calculatePower };