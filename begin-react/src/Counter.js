import React, { useState } from 'react';        // useState함수 불러오기

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);        //함수형 업데이트
    }
    const onDecrease = () => {
        setNumber(number - 1);          //업데이트할 값을 파라미터로 넣어줌
    }
    return (
        <div>
            <h1>{number}</h1>
            {/* onClick={onIncrease()}의 형태로 작성하면 렌더링 시점에서 함수가 호출됨, 함수타입의 값을 넣어줘야함*/}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;