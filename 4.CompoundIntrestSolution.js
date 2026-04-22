function calculateCompoundInterest(P, r, t, n) {
  // Write your logic here
  let A = P * Math.pow(1 + r / n, n * t);
  let CI = (A - P).toFixed(2);
  return CI;
}

module.exports = { calculateCompoundInterest };

// --------------------OR Another WAY: -------------------------

function calculateCompoundInterest(P, r, t, n) {
  // Write your logic here
  const A = P * Math.pow(1 + r / n, n * t);

  // Compound Interest
  const CI = A - P;

  // Return rounded to 2 decimal places
  return CI.toFixed(2);
}

module.exports = { calculateCompoundInterest };
