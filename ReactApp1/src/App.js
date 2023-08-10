import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './Myfooter';
import Counter from './Counter';
import React from 'react';
function App() {

  let name = "권혁찬";
  let number = 5;

  return (
    // 최상위 태그가 반드시 있어야 한다.
    <div className="App">
      <MyHeader></MyHeader>
      <Counter></Counter>
      <MyFooter></MyFooter>
    </div>
  );
}

// 다른 파일에서 import App from "./App" 과 같이 사용할 수 있다.
export default App;
