'user strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //last index


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of : 가지고 있는 value값만 출력, string에서도 사용 가능
for (fruit of fruits){
    console.log(fruit);
}
for(let value of fruits) {
    console.log(value)
}
let str = "hello world!!!!";
for(let value of str){
    console.log(value);
}

// c. forEach
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => console.log(fruit, index));

let data = [1, 2, undefined, NaN, null, ""];

//단점 : 자기 자신이 갖고있지 않은 상위의 값도 결과로 나타낼 수 있음.
Array.prototype.getIndex = function(){};    //for in에서 이 fucntion도 출력
for(let idx in data) {
    console.log(data[idx])
}




// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓','🍋');
console.log(fruits);

// shift: remove an itme from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// unshift, shift는 기존에 있던 데이터 모두 이동해야함

// splice: remove an item by index position
fruits.push('🍒','🍍','🥝');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); //지우고 원하는 데이터 넣기 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['🥥','🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
console.clear();
console.log(fruits);

// indexOf: find the index
console.log(fruits.indexOf('🍒'));
console.log(fruits.indexOf('🍋'));
console.log(fruits.indexOf('🍓')); //없으면 -1 출력

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥑')); 

// lastIndexOf
console.clear();
fruits.push('🍋');
console.log(fruits);
console.log(fruits.indexOf('🍋'));
console.log(fruits.lastIndexOf('🍋'));


// 6. spread operator
var pre = ["apple", "orange", 100];
let newData = [...pre]; //let newData = ["apple", "orange", 100];과 같음
console.log(pre, newData);
console.log(pre === newData);   //false, 같은 참조가 아니라 복사한 것

let newData2 = [0, 1, 2, 3, ...pre, 4];
console.log(newData2);

function sum(a, b, c) {
    return a+b+c;
}

var pre = [100, 200, 300];
console.log(sum.apply(null, pre));
console.log(sum(...pre));


// 7. from
function addMark() {
    // let newFrom = [];
    // for( let i = 0; i<arguments.length; i++){
    //     newFrom.push(arguments[i] + "!");
    // }
    let newArray = Array.from(arguments);   //arguments를 배열로 만든다.
    let newFrom = newArray.map(function(value){
        return value + "!";
    });

    console.log(newFrom);
}
addMark(1, 2, 3, 4, 5);


// Destructuring Array
let name = ["speakingpotato", "bread", "jk", "yungu"];
let [suhwa,,jung ] = name;
console.log(suhwa, jung);