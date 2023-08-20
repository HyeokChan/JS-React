import React, {useEffect, useState} from 'react';

const UnmountTest = () => {
    useEffect(()=>{
        console.log("mount");

        // Unmount되는 시점에 동작함
        return ()=>{
            console.log("unmount");
        };
    }, []);

    return (
        <div>
            Unmount Testing Component
        </div>
    );
}

const Lifecycle = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [isVisivle, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisivle);

    // // dependency에 빈 배열을 전달하면 컴포넌트가 마운트될 때에만 동작한다.
    // useEffect(()=>{
    //     console.log("mount");
    // },[]);

    // dependency에 아무값을 전달하지 않으면 컴포넌트가 변경될 때마다 동작한다.
    // useEffect(()=>{
    //     console.log("update");
    // });

    // // dependency에 state를 전달하면 해당 state가 변경될 때에만 동작한다.
    // useEffect(()=>{
    //     console.log(`count is update : ${count}`);
    //     if(count > 5){
    //         alert("count가 5를 넘었습니다. 따라서 1로 초기화 합니다.");
    //         setCount(1);
    //     }
    // },[count]);

    // useEffect(()=>{
    //     console.log(`text is update : ${text}`);
    // },[text]);

    return (
        <div style={{padding:20}}>
            {/* 
            <div>
                {count}
                <button onClick={()=>setCount(count+1)}>+</button>  
            </div>
            <div>
                <input value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
             */}
             <button onClick={toggle}>ON/OFF</button>
             {isVisivle && <UnmountTest/>}
        </div>
    );
}

export default Lifecycle;