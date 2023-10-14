import React, { useEffect, useReducer, useRef } from 'react';
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
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


function App() {

  useEffect(()=>{
    const localData = localStorage.getItem("diary");
    if(localData){
      const diaryList = JSON.parse(localData).sort((a,b)=>parseInt(b.id) - parseInt(a.id));
      dataId.current = parseInt(diaryList[0].id) + 1;
      dispatch({type:"INIT", data:diaryList});
    }
  }, []);

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type:"CREATE", 
      data:{
        id:dataId.current,
        date:new Date(date).getTime(),
        content,
        emotion,
      }
    });
    dataId.current++;
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
              <Route path='/edit/:id' element={<Edit/>}></Route>
              <Route path='/diary/:id' element={<Diary/>}></Route>
            </Routes>
            {/* <RouteTest></RouteTest> */}
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
