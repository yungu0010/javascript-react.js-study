import React from 'react';
import Hello from './Hello';
import Counter from './Counter';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
// import './App.css'; css 적용 코드

function App() {
  const name = 'react';
    const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: 24,
      padding: '1rem'
    }
  return (
    <>
    <Wrapper>
    <Hello name = "react" color="red"></Hello>
    <Hello color="pink"></Hello>
    <InputSample></InputSample>
    <div style = {style}>{name}</div>
    </Wrapper>
    </>
  );
}

export default App;