import React, { useEffect, useState } from "react";

// React.memo 사용, props 변경 시에만 리렌더링
// const TextView = React.memo(({text}) => {
//     useEffect(()=>{
//         console.log(`update text : ${text}`);
//     })
//     return (
//         <div>{text}</div>
//     );
// });
// const CountView = React.memo(({count}) => {
//     useEffect(()=>{
//         console.log(`update count : ${count}`);
//     })
//     return (
//         <div>{count}</div>
//     );
// });
// text, count 하나라도 변경되면 두 컴포넌트 모두 렌더링 하는 상황
// const TextView = ({text}) => {
//     useEffect(()=>{
//         console.log(`update text : ${text}`);
//     })
//     return (
//         <div>{text}</div>
//     );
// }
// const CountView = ({count}) => {
//     useEffect(()=>{
//         console.log(`update count : ${count}`);
//     })
//     return (
//         <div>{count}</div>
//     );
// }

const CoutnerA = React.memo(({count}) => {
    useEffect(()=>{
        console.log(`update count A : ${count}`);
    })
    return (
        <div>{count}</div>
    );
});
const CoutnerB = ({obj}) => {
    useEffect(()=>{
        console.log(`update count B : ${obj.count}`);
    })
    return (
        <div>{obj.count}</div>
    );
};

const areEquals = (prevProps, nextProps) => {
    return prevProps.obj.count === nextProps.obj.count;
};
// props 객체의 깊은 비교(값)를 위한 인자를 함께 넘겨준다.
const MemoizedCounterB = React.memo(CoutnerB, areEquals);


const OptimizeTest = () => {

    const [count, setCount] = useState(1);
    const [text, setText] = useState("");
    const [obj, setObj] = useState({
        count:1
    });

    return (
        <div style={{padding:50}}>
            {/* <div>
                <h2>count</h2>
                <CountView count={count}></CountView>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
            <div>
                <h2>text</h2>
                <TextView text={text}></TextView>
                <input value={text} onChange={(e) => setText(e.target.value)}></input>
            </div> */}
            <div>
                <h2>counter A</h2>
                <CoutnerA count={count}></CoutnerA>
                <button onClick={() => setCount(count)}>A button</button>
            </div>
            <div>
                {/* 객체를 props로 넘긴 경우는 값이 변경된 것으로 인식한다. 객체는 얕은 비교(메모리주소)를 하기 때문에 */}
                <h2>counter B</h2>
                {/* <CoutnerB obj={obj}></CoutnerB> */}
                <MemoizedCounterB obj={obj}></MemoizedCounterB>
                <button onClick={() => setObj({count:obj.count})}>B button</button>
            </div>
        </div>
    );
}

export default OptimizeTest;