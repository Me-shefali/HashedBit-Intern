function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

const original = "I love prgramming very much";
const corrected = correctfn(original, "prgramming", "programming");

console.log("Original: " + original);
console.log("Corrected: " + corrected);
