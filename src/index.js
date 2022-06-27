/*
Let, const, and var
const emails =['frodo@email.com', 'sawmise@email.com', 'merry@email.com' ];
emails.push('pippin@email.com');
console.log(emails);
*/
/* Block Scoping 
const limit = 200;

{
    const limit = 10;
    console.log('backstage limit', limit);
}
console.log('overall venue limit', limit);
Shwoing Block Scoping with Functions 
function hello() {
    let message = "Hello!";
    console.log(message);
}

function greeting() {
    let message = "How are you?";
    console.log(message);

}
hello();
greeting();
*/
/* Template Literals aka Template Strings 
let a = `good`;
let greeting =`${a} morning`
console.log(greeting);

let b ='birthday';
let c = `Happy ${b}`;
console.log(c);
*/
/* Spread Operator and Rest Parameters 
With Arrays of Numbers
let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b);

With Arrays of Strings
let a = ['Diana', "Eric", "Frank"];
let b = ["Alice", "Bob", "Carl", ...a];
console.log(b);
Rest Parameters with Functions 
function collect(...a){
    console.log(a);

}
collect (1, 2, 3, 4, 5);
*/
/* Destructing Assignment 
On Arrays
let z = [4, 5, 6];
let [four, five] = z;
console.log(four, five);

let animals =["Simba", "Zazu", "Ed"];
let [lion, bird] = animals;
console.log(lion, bird);
On Objects 
let king = { name: "Mufusa", kids: 1 };
let {name, kids} = king;
console.log(name, kids);

let son = {name: "Simba", parents: 2};
let name, parents; 
({ name, parents } = son);
console.log(name, parents);
*/