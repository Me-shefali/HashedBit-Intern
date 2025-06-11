// 1. Variable Declarations and Scope
function variableScopeDemo() {
    var a = "I am var";      
    let b = "I am let";      
    const c = "I am const";  

    if (true) {
        var a = "I am var inside block"; 
        let b = "I am let inside block"; 
        const c = "I am const inside block"; 
        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);
}
variableScopeDemo();
console.log(" ");

// 2. Return second fruit from array
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
function getSecondFruit() {
    return fruits[1];
}
console.log("Second fruit:", getSecondFruit());
console.log(" ");

// 3. Push and Pop from Array
function pushPopArray(arr) {
    arr.push("New Element");
    console.log("Modified array:", arr);
    arr.pop(); 
    return arr;
}
console.log("Modified array:", pushPopArray(["a", "b", "c"]));
console.log(" ");

// 4. Square Numbers Using map()
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log("Squared numbers:", squareNumbers(numbers));
console.log(" ");

// 5. Filter Odd Numbers Using filter()
function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));
console.log(" ");

// 6. Greeting Using Object Properties
const person = {
    name: "Shefali",
    age: 21,
    occupation: "Engineer"
};
function greetPerson(p) {
    console.log(`Hello, my name is ${p.name}. I am ${p.age} years old and work as a ${p.occupation}.`);
}
greetPerson(person);
console.log(" ");

// 7. Calculate Area of Rectangle
function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}
console.log("Area of rectangle:", calculateArea({ width: 5, height: 10 }));
console.log(" ");

// 8. Return Object Keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log("Keys of object:", getObjectKeys({ name: "John", age: 30, city: "Delhi" }));
console.log(" ");

// 9. Merge Two Objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log("Merged object:", mergeObjects({ a: 1 }, { b: 2 }));
console.log(" ");

// 10. Sum Numbers Using reduce()
const nums = [1, 2, 3, 4, 5];
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of numbers:", sumArray(nums));
