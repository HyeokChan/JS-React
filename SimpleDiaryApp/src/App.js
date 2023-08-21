import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';
import OptimizeTest from './OptimizeTest';

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getDate = async()=>{
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments')
      .then((res)=>res.json());
      
    const initData = res.slice(0,20).map((it)=>{
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random()*5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++,
      }
    });
    setData(initData);
  };

  // mount 
  useEffect(()=>{
    getDate();
  }, []);

  // App.js에 create 함수를 만들어서 setData를 사용하게 하고, 그러면 저장 시에 DiaryList컴포넌트를 rerender 할 수 있다.
  // useCallback을 사용하여 함수 재사용
  const onCreate = useCallback((author, content, emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current++;
    // 원래 data에 newItem 추가
    // 함수형 update, setData에 함수를 전달하면서 기존데이터를 인자로 받아서 신규데이터만 추가함
    setData((data)=>[newItem, ...data]);
  },[]);

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it)=>it.id === targetId ? {...it, content:newContent} : it)
    );
  }

  // 메모이제이션, useMemo의 첫번째 인자인 콜백함수가 return하는 값을 기억해서 최적화
  // data.length가 변화할 때만 콜백함수 실행, 변화하지 않으면 기억하는 값을 그대로 반환
  // useMemo는 함수가 아닌 값을 리턴함, 결과값을 값으로 사용
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it)=>it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = Math.floor((goodCount/data.length)*100);
    return {goodCount, badCount, goodRatio};
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return ( 
    <div className="App">
      {/* function 전달 */}
      {/* <Lifecycle/> */}
      {/* <OptimizeTest></OptimizeTest> */}
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data}></DiaryList>
    </div>
  );
}
export default App;
