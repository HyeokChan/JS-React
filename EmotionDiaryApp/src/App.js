
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

// COMPONENT
import RouteTest from './components/RouteTest';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader headText={"App"} 
                  leftChild={<MyButton text={"왼쪽 버튼"} type={"default"} onClick={()=>alert("왼쪽클릭")} />}
                  rightChild={<MyButton text={"오른쪽 버튼"} type={"default"} onClick={()=>alert("오른쪽클릭")} />} >\
        </MyHeader>
        <h2>App.js</h2>
        {/* <img src={process.env.PUBLIC_URL + "/assets/emotion1.png"}></img> */}
        <MyButton text={"버튼"} onClick={()=>alert("클릭")} type={"positive"}></MyButton>
        <MyButton text={"버튼"} onClick={()=>alert("클릭")} type={"default"}></MyButton>
        <MyButton text={"버튼"} onClick={()=>alert("클릭")} type={"negative"}></MyButton>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/new' element={<New/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route>
          <Route path='/diary' element={<Diary/>}></Route>
        </Routes>
        {/* <RouteTest></RouteTest> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
