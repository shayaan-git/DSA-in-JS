function calculateCircleProperties(r) {
    // Write your logic here

    let C = 2*Math.PI*r;
    
    let A = Math.PI*(r**2);

    return [C.toFixed(2), A.toFixed(2)];
}

module.exports = { calculateCircleProperties };