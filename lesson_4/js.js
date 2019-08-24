function first() {
  //Что-то делаем
  setTimeout( function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log("Я учу " + lang);
  callback();
}

function done() {
    console.log("Я прошел 3й урок!")
}


learnJS("JavaScript", done);




function first(y){
  console.log(1);
  y();
}

function second(a, b){
  console.log(a * b);
}

first(function(){
    second(5, 7);
});