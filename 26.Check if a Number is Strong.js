function isStrongNumber(n) {
  let original = n;
  let sum = 0;

  while (n > 0) {
    let digit = n % 10; // Digits Nikalo n mei jitne digits hain

    // factorial of digit
    let fact = 1;
    for (let i = 2; i <= digit; i++) {
      fact *= i;
    }

    sum += fact;
    n = Math.floor(n / 10);
  }

  return sum === original ? "Yes" : "No";
}

module.exports = { isStrongNumber };

/*
pura flow dekho:-
Bade problem ko tod diya:
Number save karo (compare karna hai baad me)
Har ek digit nikalo (while)
Har digit ka factorial nikalo (for)
Sum karo
Compare karo
Ye structure naturally nikla. Magic nahi hai.
*/


/*
n = Math.floor(n / 10);
Ye actually karta kya hai? 
Example lo: 
n = 145
Step 1 
Last digit: 
145 % 10 = 5 
Ab agar number same ka same rakhenge to har baar 5 hi milega. 
Toh number ko trim karna padega. 
Step 2
145 / 10 = 14.5 
Par hume decimal nahi chahiye. 
Isliye: 
Math.floor(14.5) = 14 
Ab n = 14 
Next loop: 
14 % 10 = 4 
Phir: 
14 / 10 = 1.4
Math.floor(1.4) = 1 
n = 1 
Next: 
1 % 10 = 1 
Phir: 
1 / 10 = 0.1
Math.floor(0.1) = 0 
n = 0 
Ab while condition: 
while (n > 0) 
False ho jaata hai. Loop khatam. 
Game over.

*/