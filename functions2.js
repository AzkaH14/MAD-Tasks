// Ternary operator
let age1 = 21;
let display = age1 > 15 ? "Eesha" : "invalid"; 
console.log("Ternary Operator Result:", display);

// Object with dot notation access
let person = { name: "Azka", age: 21 };
console.log("Object Name Access:", person.name);

// Object destructuring
const { name, age } = person;
console.log("Destructured Name:", name);

// Simple array
let arr = [1, 2, 3];
console.log("Simple Array:", arr);

// Mixed array
const array = [1, 2, { name: "Azka", age: 21 }, 3];
console.log("Mixed Array - Age:", array[2].age);

// Map example
let a = [1, 2, 3, 4, 5];
let b = a.map(element => element + 1);
console.log("Mapped Array:", b); 

// Filter example
b = a.filter(element => element > 2);
console.log("Filtered Array:", b); 

// Reduce example
b = a.reduce((sum, current) => sum + current, 0);
console.log("Reduced Sum:", b); 

// Promise example
let makeMeal = new Promise((resolve, reject) => {
    let meal_made = true;
    if (meal_made) {
        resolve("meal is made");
    } else {
        reject("meal can't be made");
    }
});

makeMeal
    .then(result => console.log("Promise Result:", result)) 
    .catch(error => console.log("Promise Error:", error));
