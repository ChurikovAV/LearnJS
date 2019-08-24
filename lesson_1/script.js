// 'use strict'
// let something;
// console.log(something);

// let person = {
//   name: "John",
//   age: 25,
//   isMarried: false
// };


// console.log(person["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// // console.log(arr[0]);

// // alert("Hello world!");


// // let answer = confirm("Are you here?");
// // console.log(answer);

// // let answer = +prompt("Есть ли вам 18?", "Да");
// // console.log(typeof(answer));


// // console.log("arr" + " - object");
// // console.log(4 + +" - object");

// let incr = 10,
//     decr = 10;


// console.log(incr++);
// console.log(decr--);

// console.log(5 % 2);

// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
//   }

// showFirstMessage("Hello Wrold!");
// console.log(num);

let calc = (a,b) => a+b;

console.log(calc(3,4));

console.log(calc(8,5));

function retVar() {
  let num = 50;
  return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
console.log(parseInt(twelve));
console.log(parseFloat(twelve));