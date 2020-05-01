'use strict';

var number = 5;
var string = "Hello!";
var sum = Symbol;
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0);
console.log('string' * 9);

let sometinf;
console.log(sometinf);

let persone = {
  name: "Jonn",
  age: 25,
  isMarried: false
}
console.log(persone["name"]);

let arr = ['plum.png', 'orangr.jpg', 'apple.bmp'];
console.log(arr[1]);

//alert("Hello World");
//let answer = confirm('Are you here?');
//console.log(answer);

// let answer = +prompt("Есть вам 18?", "Да");
// console.log(typeof (null));

// console.log("arr" + "- object");
// console.log(typeof (answer));

let incr = 10,
  decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5 % 2);
console.log("2" === 2);

let isChecked = false;
let isClose = false;
console.log(isChecked || !isClose);