'user strict';

// Destructuring
let data = ["crong", "yungu", "pororo", "doyoon"];
let [jisu,,jung] = data;
console.log(jisu, jung);


// ex
const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2

// function parameter
const object2 = { a: 1 };

function print({ a, b = 2 }) {  //비구조화 할당 시 기본값 설정
  console.log(a);
  console.log(b);
}

print(object2);



// object
let obj = {
    name : "yungu",
    address : "Korea",
    age : 10
}

let {name, age} = obj;
console.log(name, age);

let {name : myName, age : myAge} = obj;
console.log(myName);


// 깊은 비구조화 할당
const deepObject = {
    state: {
      information: {
        book: 'velopert',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };
  
// 1) 비구조화 할당 문법 두번 사용
const { book, languages } = deepObject.state.information;
const { value } = deepObject;
  
const extracted = {
    // key 값으로 선언된 값이 존재한다면 바로 매칭
    book,       //book : book
    languages,  //languages : languages
    value       //vlaue : value
};
  
console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}

// 2) 한 번에 꺼내는 방법
// const {
//     state : {
//         information: {book, languages}
//     },
//     value
// } = deepObject;

// const extracted2 = {
//     book,
//     languages,
//     value
// };

// console.log(extracted2)


// destructuring을 이용한 JSON parsing
var news = [
    {
        "title" : "sbs",
        "imgurl" : "http://static.naver.net/newstand/2017/0313/article_img",
        "newslist" : [
            "[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
            "갤럭시S8 출시?",
            "[블록체인] 퍼블릭 블록체인의 한계와 프라이빗 블록체인"
        ]
    },
    {
        "title" : "mbc",
        "imgurl" : "http://static.naver.net/newstand/2017/0313/article_img",
        "newslist" : [
            "dolor sit amet, consectetur adipisicin",
            "amet, consectetur adipisicin"
        ]
    }
];
let [, mbc] = news;
console.log(mbc);
let {title, imgurl} = mbc;
console.log(title, imgurl);

let [, {title2, imgurl2 }] =news;
console.log(imgurl2);