//1. Use strict
//JS is very flexible
//flexible === dangerous
'use strict'; //added ES 5
console.log("Hello World");
​

//2. Variable, rw(read/write)
//let (added in ES6)
​
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
​
console.log(name);
console.log(globalName);
​
//var (don't ever use this!)
//var hoisting(끌어올리다) (move declaration from bottom to top) ->  ESLint 사용해서 발견
//=> 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것
//has no block scope, function scope

console.log(age);
age = 4;
var age;
​

//3. Constant(값이 절대 바뀌지 않음, 재할당 불가 포인터가 잠겨있음), r(read only)
//use const whenever possible
//only use let if variable needs to change
// const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.

const daysInWeek = 7;
const maxNumber = 5;
​
//Note!
//Immutable data types: primitive types(데이터 자체 변경 불가), frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
​

//4. Variable types
//primitive, single item(더 이상 쪼개질 수 없음) : number, string, boolean, null, undefined, symbol //값 자체가 메모리에 저장
//object, box container(single item 모여있는 것)  reference가 메모리에 저장
//function, first-class function(function도 다른 데이터 타입처럼 변수에 할당 가능, 함수에 인자로도 전달, 리턴타입으로도 사용 가능)
 ​
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
​
//number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
​
//bigInt (fairly new, don't use it yet) 숫자 끝에 n 추가
const bigInt = 123456789012345678901234567890n; //over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
​
//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan; //일반 string과 변수 더하기 가능
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //templete literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob)

// ES2015 new string methods.

let str = "hello world !";
let matchstr = "hello";
console.log(str.startsWith(matchstr));
console.log(str.endsWith(matchstr));
console.log(str.includes(matchstr));

​
//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
​
//null -> 값이 없음, 텅텅 비어있다.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
​
//undefined -> 선언이 되었지만, 값이 있는지 없는지가 결정되어있지 않다.
let x; //let x = undifined
console.log(`value: ${x}, type: ${typeof x}`);
​
//symbol, create unique identifiers for objects
//고유한 식별자를 만들 때 사용되어진다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //두개는 다름! 동일한 string이어도 다른 symbol로 만들어진다.
​
//동일한 심볼을 만들고 싶을 때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
//symbol을 출력하고 싶을 때 string으로 변환해주는 .description 을 써줘야한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
​
//object, real-life object, data structure
const ellie = { lastname: 'ellie', age: 20 }; //const keyword 포인터 잠겨있어서 할당 불가
ellie.age = 21; //ellie.사용하면 다른 값 할당 가능

// False & Truthy
// falsy한 값 앞에 느낌표를 붙여주면 true로 전환됨.
function print(person) {
    if (!person) {   //if (person === undefined || person === null)
      console.log('person이 없네요');
      return;
    }
    console.log(person.name);
}
const person = null;
print(person);
  
// Falsy value
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);      //Not A Number

// apply -> operator.js 참조
// A && B falsy에서 종료
const dog = {
    name: '멍멍이'
  };
  
  function getName(animal) {
    return animal && animal.name;
  }
  
const name = getName(dog);
console.log(name); // 멍멍이

console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

// A || B : truthy 찾으면 종료
const namelessDog = {
    name: ''
  };
  
  function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
  }
  
const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.


//5. Dynamic typing: dynamically typed language, runtime시 type정함
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //5를 string으로 변환, 최종타입은 string (75)
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //'8'와 '2'를 숫자로 인식하여 4출력
console.log(text.charAt(0)); //error
​