import React, { useReducer, useRef } from 'react';
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

const reducer = (state, action) => {
  let newState = [];
  switch(action.type){
    case "INIT":{
      return action.data;
    }
    case "CREATE":{
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE":{
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
    case "EDIT":{
        newState = state.map((it)=>it.id === action.data.id ? {...action.data} : it);
        break;
    }
    default:
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id:1,
    emotion:1,
    content:"오늘의일기 1번",
    date:1696329455070,
  },
  {
    id:2,
    emotion:2,
    content:"오늘의일기 2번",
    date:1696329455071,
  },
  {
    id:3,
    emotion:3,
    content:"오늘의일기 3번",
    date:1696329455072,
  },
  {
    id:4,
    emotion:4,
    content:"오늘의일기 4번",
    date:1696329455073,
  },
  {
    id:5,
    emotion:5,
    content:"오늘의일기 5번",
    date:1696329455074,
  },
  {
    id:6,
    emotion:1,
    content:"오늘의일기 6번",
    date:1796329455074,
  },
]

function App() {

  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(dummyData.length);
  // CREATE
  const onCreate = (date, content, emotion) => {
    dataId.current++;
    dispatch({
      type:"CREATE", 
      data:{
        id:dataId.current,
        date:new Date(date).getTime(),
        content,
        emotion,
      }
    });
  }
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({
      type:"REMOVE",
      targetId
    });
  }
  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type:"EDIT",
      data:{
        id:targetId,
        date:new Date(date).getTime(),
        content,
        emotion
      }
    });
  }


  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate,onEdit,onRemove}}>
        <BrowserRouter>
          <div className="App">
            {/* <MyHeader headText={"App"} 
                      leftChild={<MyButton text={"왼쪽 버튼"} type={"default"} onClick={()=>alert("왼쪽클릭")} />}
                      rightChild={<MyButton text={"오른쪽 버튼"} type={"default"} onClick={()=>alert("오른쪽클릭")} />} >\
            </MyHeader> */}
            {/* <img src={process.env.PUBLIC_URL + "/assets/emotion1.png"}></img> */}
            {/* <MyButton text={"버튼"} onClick={()=>alert("클릭")} type={"positive"}></MyButton>
            <MyButton text={"버튼"} onClick={()=>alert("클릭")} type={"default"}></MyButton>
            <MyButton text={"버튼"} onClick={()=>alert("클릭")} type={"negative"}></MyButton> */}
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/new' element={<New/>}></Route>
              <Route path='/edit' element={<Edit/>}></Route>
              <Route path='/diary' element={<Diary/>}></Route>
            </Routes>
            {/* <RouteTest></RouteTest> */}
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
