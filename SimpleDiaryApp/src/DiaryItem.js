import React, {useState, useRef, useEffect, useContext} from 'react';
import { DiaryDispatchContext } from './App';
const DiaryItem = ({id, author, content, emotion, created_date}) => {
    // context로 부터 함수 공급 받음
    const {onRemove, onEdit} = useContext(DiaryDispatchContext);

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);

    const localContentInput = useRef();

    // 삭제 이벤트
    const handleRemove = () => {
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id);
        }
    }

    const handleQuitEdit = () => {
        toggleIsEdit();
        setLocalContent(content);
    }

    const handleEdit = () => {
        if(localContent.length < 5){
            localContentInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
            onEdit(id, localContent);
            toggleIsEdit();
        }
    }

    useEffect(()=>{
        console.log(`${id}번 째 아이템 렌더`);
    })

    return (
        <div className="DiaryItem">
            {/* 각 row별 고유 it를 설정해야함
            마땅한 값이 없는 경우 (it, idx)로 받아서 설정 */}
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion}
                </span>
                <br></br>
                <span className="date">
                    {new Date(created_date).toLocaleDateString()}
                </span>
            </div>
            {/* isEdit 값에 따라 render하는 코드 변경 */}
            <div className="content">
                {isEdit ? (
                <>
                    <textarea ref={localContentInput} value={localContent} onChange={(e)=>{setLocalContent(e.target.value)}}>
                    </textarea>
                </>
                ) : (
                <>{content}</>
                )}
            </div>
            {isEdit ? (
                <>
                    <button onClick={handleQuitEdit}>수정취소</button>
                    <button onClick={handleEdit}>수정완료</button>
                </>
            ) : (
                <>
                    <button onClick={handleRemove}>삭제하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>
            )}
            
        </div>
    )
}

export default React.memo(DiaryItem);