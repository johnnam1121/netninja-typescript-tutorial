// classes
// all classes are public by default. same thing as doing something like this:
// public amount: number;
// public is an access modifier
// public means you can read and modify the content
// readonly means only read inside and outside but cannot change
// private means only read and change inside the class
// class Invoice {
//   readonly client: string; // can only read it from inside and outside the class
//   private details: string;
//   public amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`; // in here this.details works even tho it is private because it is in the class
//   }
// }
//this is a quicker way to type the above code but only if you're using access modifiers
// export class Invoice {
//   constructor( // basically putting the access modifiers inside as a constructors parameters
//     readonly client: string,
//     private details: string,
//     public amount: number,
//   ) { }
//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`; // in here this.details works even tho it is private because it is in the class
//   }
// }
// import { Invoice } from './classes/invoice.js' // modules lesson 14
// // must import the js file instead of the ts file since typescript isn't read by the browser
// const invOne = new Invoice('mario', 'work on the mario website', 500);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client,     // inv.details, this can no longer be accessed because it is has a private access modifier
//     inv.amount, inv.format());
// })
// // const form = document.querySelector('.new-item-form') as HTMLFormElement;
// // console.log(form.children);
// // // inputs
// // const type = document.querySelector('#type') as HTMLInputElement;
// // const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// // const details = document.querySelector('#details') as HTMLInputElement;
// // const amount = document.querySelector('#amount') as HTMLInputElement;
// // form.addEventListener('submit', (e: Event) => {
// //   e.preventDefault();
// //   console.log(
// //     type.value,
// //     tofrom.value,
// //     details.value,
// //     amount.valueAsNumber
// //   );
// // });
// lesson 15 interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: 'John',
//   age: 29,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log('I spent', amount);
//     return amount;
//   }
// };
// let someone: IsPerson; // i can declare this now and use it later. but must match the format
// const greetPerson = (person: IsPerson) => {
//   console.log('hello', person.name)
// }
// greetPerson(me)
// console.log(me)
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// lesson 16 interfaces with classes
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 300);
// let docs: HasFormatter[] = [] // only objects that implement this interface can go in this array
// docs.push(docOne, docTwo);
// console.log(docs);
// const invOne = new Invoice('mario', 'work on the mario website', 500);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client,
//     inv.amount, inv.format());
// })
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// // lesson 17
// const ul = document.querySelector('ul')!;
// const list = new ListTemplate(ul);
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   let doc: HasFormatter;
//   if (type.value === 'invoice') {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }
//   // console.log(doc);
//   // now instead of just console logging it, we are calling the ListTempmlate class to render the content
//   list.render(doc, type.value, 'end')
// });
// lesson 18 generics
// const addUID = (obj: object) => {
// const addUID = <T>(obj: T) => { // so by doing this instead of the top one,
//typescript can capture the values so we can access each thing in the object
// the problem with it tho is that T is not a specific type and doesn't have to be an object anymore..
// const addUID = <T extends object>(obj: T) => { // by doing this, it now forces the object type so we cannot just add
// any type of value to the addUID method
// const addUID = <T extends { name: string }>(obj: T) => { // can take this further now by specifying the type of object items we want
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// }
// let docOne = addUID({ name: 'yoshi', age: 40 });
// console.log(docOne.name)
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   // data: '???' what if we want the ??? to be of any type
//   // data: object if we did this then below in docThree it MUST be an object.
//   // instead we can do this:
//   data: T
// }
// const docThree: Resource<string> = {
//   uid: 1,
//   resourceName: 'person',
//   data: 'test'
// }
// const docFour: Resource<object> = {
//   uid: 2,
//   resourceName: 'person',
//   data: { name: 'test' }
// }
// const docFive: Resource<string[]> = {
//   uid: 3,
//   resourceName: 'person',
//   data: ['name1', 'name2', 'name3']
// }
// console.log(docThree, docFour, docFive)
// // lesson 19 ENUMS
// enum resourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// // basically if I know there are going to be different things for resource type I can declare it up here.
// interface Resource<T> {
//   uid: number;
//   resourceName: resourceType;       // sets it as one of the above resource types
//   data: T
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: resourceType.BOOK,
//   data: { title: 'something in the wind' }
// }
// const docFour: Resource<object> = {
//   uid: 2,
//   resourceName: resourceType.AUTHOR,
//   data: { title: 'learning typescript' }
// }
// console.log(docThree, docFour)
// lesson 20 tuples
// inputs
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // console.log(doc);
    // now instead of just console logging it, we are calling the ListTempmlate class to render the content
    list.render(doc, type.value, 'end');
});
// tuples
let arr = ['ryu', 23, true];
arr[0] = false;
arr[1] = 'john';
// these arrays are still flexible because as long as the type changes are according the the types
// in the initial array, itll be ok.
// tuples basically make it so you cannot change the formation of the types.
let tup = ['ryu', 23, true];
// now if i try to change any of them to a incorrect type, we get an error
// tup[0] = 25; // this throws an error because it must be a string
let student;
student = ['joey', 202020]; // basically this way I know the first one must always be a name/string and the second is a number
