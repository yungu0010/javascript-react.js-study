'user strict';

// Destructuring
let data = ["crong", "yungu", "pororo", "doyoon"];
let [jisu,,jung] = data;
console.log(jisu, jung);

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