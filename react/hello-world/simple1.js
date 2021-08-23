// createElement로 나타내보자
/* <div>
    <p>hello</p>
    <p>world</p>
</div>*/

React.createElement(
    'div',
    null,
    React.createElement('p', null, 'hello'),        //type, props, children   props: 값을 컴포넌트에 전달시키고 싶을 때 사용, 객체형태로 전달
    React.createElement('p', null, 'world'),
)

function LikeButton() {
    // React라는 변수는 파일이 실행될 때 전역변수로 노출
    // useState는 컴포넌트의 상태값을 나타낼 때 사용
    const [liked, setLiked] = React.useState(false); 
    const text = liked ? '좋아요 취소' : '좋아요';
    return React.createElement( //리액트 요소 반환
        'button',               //문자열로 입력하면 html에 해당하는 태그가 생성됨
        { onClick: () => setLiked(!liked)},
        text,
    );
}

// 돔의 여러 요소에 렌더링하기 - 각각 따로 적용
// const domContainer1 = document.getElementById('root1');
// ReactDOM.render(React.createElement(LikeButton), domContainer1);       //컴포넌트를 렌더링 할 때도 리액트 요소로 만들어줌
// const domContainer2 = document.getElementById('root2');
// ReactDOM.render(React.createElement(LikeButton), domContainer2);
// const domContainer3 = document.getElementById('root3');
// ReactDOM.render(React.createElement(LikeButton), domContainer3);

// 일반적인 사용법
const domContainer1 = document.getElementById('root1');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton),
    ),
    domContainer1,
);
