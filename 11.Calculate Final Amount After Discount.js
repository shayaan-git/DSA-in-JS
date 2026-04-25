function calculateFinalAmount(amount) {
  let discount = 0;

  if (amount >= 0 && amount <= 5000) {
    discount = 0;
  } else if (amount >= 5001 && amount <= 7000) {
    discount = 0.05;
  } else if (amount >= 7001 && amount <= 9000) {
    discount = 0.1;
  } else if (amount > 9000) {
    discount = 0.2;
  }

  let final_amount = amount - amount * discount;
  return final_amount;
}

module.exports = { calculateFinalAmount };

// --------------------OR Another WAY: -------------------------

function calculateFinalAmount(amount) {
  if (amount > 9000) {
    return amount * 0.8;
  } else if (amount > 7000) {
    return amount * 0.9;
  } else if (amount > 5000) {
    return amount * 0.95;
  } else {
    return amount;
  }
}

module.exports = { calculateFinalAmount };
