import React, {useState, useRef} from "react";
const DiaryEditor = () => {
    // useRef dom조작을 위한 처리
    const authorInput = useRef();
    const contentInput = useRef();
    const [state, setState] = useState({
        author : "",
        content : "",
        emotion : 1,
    });

    // state변수를 객체로 묶으면 상태변화에 대한 처리를 공통화 할 수 있음
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = () => {
        if(state.author.length < 1){
            // ref로 가져와서 처리
            authorInput.current.focus();
            return;
        }
        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }
        alert("저장되었습니다.");
    }

    return (
        // 컴포넌트의 css 적용 관리를 용이하게 하기 위해서 최상위 태그 className 맞춤
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input name="author" ref={authorInput} value={state.author} onChange={handleChangeState}></input>
            </div>
            <div>
                <textarea name="content" ref={contentInput} value={state.content} onChange={handleChangeState}>
                </textarea>
            </div>
            <div>
                <p>오늘의 감정점수</p>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
}

export default DiaryEditor;