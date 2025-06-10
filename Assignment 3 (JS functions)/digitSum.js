const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function repeatedDigitSum(num) {
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
  }
  return num;
}

rl.question("Enter a number: ", function(input) {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else {
    const result = repeatedDigitSum(number);
    console.log(`Repeated digit sum of ${number} is: ${result}`);
  }

  rl.close();
});
