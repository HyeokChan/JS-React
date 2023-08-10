import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './Myfooter';
import React from 'react';
function App() {

  // style을 변수처럼 생성해서 사용할 수 있음
  const style = {
    bold_text : {
      color : "green",
    }
  }

  let name = "권혁찬";
  let number = 5;

  return (
    // 최상위 태그가 반드시 있어야 한다.
    <div className="App">
      <MyHeader></MyHeader>
      <h2>안녕 리액트 {name}</h2>
      <b id="bold_text" style={style.bold_text}>
        {number}는 : {number%2===0 ? "짝수" : "홀수"}
      </b>
      <MyFooter></MyFooter>
    </div>
  );
}

// 다른 파일에서 import App from "./App" 과 같이 사용할 수 있다.
export default App;
