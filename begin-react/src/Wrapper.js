import React, { Children } from 'react';

function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style = {style}>
            {children}      {/*내부의 내용이 보여지기 위해 props.children렌더링 해야함*/}
        </div>
    )
}

export default Wrapper;