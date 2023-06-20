lessons 1-12
// Net Ninjas Typescript Tutorial

// Typescript must be compiled to javascript so websites can understand it. Therefore babel is required
// Typescript is a superset of javascript. Allows types because javascript is dynamic.

// *new thing: ‘live server’ right click an html file and it will pop up as a localhost kind of window. Install as a extension

// tsc sandbox.ts sandbox.js
// typescript compiler

// cannot reassign let variables
// let character = 'mario';
// character = 20;
// this code will give errors because character cannot change. It must be a string in this case.
// const circ = (diameter: number) => {
//   return diameter * Math.PI
// }

// console.log(circ(20))

// by adding the :number it requires a number so I cannot just pass in any variable
// var circ = function (diameter) {
//     return diameter * Math.PI;
// };
// console.log(circ(5));
// Notice in here after it was compiled to javascript, there is no type check code. It looks different. So therefore the type check is done during development.
// let names = ['luigi', 'mario', 'yoshi'];

// names.push('toad');
// names.push(5)
// In this case, I must push a string into the array. Cannot push anything else. 


// lesson 4
// arrays
// let names = ['luigi', 'mario', 'yoshi'];

// names.push('toad');
// // names.push(5)

// let numbers = [10, 20, 30, 40];

// numbers.push(25);
// // numbers.push('john')

// // this array has several types. now i can change any value into anything because it was already preset as a mixed array
// let mixed = ['ken', 3, 'test', 8, 9]

// mixed.push('another test');
// mixed.push(25);


// // objects
// // these properties work the same way as types. name must be string.. age must be number..
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30,
// }
// ninja.age = 40;
// // ninja.age = 'test' this gives an error. must be same type
// ninja.skills = ['fighting', 'sneaking'] // cannot add these props because it wasnt already set

// let ninja = { // if i try something like this it doesnt work because it doesnt match the original structure.
//   name: 'mario',
//   belt: 'black',
// }

// lesson 5 

// explicit types
// initializes a variable but makes it a specific type 
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// // age = 'luigi' gives error because it already has a type

// // arrays - how to initialize an array
// let ninjas: string[] = []; //initializing it with an empty array like this might be best practice

// // union types
// let mixed: (string | number)[] = []; // can store strings or numbers in here
// let uid: string | number; // dont need parenthesis if its not an array.

// // objects
// let ninjaOne: object;
// ninjaOne = {
//   name: 'yoshi',
//   age: 30
// }

// // lesson 6
// let age: any = 25; // any means i can change the type at any time to anything
// age = 'test'; // kind of defeats the purpose of typescript but its used for when you don't know what type its gonna be

// tsc -w to keep it running

// lesson 8
// initailize a funciton
// let greet: Function;
// greet = () => {
//   console.log('hello world')
// }

// // the ? makes it an optional arguement  c?: number | string
// // the 10 is a default value. c: number | string = 10, can make it a default value
// const add = (a: number, b: number, c: number | string = 10) => { // if nothing is explicitly set or returned, it is a void return
//   console.log(a + b);
//   console.log(c);
// }
// add(5, 10);
// add(5, 10, 50); // the 50 overrides the third value

// const minus = (a: number, b: number): number => { // by adding the :number it explicitly makes the return a number. not required
//   return (a - b);
// }

// let result = minus(10, 7); // the result variable is a type number because it is inferred by the function

// lesson 9 type aliases

// by using type aliases this code gets reduced to
// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: { name: string, uid: string | number }) => {
//   console.log(`${user.name} has a uid of ${user.uid}`)
// }
// const greetAgain = (user: { name: string, uid: string | number }) => {
//   console.log(`${user.name} has a uid of ${user.uid}`)
// }

// THIS --- bit easier to read/type
// type StringOrNum = string | number; // type alias. basically makes it easier to type it rather than repeating ourselves
// type ojbWithName = { name: string, uid: StringOrNum }

// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: ojbWithName) => {
//   console.log(`${user.name} has a uid of ${user.uid}`)
// }
// const greetAgain = (user: ojbWithName) => {
//   console.log(`${user.name} has a uid of ${user.uid}`)
// }

// lesson 10 function signatures
// () => void // this function takes no arguments and returns a void

// example 1
// let greet: (a: string, b: string) => void

// greet = (name: string, greeting: string) => { // this function does not have any errors because it follows 
//   console.log(`${name} says ${greeting}`)     // the same signature of the declared greet since it doesnt return anything and the types are the same
// }

// // example 2
// let calc: (a: number, b: number, c: string) => number

// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// }

// // example 3
// let logDetails: (obj: { name: string, age: number }) => void

// logDetails = (ninja: { name: string, age: number }) => {
//   console.log(`${ninja.name} is ${ninja.age}`)
// }

// logDetails({ name: 'john', age: 29 });

// lesson 11
// const anchor = document.querySelector('a');
// so basically query selecting all anchor tags and getting an error from typescript saying that it could be null. some ways to fix it:
// this way adds the ! at the end basically saying i know it will for a fact return something
// const anchor = document.querySelector('a')!;
// // this way checks to see if anchor has anything first
// if(anchor) {
//   console.log(anchor.href);
// }
// // this is optional chaining. same result but short hand for console.log(anchor.href | undefined)
// console.log(anchor?.href);

// const form = document.querySelector('form')!; this might cause problems because it might not pic the correct form
// in this case itll just be an element type since it doesn't know what it is
// const form = document.querySelector('.new-item-form') as HTMLFormElement; // the as is known as type casting

// // console.log(form.children)

// // inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.group(type.value, toFrom.value, details.value, amount.valueAsNumber)
// })

// lesson 12 classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}

const invoiceOne = new Invoice('john', 'work on website', 250);
const invoiceTwo = new Invoice('mario', 'work on website', 500);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);

invoiceOne.client = 'yoshi';
invoiceTwo.amount = 1000;
console.log(invoices);

continues lesson 13 in the src folder
