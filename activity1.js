// 1.Create a variable using var to store your name

// var name = "Mark Anthony C. Sood";
// console.log(name);

// 2.Create a variable using let to store your age, but store it as a string, not a number.

// let age = "19";
// console.log(age);

// 3. Create a constant PI with the value 3.1416 and try reassigning it — observe the error. 

// const PI = 3.1416;
// PI = 3.14;
// console.log(PI);

// 4. Create variable boolean isStudent, but set it dynamically to true if your age is less than 25, otherwise false.

// let age = "24";
// let isStudent = age < 25;
// console.log('Age: ', age);
// console.log('Is Student? ',isStudent);

// 5. Create An object person with nested properties. 

// let person = {
//     name: 'Marko',
//     age: '19',
//     school: 'Holy Cross of Davao College',
//     course: 'BSIT',
//     address: "Samal City"
// };

// console.log('Name:', person.name);
// console.log('Age:', person.age);
// console.log('School:', person.school);


// 6. An array colors containing at least 5 color names (include at least one repeated value). 

// let colors = ['black', 'red', 'blue', 'black', 'green'];
// console.log('Color:', colors[3]);


// 1. Reverse and Transform

// let fruits = ['banana', 'orange', 'mango', 'pineapple', 'apple'];
// let rev = [];

// for (let outer = 0; outer < fruits.length; outer++) {
//     reversedWord = "";

//     for (let inner = fruits[outer].length - 1; inner >= 0; inner--) {
//         reversedWord += fruits[outer][inner];
//     }

//     reverse = reversedWord.toUpperCase();
//     rev.push(reverse);
// }

// console.log('Fruits: ',fruits);
// console.log('REVERSED WORDS: ',rev);






///2. Filtering and Counting (20 pts)
// let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
// Use a for...of loop to:
// Count how many numbers are even and greater than 20.
// Store them in a new array.
// Print:
// "Found X numbers: [list of numbers]"

// let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
// let evenAndGreaterThan20 = [];

// for (let number of numbers) {
//     if (number % 2 === 0 && number > 20) {
//         evenAndGreaterThan20.push(number);
//     }
// }

// console.log(`Found ${evenAndGreaterThan20.length} numbers: [${evenAndGreaterThan20}]`);
