import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";
// props : 부모 컴포넌트로 부터 받은 값
const Counter = (props) => {

    // 0에서 시작하고 1씩 증가하고 1씩 감소하는 count 상태 처리
    // useState의 인자는 상태의 초기값
    // useState의 반환값은 상태값을 가지는 변수와 변수를 변경시키는 함수
    // 상태가 변경되면 해당 화면을 rerender 된다.
    // 하나의 컴포넌트(Counter)에 여러개의 상태변수를 가져도 상관없다.
    const [count, setCount] = useState(props.initialValue);
    const onIncrease = () => {
        setCount(count+1);
    }
    const onDecrease = () => {
        setCount(count-1);
    }


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            {/* 부모요소가 rerender가 되면 자식 요소도 rerender가 된다 */}
            <OddEvenResult count={count}></OddEvenResult>
        </div>
    );
};

// 부모로 부터 받은 Props가 없는 경우 에러 방지를 위해 사용하는 Props
Counter.defaultProps = {
    initialValue : 0,
}

export default Counter; 