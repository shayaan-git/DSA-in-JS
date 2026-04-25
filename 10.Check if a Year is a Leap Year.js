function isLeapYear(year) {
  // Write your logic here
  if ((year % 4 == 0 && year % 100 != 0) || year % 2 != 0 || year % 400 == 0)
    return "Leap Year";
  else return "Not a Leap Year";
}

module.exports = { isLeapYear };
