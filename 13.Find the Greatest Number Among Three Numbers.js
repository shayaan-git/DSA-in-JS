function findGreatest(a, b, c) {
  // Write your logic here

  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

module.exports = { findGreatest };

// --------------------OR Another WAY: -------------------------

function findGreatest(a, b, c) {
  // Write your logic here

  return Math.max(a, b, c);
}

module.exports = { findGreatest };
