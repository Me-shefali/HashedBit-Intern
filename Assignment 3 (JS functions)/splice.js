let string = 'INDIA';

let charArray = string.split('');

charArray.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');

let output = charArray.join('');

console.log(output); 
