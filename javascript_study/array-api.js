// 1. forEach

const superheroes = ['ironman', 'captain America', 'thor', 'doctor strange'];

superheroes.forEach(hero => {
  console.log(hero);
});
// for문
// for (let i = 0; i<superheroes.length; i++){
//   console.log(superheroes[i]);
// }


// 2. map : 배열 안에 각 원소를 변환할 때 사용, 새로운 배열 생성
const array = [1, 2, 3, 4, 5, 6, 7, 8];
// for
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);

// forEach
const squared2 = [];

array.forEach(n => {
  squared2.push(n * n);
});

console.log(squared2);

// map
const square = n => n * n;
const squared3 = array.map(square);
console.log(squared3);

const squared4 = array.map(n => n * n);
console.log(squared4);


// 3. indexOf : 원하는 항목 몇번째 원소인지 찾아줌
const index = superheroes.indexOf('thor');
console.log(index);


// 4. findIndex : 배열 안에 있는 값이 객체이거나 배열일 때 사용
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);


// 5. find : 찾아낸 값 자체를 반환
const todo = todos.find(todo => todo.id === 3);
console.log(todo);


// 6. filter : 특정 조건을 만족하는 값을 추출하여 '새로운'배열 생성
const tasksNotDone = todos.filter(todo => todo.done === false);
// const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);


// 7. splice : 특정 항목을 제거할 때 사용, 기존 배열 수정
const numbers = [10, 20, 30, 40];
const splice = numbers.indexOf(30);
numbers.splice(splice, 1);
console.log(numbers);


// 8. slice : 기존 배열 유지
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 40]


// 9. shift & unshift, pop & push
// shift : 첫번째 원소를 배열에서 추출
const array9 = [10, 20, 30, 40];
const value_shift = array9.shift();
console.log(value_shift);
console.log(array9);

// unshift : 맨 앞에 새 원소 추가
numbers.unshift(5);
console.log(numbers);

// pop : 맨 마지막 항목 추출
const value_pop = array9.pop();
console.log(value_pop);
console.log(array9);

// push : 맨 마지막에 새 원소 추가


// 10. concat : 여러개의 배열을 하나의 배열로 합침, 기존 함수를 변화시키지 않음
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);


// 11. join 
const joinarr = [1, 2, 3, 4, 5];
console.log(joinarr.join()); // 1,2,3,4,5
console.log(joinarr.join(' ')); // 1 2 3 4 5
console.log(joinarr.join(', ')); // 1, 2, 3, 4, 5


// 12. reduce
const num = [1, 2, 3, 4, 5];
let sum = num.reduce((accumulator, current) => accumulator + current, 0);  //previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T

console.log(sum);

let sum2 = num.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum2);

// calculating average using reduce
let sum3 = num.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum3);


// 13. includes
const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false



// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('|');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  const result2 = fruits.split(',', 2);
  console.log(result);
  console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); //배열 자체를 변화시킴
}

// ⭐Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //const result = array.splice(0, 2); splice: array를 변경
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);

}

// Q8. check if there is a student with the score lower than 50
{
    //console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); // 하나라도 조건에 만족되면 true

    const result2 = students.every((student) => student.score < 50);
    console.log(result2); // 모든 학생들이 50보다 낮을 때 return true;
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) =>  prev + curr.score, 0);//return한 curr이 prev로
    console.log(result / students.length);
    //reduecRight은 거꾸로 item을 전달 받음
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
    .sort((a, b) => a - b) //❔
    .join();   
    console.log(result);
}

// Bonus! 
function print() {
  /*
  filter, includes, from을 사용해서 문자열 'e'가 포함된 배열을 만들어서 반환하기
  */
  let listArray = Array.from(arguments);
  console.log(toString.call(listArray));
  let resultArray = listArray.filter(function(value){
    return value.includes("e");
  });
  console.log(resultArray.length);
}

print("orange", "apple", "banana", "stawberry");