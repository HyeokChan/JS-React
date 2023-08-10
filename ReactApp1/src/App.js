import './App.css';

function App() {

  let name = "권혁찬";

  return (
    <div className="App">
      <header className="App-header">
        <h2>안녕 리액트 {name}</h2>
      </header>
    </div>
  );
}

// 다른 파일에서 import App from "./App" 과 같이 사용할 수 있다.
export default App;
