// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or caculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// ⭐function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//TypeScript -> Playground에서 TS와 JS 차이 볼 수 있음
// TS : type, JS : no type


// 2. Parameters
// premitibe parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
function printAll(...args) { //배열처럼 인식
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) { 
        console.log(arg);
    }
}
printAll('study', 'javascript', 'and', 'node');

// in array
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);
// const [ ...rest, last] = numbers는 불가


// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); error
    return undefined //생략 가능, return type 없을 때 undefined 리턴
}
// console.log(message); error
printMessage();


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good, 조건이 맞지 않는 경우, 값이 undefined인 경우, 값이 -1인 경우 등등
// 빨리 return하는 것이 좋음
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) --> 선언 이전에 호출 가능
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function, 원하면 함수명 지정 가능
    console.log('print');
};
print();
const printAgain = print; // printAgain 역시 function() 가리킴
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    //print();
};
randomQuiz('wrong', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//      consoloe.log('somplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 함수를 바로 실행하고자 할 때
(function hello() {
    console.log('IIFE');
})();


// Fun quiz time💓
// function caculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function caclulate(command, a, b){
    switch(command){
        case 'add':
            return a + b;
            break;
        case 'substract':
            return a - b;
            break;
        case 'divide':
            return a / b;
            break;
        case 'mutiply':
            return a * b;
            break;
        case 'remainder':
            return a % b;
            break;
        default:
            throw Error('unkwonw command');
    }
}
