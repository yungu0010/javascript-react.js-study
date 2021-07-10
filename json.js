// JSON
// JsavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); //single quote에서 double quote로 변경
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol("id"), //symbol같은 js에만 있는 데이터도 json에 포함되지 않음
    jump: () => {   //함수는 json에 포함되지 않음.
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);   //원하는 항목한 json으로 변경 가능
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'yunseo' : value;
});
console.log(json);


// 2. JSON to Object
// parso(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
//obj.jump(); error!    //JSON만들 때 함수 포함되지 않았기 때문에 string -> obj로 돌아올 때는 함수 없음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate())  error!
// rabbit.birthDate type은 Date이지만 json으로 변경 시 string type이 됨. 따라서 .getDate()사용 시 error
console.log(obj.birthDate);


const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate);
console.log(obj2.birthDate.getDate());
