'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based ingeritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods : prototype
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //값 할당 시 내부적으로 getter와 setter이용
    }

    get age() {
        return this._age;
    }

    set age(value) {    //set생성 순간 this.age = value시 다시 set함수 호출하게 됨 => call stack error
        // if (value<0){
        //     throw Error(`age can not be nerative`);
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2;        //생성자 쓰지 않고 field 정의, #으로 public, private 구분
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined, private하기 때문



// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a wya for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape{
    // overriding
    draw() {
        super.draw();
        console.log('🔺');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 5-1. super
class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
  }
  
  class Dog extends Animal {
    constructor(name, sound) {
      super('개', name, sound);
    }
  }
  
  class Cat extends Animal {
    constructor(name, sound) {
      super('고양이', name, sound);
    }
  }
  
  const dog = new Dog('멍멍이', '멍멍');
  const dog2 = new Dog('왈왈이', '왈왈');
  const cat = new Cat('야옹이', '야옹');
  const cat2 = new Cat('냐옹이', '냐옹');

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    //T
console.log(triangle instanceof Rectangle);     //F
console.log(triangle instanceof Triangle);      //T
console.log(triangle instanceof Shape);         //T
console.log(triangle instanceof Object);        //T
//ctr + click하면 정의된 부분으로 갈 수 있음
console.log(triangle.toString());