'user strict';

// Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['π', 'π'];
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

// b. for of : κ°μ§κ³  μλ valueκ°λ§ μΆλ ₯, stringμμλ μ¬μ© κ°λ₯
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

//λ¨μ  : μκΈ° μμ μ΄ κ°κ³ μμ§ μμ μμμ κ°λ κ²°κ³Όλ‘ λνλΌ μ μμ.
Array.prototype.getIndex = function(){};    //for inμμ μ΄ fucntionλ μΆλ ₯
for(let idx in data) {
    console.log(data[idx])
}




// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('π','π');
console.log(fruits);

// shift: remove an itme from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// unshift, shiftλ κΈ°μ‘΄μ μλ λ°μ΄ν° λͺ¨λ μ΄λν΄μΌν¨

// splice: remove an item by index position
fruits.push('π','π','π₯');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'π', 'π'); //μ§μ°κ³  μνλ λ°μ΄ν° λ£κΈ° κ°λ₯
console.log(fruits);

// combine two arrays
const fruits2 = ['π₯₯','π'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
console.clear();
console.log(fruits);

// indexOf: find the index
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π')); //μμΌλ©΄ -1 μΆλ ₯

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯')); 

// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));


// 6. spread operator
var pre = ["apple", "orange", 100];
let newData = [...pre]; //let newData = ["apple", "orange", 100];κ³Ό κ°μ
console.log(pre, newData);
console.log(pre === newData);   //false, κ°μ μ°Έμ‘°κ° μλλΌ λ³΅μ¬ν κ²

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
    let newArray = Array.from(arguments);   //argumentsλ₯Ό λ°°μ΄λ‘ λ§λ λ€.
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