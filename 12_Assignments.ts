
// Question 1

// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".

// 

let fruits =[ "apple","banana","mango","orange"];
console.log(fruits)

// Question 2

// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.

const numbers :number []= [10, 20, 30,  40]
console.log(numbers);

// Question 3

// Access the third element of the fruits array and assign it to a
// variable named thirdFruit

fruits = [ "apple","banana","mango","orange"];
let thirdfruit : string = fruits[2];
console.log(thirdfruit);                                          

//Question 4

// Change the second element of the numbers array to 25.s array to 25.

const number :number []= [10, 20, 30,  40]
number.splice(1,1,25)
console.log(number);

// Question 5

// Add the element "grape" to the end of the fruits array using the
// // method.

fruits = [ "apple","banana","mango","orange"];
fruits.push ("Grape");
console.log(fruits);

// Question 06
 
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.


fruits = [ "apple","banana","mango","orange"];
let lastFruit :string = fruits.splice(-1)[0];
console.log(fruits);
console.log(lastFruit);


// Question 07

// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
// 1. index number. 
// 2.  kitne delete karne hain.
// 3. assin karaya firstFruit variable mein.

fruits = [ "apple","banana","mango","orange"];
let firstFruit :string = fruits.splice(0,1)[0];
console.log(fruits);
console.log(firstFruit);

// ager mein 0,2 likh rha ho to matlbab ye ke 0 index  se le ker 2 tak delete ho gi or fir print karwaya seconfd variable mein 1 means  apple is ka index 0 se start nhi hota splice mein 


                                     
// Question 8

// Add the element "kiwi" to the beginning of the fruits array
// using the method.

fruits = [ "apple","banana","mango","orange"];

fruits.unshift("Kiwi");
console.log(fruits);


// Question 09

// Remove 2 elements from the fruits array starting from index 1
// using the method.

fruits = [ "apple","banana","mango","orange"];
fruits.splice(1,2)
console.log(fruits);


// Question 10

// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.

fruits = [ "apple","banana","mango","orange"];
fruits.splice(2,0,"pineapple","pear");
console.log(fruits);


// Question 11

// Create a new array named citrusFruits that contains the first
// // two elements of the fruits array using the method.
// SLICE METHOD KA USE KIA HAI 

 fruits = ["apple", "banana", "mango", "orange"];
const citrusFruits = fruits.slice(0, 2); 
console.log(citrusFruits); 

// Question 12

// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.

fruits = ["apple", "banana", "mango", "orange"];
let lastTwoFruits = fruits.slice(-2); 
console.log(lastTwoFruits); 
