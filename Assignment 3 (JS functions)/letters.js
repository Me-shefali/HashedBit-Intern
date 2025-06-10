const readline = require('readline');

// Create readline interface to take input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string with at least 20 characters: ", function(input) {
  if (input.length < 20) {
    console.log("Please enter at least 20 characters.");
    rl.close();
    return;
  }

  const str = input.toLowerCase();
  let vowels = 0;
  let consonants = 0;

  for (let ch of str) {
    if (/[a-z]/.test(ch)) {
      if ('aeiou'.includes(ch)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  console.log(`\nInput: "${input}"`);
  console.log(`Vowels: ${vowels}`);
  console.log(`Consonants: ${consonants}`);

  rl.close();
});
