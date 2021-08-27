// 1. String concatenation
console.log('my' + 'cat'); //my cat
console.log('1' + 2);      //12
console.log(`string literals: 1+2 = ${1 + 2}`); //string literals: 1 + 2 = 3
console.log(`string literals: 1+2 =
'''
''
${1 + 2}`); 


// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentialtion


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter++;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignmnet operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x -= y;


// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than equal


// 6. Logical operators: || (or), && (and), ! (not)
// heavy한 operator일 수록 뒷 부분에 배치
const value1 = false; //true;
const value2 = 4 < 2;
function check() {
    for (let i=0; i<10; i++){
        //wasting time
        console.log('🤩');
    }
    return true;
}
// || (or), finds the first truthy value, true 찾으면 중지
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value, false 찾으면 중지
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.something
//if (nullableObject != null){
//    nullableObject.something;
//}

// ! (not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입을 변경해서 검사
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion 타입이 다르면 다른 것이라 판단
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true
 
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  //false, different reference
console.log(ellie1 === ellie2); //false, different reference
console.log(ellie1 === ellie3); //true

// equality - puzzler
//false: 0, null, undefined, NaN, ''
console.log(0 == false);    //true
console.log(0 === false);   //false, 0 is not boolean type
console.log('' == false);   //true
console.log('' === false);  //false
console.log(null == undefined); //true, null과 undefined는 같은 것으로 간주되지만,
console.log(null === undefined);    //false, null and undefined is different type


// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
}else if (name === 'coder'){
    console.log('Your are amazing coder');
}else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); //true : value1, false : value2


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
    case 'Safari':
        console.log('love you!');
        break;
    default:
        console.log('save all!');
        break;
}

// switch-case 수정, 값에 따라 실행해야하는 코드 구문이 다를 경우에는 객체에 함수를 지정하면 됨
function getBrowser(browser){
    const chat = {
        IE : 'go away!',
        Chrome : 'love you!',
        Firefox : 'love you!',
        Safari: 'love you!'
    };
    return chat[browser] || 'save all!';
}

console.log(getBrowser('Chrome'));
console.log(getBrowser('internet'));



// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);

for (let i = 3; i > 0; i = i - 2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}


//nested loops, O(n^2)이므로 CPU에 좋지 않음
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}
// Q2. interate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++){
    if(i === 8)
        break;
    console.log(`q2. ${i}`);
}