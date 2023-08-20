import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  // App.js에 create 함수를 만들어서 setData를 사용하게 하고, 그러면 저장 시에 DiaryList컴포넌트를 rerender 할 수 있다.
  const onCreate = (author, content, emotion) =>{
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
    setData([newItem, ...data]);
  }

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it)=>it.id === targetId ? {...it, content:newContent} : it)
    );
  }

  return (
    <div className="App">
      {/* function 전달 */}
      <Lifecycle/>
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data}></DiaryList>
    </div>
  );
}
export default App;
