function checkChar(ch) {
  //write your code here
  if (ch.length !== 1 || typeof ch !== "string") return "Invalid input";
  if ("aeiouAEIOU".includes(ch)) return "Vowel";
  if (!"aeiouAEIOU".includes(ch) && /[a-zA-Z]/.test(ch)) return "Consonant";
  return "Invalid input";
}

module.exports = { checkChar };
