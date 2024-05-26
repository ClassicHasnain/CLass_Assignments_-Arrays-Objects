// const fruits =[ "apple","banana","mango","orange"];
// console.log(fruits);
//                                       Assignment // 2 ::
// const number :number []= [10, 20, 30,  40]
// console.log(number);
//                                         Assignment 03  ::
// let fruits =[ "apple","banana","mango","orange"];
// let thirdfruit : string = fruits[2];
// console.log(thirdfruit);
//                                           Assignment 04
// Change the second element of the numbers array to 25.
var number = [10, 20, 30, 40];
number.splice(1, 1, 25);
console.log(number);
//                                            Assignment 05 
// Question 5
// Add the element "grape" to the end of the fruits array using the
// // method.
// let fruits =[ "apple","banana","mango","orange"];
// fruits.push ("Grape");
// console.log(fruits);
//                                              Assignment 06 ::
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.
// let fruits =[ "apple","banana","mango","orange"];
// let lastFruit :string = fruits.splice(-1)[0];
// console.log(fruits);
// console.log(lastFruit);
//                                               Assignment 07 ::
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
// 1. index number. 
// 2.  kitne delete karne hain.
// 3. assin karaya firstFruit variable mein.
// let fruits =[ "apple","banana","mango","orange"];
// let firstFruit :string = fruits.splice(0,1)[0];
// console.log(fruits);
// console.log(firstFruit);
// ager mein 0,2 likh rha ho to matlbab ye ke 0 index  se le ker 2 tak delete ho gi or fir print karwaya seconfd variable mein 1 means  apple is ka index 0 se start nhi hota splice mein 
//                                                Assignment 08 ::
// let fruits =[ "apple","banana","mango","orange"];
// fruits.unshift("Kiwi");
// console.log(fruits);
//                                                 Assignment 09 ::
// Remove 2 elements from the fruits array starting from index 1
// using the method.
// let fruits =[ "apple","banana","mango","orange"];
// fruits.splice(1,2)
// console.log(fruits);
//                                                  Assignment 10 ::
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
// const fruits =[ "apple","banana","mango","orange"];
// fruits.splice(2,0,"pineapple","pear");
// console.log(fruits);
//                                                  Assignment 11 ::
// SLICE METHOD KA USE KIA HAI 
// const fruits = ["apple", "banana", "mango", "orange"];
// const citrusFruits = fruits.slice(0, 2); 
// console.log(citrusFruits); 
//                                                  Assignment 12 ::
var fruits = ["apple", "banana", "mango", "orange"];
var lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);
