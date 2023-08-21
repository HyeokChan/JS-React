import { useContext } from "react";
import DiaryItem from "./DiaryItem"
import { DiaryStateContext } from "./App";
// const DiaryList = ({onRemove, onEdit, diaryList}) => {
const DiaryList = () => {    
    const diaryList = useContext(DiaryStateContext);
    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {/* map 내장 함수 사용 */}
                {diaryList.map((it)=>(
                    // <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}></DiaryItem>
                    <DiaryItem key={it.id} {...it}></DiaryItem>

                ))}
            </div>
        </div>
    );
}

// default props 설정
DiaryList.defaultProps = {
    diaryList : []
}


export default DiaryList;