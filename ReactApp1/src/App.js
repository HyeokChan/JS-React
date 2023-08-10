import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './Myfooter';
import Counter from './Counter';
import Container from './Container';
import React from 'react';
function App() {

  let name = "권혁찬";
  let number = 5;

  const counterProps = {
    initialValue : 5,
    a : 1,
    b : 2
  };

  return (
    // 최상위 태그가 반드시 있어야 한다.
    // 컴포넌트를 props로 줄 수도 있다.
    <Container>
      <div className="App">
        <MyHeader></MyHeader>
        {/* 자식 컴포넌트에게 값 전달, 객체를 스프레드연산자(...)를 사용하여 편하게 넘길 수 있다.*/}
        <Counter {...counterProps}></Counter>
        <MyFooter></MyFooter>
      </div>
    </Container>
    
  );
}

// 다른 파일에서 import App from "./App" 과 같이 사용할 수 있다.
export default App;
