'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 만약 execute 내에 네트워크 통신 요청이 있다면 사용자가 요청하지 않아도 실행되기 때문에 유의
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
       resolve('ellie');
       // reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers: then, catch, finally
promise //then retuen promise이므로 .catch 사용 가능
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber //
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`), 1000));
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });


getHen() //
    .then(getEgg)
    .catch(error => {
        return '🥐';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
// 받은 value를 바로 함수로 호출하는 경우는 생략 가능