function calculateTriangleArea(a, b, c) {
    // Write your logic here
    let s = ((a+b+c)/2);
    let A = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return A.toFixed(2)
}

module.exports = { calculateTriangleArea };