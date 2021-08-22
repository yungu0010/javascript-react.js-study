'user strict';

// json으로 응답을 받고, 
//javascript object로 변환한 후(어떤 데이터처리 조작을 한 후에) dom에 추가
// 데이터 + HTML의 결합 필요

const data = [
    {
        name : 'coffe-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false,
    }
]

const template = `welcomes ${data[0].name} !!`
console.log(template);

// Tagged template literals
function fn(tags, name, items) {        //tags : array
    console.log(tags);
    if(typeof items === "undefined") {
        items = "<span>주문가능한 상품이 없습니다</span>";
    }
    return (tags[0] + name + tags[1] + items +tags[2]);

}

data.forEach((v) => {
    let template2 = fn`<div>welcome ${v.name} !!<div>
    <h2> 주문가능항목 </h2><div>${v.items}</div>`; 
    console.log(template2);
});
