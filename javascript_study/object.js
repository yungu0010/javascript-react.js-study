'user strict'
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal syntax
const obj2 = new Object(); // 'object constructor' syntax, object에서 정의된 constructor 호출되기 때문

// const name = 'ellie';
// const age = 4;
// print(name, age);
// function print(name, age){
//     console.log(name);
//     console.log(age);
// }

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can be properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob
console.log(ellie.hasJob);


// 2. Computed properties => 코딩 시점에 정확히 어떤 키가 필요한지 모를 때 사용
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// function printValue(obj, key) {
//     console.log(obj.key);
// }
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorhand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);


// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// 1
const user4 = {};
Object.assign(user4, user);
console.log(user4);
//2  
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {coloe: 'red' };
const fruit2 = {color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue
console.log(mixed.size);  //big
//assign은 순차적으로 덮어씌움


// 8. prototype : 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 및 값을 재사용할 수 있음
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
  Animal.prototype.say = function() {
    console.log(this.sound);
  };
  Animal.prototype.sharedValue = 1;
  
  function Dog(name, sound) {
    // 첫번째 인자는 this, 이후에는 생성자 함수에서 필요로 하는 파라미터 적어줌
    Animal.call(this, '개', name, sound);
  }
  Dog.prototype = Animal.prototype;
  
  function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
  }
  Cat.prototype = Animal.prototype;
  
  // Animal.Call 호출
  const dog = new Dog('멍멍이', '멍멍');
  const cat = new Cat('야옹이', '야옹');
  
  dog.say();
  cat.say();
  
  console.log(dog.sharedValue);     //같은 프로토타입 공유
  console.log(cat.sharedValue);



// Bonus!
function getObj() {
    const name = "crong";
    const getName = function() {
        return name;
    }
    const setName = function(newname){
        name = newname;
    }
    const printName = function() {
        console.log(name);
    }
    return {
        // getName : getName, 
        // setName : setName
        // key와 value값이 같으면 생략 가능
        getName, setName, name
    }
}

let obj = getObj();
console.log(obj);