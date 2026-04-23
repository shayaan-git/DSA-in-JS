function checkVoterEligibility(name, age) {
  // Write your logic here
  if (age >= 18) return `${name} is a valid voter.`;
  else return `${name} is not a valid voter.`;
}

module.exports = { checkVoterEligibility };
