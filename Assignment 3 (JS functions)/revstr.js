function reverseString(str) {
  return str.split('').reverse().join('');
}

const input = "Hello";
const output = reverseString(input);

console.log(`Input: ${input}`);
console.log(`Output: ${output}`);
