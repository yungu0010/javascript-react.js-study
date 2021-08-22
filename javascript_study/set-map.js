'user strict';

// set & map
// Array -> set, weakset
// Object -> map, weakmap
// 1. Set : 중복없이 유일한 값을 저장하려고 할 때, 이미 존재하는지 체크할 때 사용.

let mySet = new Set();
console.log(toString.call(mySet));

mySet.add("crong");
mySet.add('hary');
mySet.add("crong");
console.log(mySet.has("crong"));

mySet.forEach(function(v){
    console.log(v);
})

mySet.delete("crong");
mySet.forEach(function(v){
    console.log(v);
})


// 2. weakset : 참조를 가지고 있는 객체만 저장 가능, 객체가 초기화 되면 garbage collection 사용
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
//ws.add(111);  //error!
//ws.add("111");    //error!
//ws.add(null);     //error!
ws.add(function(){});
ws.add(arr2);
ws.add(obj);

arr = null; // arr = [1, 2, 3, 4]지만 weakset에 존재하는 것 처럼 보임.
// arr -> garbage collection 유효하지 않은 객체임을 알고 있음, arr2는 실제 존재함.
console.log(ws.has(arr), ws.has(arr2));
console.log(ws);


// 3. map : key-value structure
// 4. weakmap : 객체가 초기화 되면 garbage collection 사용
let wm = new WeakMap();
let myfun = function(){};
// 이 함수가 얼마나 실행됐는지 알고자 할 때
wm.set(myfun, 0);

console.log(wm);

for(let i=0; i<10; i++){
    count2 = wm.get(myfun);  // get value
    count2++;
    wm.set(myfun, count2);
}

console.log(wm.get(myfun));

myfun = null;
console.log(wm.get(myfun));
console.log(wm.has(myfun));


// protecting weakmap class instance variable
const weakmap = new WeakMap();

function Area(height, width) {
    weakmap.set(this, {height, width}); //클래스는 인스턴스변수를 가지지 않음, 클래스 밖 전역공간에 보관
}

Area.prototype.getArea = function(){
    const {height, width} = weakmap.get(this);
    return height * width;
}
let myarea = new Area(10, 20);
console.log(myarea.getArea());
console.log(myarea.height); //클래스 객체로는 인스턴스 접근 불가

console.log(weakmap.has(myarea));
myarea = null;
console.log(weakmap.has(myarea));


// Destructuring and Set 활용
// lotto 번호 만들기
// 1. 유일한 값을 추출하는 과정에서 Set 사용
// 2. getRandonNumber함수에 변수를 전달하는 과정에서 destructuring을 사용

const SETTING = {
    name : "LUCKY LOTTO!",
    count : 6,
    maxNumber : 45
}

/* ANSWER */
const result = new Set()
const { count, maxNumber } = SETTING

function getRandomNumber() {
  while(result.size < count) {  
    const random = Math.ceil(Math.random()*100)
    
    if (random < maxNumber) {
      result.add(random)
    }
  }
  return Array.from(result)
}

console.log(getRandomNumber());