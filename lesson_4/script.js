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
// // console.log(num);

// let calc = (a,b) => a+b;

// console.log(calc(3,4));

// console.log(calc(8,5));

// function retVar() {
//   let num = 50;
//   return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// let arr = ['first', 2, 3, 'four', 5];


// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ':' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//   console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", "zzz", "pp", "ras"],
//     i = arr.join(", ");

//     console.log(i);

let arr = [1, 15, 4],
    i = arr.sort(compareNum);

    function compareNum(a,b) {
      return a-b;
    }

    console.log(arr);

    var fruits = ['Яблоко', 'Банан'];

    fruits.forEach(function(item, index, array) {
      console.log(item, index);
    });


    let soldier = {
      health: 400,
      armor: 100
    };

    let john = {
      health: 100
    };

    john.__proto__ = soldier;

    console.log(john);
    console.log(john.armor);