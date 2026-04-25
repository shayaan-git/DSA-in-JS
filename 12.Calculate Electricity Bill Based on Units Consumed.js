function calculateElectricityBill(unit) {
  // Write your logic here
  if (unit > 400) {
    return (unit * 13).toFixed(1);
  } else if (unit > 200) {
    return (unit * 8).toFixed(1);
  } else if (unit > 100) {
    return (unit * 6).toFixed(1);
  } else {
    return (unit * 4.2).toFixed(1);
  }
}

module.exports = { calculateElectricityBill };

// --------------------OR Another WAY: -------------------------

function calculateElectricityBill(unit) {
  let rate;

  if (unit > 400) rate = 13;
  else if (unit > 200) rate = 8;
  else if (unit > 100) rate = 6;
  else rate = 4.2;

  return (unit * rate).toFixed(1);
}

module.exports = { calculateElectricityBill };
