function countWords(paragraph) {
  const words = paragraph.trim().split(/\s+/);
  return words.length;
}

const para = "This is a sample paragraph for testing the function that counts the number of words in a paragraph.";
const result = countWords(para);

console.log(`Paragraph: "${para}"`);
console.log(`Number of words: ${result}`);
