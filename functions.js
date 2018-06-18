//Named Function:
function sayHello() {
  return 'Hello World!';
}

function sayHello(name){
  return `Hello ${name}`;
}
console.log(sayHello("Danielle"));


function sayGoodbye(name) {
  return `Goodbye ${name}!`;
}

function sayThankYou(name = 'World') {
  return `Thank you ${name}!`;
}

//Anonymous Function: - stored into a variable
var add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(add(1, 3));

//Arrow function: - also anonymous
var multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
}
console.log(multiply(72, 12));

//When we have one expression in the body of the function (the right side), we can lose the return keyword and the curly braces
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

//When you only have one parameter can get rid of the curly brackets
var greeting = name => `Hello ${name}`
