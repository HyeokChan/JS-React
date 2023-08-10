import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"kkk",
    content:"hi1",
    emotion:5,
    created_date : new Date().getTime(),
  },
  {
    id:2,
    author:"qqq",
    content:"hi2",
    emotion:4,
    created_date : new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor></DiaryEditor>
      <DiaryList diaryList={dummyList}></DiaryList>
    </div>
  );
}
export default App;
