# JS-React

---
### JavaScript 기본
#### 함수선언식
```javascript
선언식함수는 함수 호이스팅으로 함수가 가장 위에서 처리된 것으로 적용되어 정상 동작함.
console.log(helloB());

function helloB() {
  return "Hello world B";
}
// => Hello world B
``` 
```javascript
function helloB() {
    return "Hello world B";
}
console.log(helloB());
```
#### 함수표현식
표현식함수는 호이스팅 되지 않아서 함수를 먼저 호출할 시 에러 발생
```javascript
console.log(helloA());
let helloA = function () {
  return "Hello world A";
};
// => TypeError: helloA is not a function
```
 

---

#### 객체
javascript 객체에는 다양한 타입의 변수 설정 가능함.

키 부분은 문자열로 구성되나, 생성시에는 "" 없이 이름 그대로 사용
```javascript
let person = {
  name: "권혁찬",
  age: 28,
  member: undefined,
  live: true,
  getMoney: function () {}
};

console.log(person);

{name: "권혁찬", age: 28, member: undefined, live: true, getMoney: ƒ getMoney()}
name: "권혁찬"
age: 28
member: undefined
live: true
getMoney: ƒ getMoney() {}
<constructor>: "Function"
```


점표기법과 괄호표기법

괄호표기법 안에는 문자열 형태로 작성해야함. 그렇지 않으면 변수로 인식해서 에러 발생
```javascript
person.gender = "M";
person["location"] = "ko";
```


객체 내 함수에서 this 키워드를 사용하여 객체가 가지고 있는 변수 접근 가능

``를 통해 문자열과 변수 한 문장으로 이어서 코딩 가능
```javascript
let person = {
  name: "권혁찬",
  age: 28,
  member: undefined,
  live: true,
  nullValue: null,
  money: 10000,
  getMoney: function () {
    console.log(`money : ${this.money}`);
  }
};
person.getMoney();

money : 10000 
```

in 키워드를 사용하여 객체안에 키가 존재하는지 확인 가능하지만,
undefined, null 값도 존재하는 것으로 체크함
```javascript
if ("name" in person) {
  console.log(person.name);
}
if ("member" in person) {
  console.log(person.member);
}
if ("nullValue" in person) {
  console.log(person.nullValue);
}


권혁찬
undefined
null
```


#### 배열
Object.keys(), Object.values() 함수를 통해 객체의 키, 값을 배열로 반환 받을 수 있음.
```javascript
let person = {
    name: "권혁찬",
    age: 28,
    member: undefined,
    live: true,
    nullValue: null,
    money: 10000,
    getMoney: function () {
        console.log(`money : ${this.money}`);
    }
};

let personKeys = Object.keys(person);
console.log(personKeys);
["name", "age", "member", "live", "nullValue", "money", "getMoney"]

let personValues = Object.values(person);
console.log(personValues);
["권혁찬", 28, undefined, true, null, 10000, ƒ getMoney()]
```

#### 배열 내장함수
forEach : 단순한 배열의 순회
```javascript
let arr = [1, 2, 3, 4];
arr.forEach((elm) => console.log("elm", elm));
elm 1
elm 2
elm 3
elm 4
```

map : 배열을 순회하여 요소 연산 및 처리
```javascript
let newArr = arr.map((elm) => {
  return elm * 2;
});
console.log("newArr", newArr);
newArr(4) [2, 4, 6, 8]
```

includes : 배열의 포함여부 체크
```javascript
let isContains = arr.includes(number);
console.log("isContains", isContains);
isContains true
```

indexOf : 배열의 인덱스 반환
```javascript
let index = arr.indexOf(number);
console.log("index", index);
index 2
```

findIndex : 콜백함수를 인자로 받아서 객체의 인덱스 반환, 콜백함수로 찾는 대상의 조건을 전달

find : 콜백함수를 인자로 받아서 객체의 요소를 반환, 콜백함수로 찾는 대상의 조건을 전달
```javascript
let objectArr = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 5, color: "blue" }
];
let oIndex = objectArr.findIndex((elm) => elm.color === "green");
oIndex = objectArr.findIndex((elm) => {
  return elm.color === "green";
});
console.log("oIndex", oIndex);
oIndex 3
let oElement = objectArr.find((elm) => elm.color === "green");
console.log("oElement", oElement);
oElement {num: 4, color: "green"}
```

filter : 배열에 필터 적용, 필터의 조건을 함수의 인자로 전달
```javascript
// 배열 filter
let filteredArr = objectArr.filter((elm) => elm.color === "blue");
console.log("filteredArr", filteredArr);

filteredArr(2) [Object, Object]
    0: Object
        num: 3
        color: "blue"
    1: Object
        num: 5
        color: "blue"
```

slice : 배열을 인덱스 기준으로 잘라서 반환

slice(a, b) : a <= index < b로, a인덱스 부터 b인덱스 전까지 반환한다.
```javascript
let slicedArr = objectArr.slice(1, 3);
console.log("slicedArr", slicedArr);

slicedArr(2) [Object, Object]
    0: Object
        num: 2
        color: "black"
    1: Object
        num: 3
        color: "blue"
```

concat : 두 배열을 함침. arr1배열 뒤에 arr2배열 삽입
```javascript
let arr1 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" }
];
let arr2 = [
  { num: 4, color: "green" },
  { num: 5, color: "blue" }
];
let sumedArr = arr1.concat(arr2);
console.log("sumedArr", sumedArr);
sumedArr(5) [Object, Object, Object, Object, Object]
    0: Object
        num: 1
        color: "red"
    1: Object
        num: 2
        color: "black"
    2: Object
        num: 3
        color: "blue"
    3: Object
        num: 4
        color: "green"
    4: Object
        num: 5
        color: "blue"
```

sort : 배열의 정렬

기본 sort는 모든 요소를 문자열 형태로 정렬함

숫자 배열을 숫자형으로 정렬하기 위해서는 compare 함수를 생성하여 인자로 전달해야함.
```javascript
let charArr = ["나", "다", "가"];
charArr.sort();
console.log("charArr", charArr);
charArr(3) ["가", "나", "다"]

let intArr = [0, 1, 3, 2, 10, 30, 20];
intArr.sort();
console.log("intArr", intArr);
intArr(7) [0, 1, 2, 3, 10, 20, 30]
const compare = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
};
intArr.sort(compare);
console.log("intArr", intArr);
intArr(7) [0, 1, 2, 3, 10, 20, 30]
```

join : 배열의 요소를 함침. 인자로 delimiter 값 전달
```javascript
let stringArr = ["권혁찬", "님", "안녕하세요"];
let joinedArr = stringArr.join(", ");
console.log("joinedArr", joinedArr);
joinedArr 권혁찬, 님, 안녕하세요 
```

### JavaScript 응용
#### truthy & falsy
true로 인식되는 truthy한 값들과 false로 인식되는 falsy한 값들로 조건문 등을 간략하게 코딩할 수 있다.

truthy 값  :
- true: 불리언 true
- 숫자: 0을 제외한 모든 숫자(양수, 음수, 소수 등)
- 문자열: 공백을 포함한 모든 비어있지 않은 문자열
- 객체: 빈 객체 또는 속성이 있는 객체
- 배열: 빈 배열 또는 요소가 있는 배열
- 함수: 함수 객체(함수 선언식, 함수 표현식 등)
- 정규 표현식: 빈 정규 표현식이 아닌 모든 정규 표현식

falsy 값 :
- false: 불리언 false
- 0: 숫자 0
- -0: 음의 숫자 0
- 0n: BigInt의 0
- '' 또는 "": 빈 문자열
- null: 값이 없음을 나타내는 특별한 값
- undefined: 값이 할당되지 않음을 나타내는 특별한 값
- NaN: 숫자가 아님(Not-a-Number)

falsy 속성을 이용하지 않고 모든 조건을 체크한 코드
```javascript
let person = { name: null, age: 30 };
getName(person);
function getName(object) {
  if (object === undefined || object === null) {
    console.log("객체가 아닙니다.");
    return;
  }
  if (object.name === undefined || object.name === null || isNaN(object.name)) {
    console.log("이름이 없습니다.");
    return;
  }
  console.log(object.name);
}
```
falsy 속성을 이용한 간략한 코드
```javascript
let person = { name: null, age: 30 };
getNameFalsy(person);
getNameFalsy(person);
function getNameFalsy(object) {
  if (!object) {
    console.log("객체가 아닙니다.");
    return;
  }
  if (!object.name) {
    console.log("이름이 없습니다.");
    return;
  }
  console.log(object.name);
}
```

#### 비동기처리 & 동기처리
JS 엔진 구동 방식 정리
1. 자바스크립트는 스레드를 1개만 사용함. call Stack을 1개만 가지고 있음
2. 동기처리의 경우 먼저 등장하는 context 및 function 부터 처리하고 처리가 끝난 후 call stack에서 제거되면 다음 function을 수행함
3. 비동기처리의 경우 main context를 call stack에 넣고 이후 setTimeout과 같은 비동기처리 function을 만났을 때 call stack에 쌓는게 아니라 web apis 영역에 추가하여 setTimeout에서 설정한 시간동안 대기함
4. 대기시간이 끝나면 비동기로 작성된 function의 callback function을 callback queue에 넣음
5. event loop로 인해 callback function이 callback queue에서 call stack으로 이동하고 해당 callback function을 수행함

```javascript
// 비동기 방식
// setTimeout : JS 기본 비동기 함수
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 1000);
}
taskA(1, 2, (res) => {
  console.log("A RESULT : ", res);
});
taskB(3, (res) => {
  console.log("B RESULT : ", res);
});
taskC(14, (res) => {
  console.log("C RESULT : ", res);
});
console.log("CODE END");

CODE END
B RESULT1 :6
C RESULT1 :-14
A RESULT1 :3
```

콜백지옥 : 하나의 function의 결과값을 다른 function에 전달해야 하는 경우 callback function을 통해 전달해야 하는데 이런 과정이 중첩되는 경우가 발생할 수 있다.
javascript의 promise를 통해 해당 문제를 해결할 수 있다.
```javascript
taskA(1, 2, (a_res) => {
  console.log("A RESULT : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C RESULT : ", c_res);
    });
  });
});
console.log("CODE END");
```

#### Promise
Promise 객체를 사용하여 비동기처리를 수행할 수 있음.

.then 키워드를 사용하여 통신에 성공했을 경우 처리와, .catch 키워드를 사용하여 통신에 실패했을 경우를 처리할 수 있음.

```javascript
// Primise 객체를 사용했을 때 비동기 처리
// function에서 Promise 객체를 반환하고, Promise 객체 생성 시에 성공, 실패에 대한 콜백함수를 인자로 받는다.
function taskAP(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskBP(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskCP(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

//프로미스 객체를 사용해도 콜백 지옥 형태가 나옴
taskAP(5, 1).then((a_res) => {
    console.log(a_res);
    taskBP(a_res).then((b_res) => {
        console.log(b_res);
        taskCP(b_res).then((c_res) => {
            console.log(c_res);
        });
    });
});
console.log("CODE END");
```
Promise 객체를 사용해도 실제 호출 시 callback hell 현상이 발생하는데, 이는 Promise 객체를 제대로 활용하지 않아서임.

Promise 객체를 제대로 활용한 방법은 taskAP function의 콜백함수에서 taskBP를 호출하는 것이 아니라 taskAP function의 콜백함수에서 taskBP function을 반환하여 사용하는 것.
```javascript
// Primose 객체를 제대로 활용한 예시
taskAP(5, 1)
  .then((a_res) => {
    console.log(a_res);
    return taskBP(a_res);
  }) 
  .then((b_res) => {
    console.log(b_res);
    return taskCP(b_res);
  })
  .then((c_res) => {
    console.log(c_res);
  });
console.log("CODE END");
```

#### async & await
async, await 키워드를 사용하면 비동기 처리를 보다 간편하게 처리할 수 있음

async 키워드를 붙히면 promise 객체를 return 하는 비동기 처리 함수가 됨, then/catch 키워드를 사용할 수 있음

await 키워드를 붙히면 해당 함수를 동기로 처리함, await 키워드는 async 키워드가 붙은 function 내에서만 사용 가능 

```javascript
// 인자로 받은 ms를 기다리는 비동기함수
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  await delay(3000);
  // delay function 호출 시 await 키워드를 사용하여 3초가 지나고 "hello Async"을 return 함
  return "hello Async";
}

helloAsync().then((res) => {
  console.log(res);
});
```
#### fetch를 통한 API 호출
fetch 키워드를 통해 API를 호출하고 그 결과를 Promise 객체로 받을 수 있다.

https://jsonplaceholder.typicode.com/posts : API 테스트를 위한 URL
```javascript
async function getData() {
  // 값을 받아오고 그 값의 json을 뽑아내기 위해서 await 키워드 사용
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  return rawResponse.json();
}

// async 키워드를 통해 getData function을 비동기함수로 생성했으므로 then 키워드를 사용하여 결과값 확인
getData().then((res) => {
  console.log(res);
});
```

### Node.js 기초
#### 개념
브라우저에서만 동작 가능한 v8엔진을 외부에서도 실행 가능하게 구성

javascript 파일을 외부에서 실행 및 테스트 가능

#### exports, require module
Node.js에서 기능 별로 js파일을 관리할 때, 외부 js 파일을 읽어들이고 기능을 사용하기 위해서 exports, require 키워드 활용

외부에서 접근 가능하게 설정할 파일에 exports module 키워드를 사용하고 외부 js 파일을 사용할 main js 파일에서 require 키워드를 사용
```javascript
// calc.js
// 계산 기능을 하는 파일
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// 다른 파일에서 calc.js를 사용하기 위해 module exports
module.exports = {
    moduleName : "calc module",
    add : add,
    sub : sub,
};
```
```javascript
// index.js
// require 키워드를 통해 exports된 모듈 가져오기
const calc = require("./calc");

console.log(calc.add(1,2));
console.log(calc.sub(10,2));
```

#### package
Node.js의 설정 및 관리는 package.json 파일에서 처리함

- main : 패키지 실행 시 처음 접근하는 파일 설정
- scripts > start : npm start를 통한 실행 시 자동으로 실행할 파일
- dependencies : npm install을 통해 추가된 모듈 정보
```json
// package.json
{
  "name": "package-example1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "hyeokchan",
  "license": "ISC",
  "dependencies": {
    "randomcolor": "^0.6.2"
  }
}
```
npm install을 통한 모듈 설치 시 node_modules 폴더, package-lock.json 파일 생성됨

기본 package.json 파일에서는 설치한 모듈의 간략한 정보만 나타내고 package-lock.json 파일에서 설치된 모듈의 상세 정보를 관리함
```json
// package-lock.json
{
  "name": "package-example1",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "package-example1",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "randomcolor": "^0.6.2"
      }
    },
    "node_modules/randomcolor": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/randomcolor/-/randomcolor-0.6.2.tgz",
      "integrity": "sha512-Mn6TbyYpFgwFuQ8KJKqf3bqqY9O1y37/0jgSK/61PUxV4QfIMv0+K2ioq8DfOjkBslcjwSzRfIDEXfzA9aCx7A=="
    }
  }
}
```
node_modules 하위에 있는 모듈은 경로가 아닌 이름으로만 접근 가능
```javascript
const randomColor = require("randomcolor");
console.log(randomColor());
// #ff978c
```

### React.js 기초
#### React 사용 이점
1. 컴포넌트화 화면 구성으로 인한 관리 편의성, 같은 부분을 여러 소스에서 수정할 필요가 없다.
2. Virtual Dom으로 인해 화면 렌더링 시 이점

#### React 프로젝트 기본 구조
1. public > index.html 존재, 여기서 id가 root인 div 확인 가능
2. src > index.js에서 id가 root인 dom을 렌더링, 여기서 다른 컴포넌트 붙혀서 사용(관례상 App)
3. src > App.js index.js에서 사용한 App 확인

#### JSX 문법
1. js에서 사용하던 기능 처리 코드와 html 소스를 함께 관리
2. return되는 html에는 최상위 태그가 있어야 하며 닫는 태그가 필수적으로 있어야함
3. export default 키워드를 사용하여 다른 파일에서 사용할 수 있음
```javascript
function App() {

  let name = "권혁찬";
  let number = 5;

  const counterProps = {
    initialValue : 5,
    a : 1,
    b : 2
  };

  return (
    // 최상위 태그가 반드시 있어야 한다.
    // 컴포넌트를 props로 줄 수도 있다.
    <Container>
      <div className="App">
        <MyHeader></MyHeader>
        {/* 자식 컴포넌트에게 값 전달, 객체를 스프레드연산자(...)를 사용하여 편하게 넘길 수 있다.*/}
        <Counter {...counterProps}></Counter>
        <MyFooter></MyFooter>
      </div>
    </Container>
    
  );
}
```

#### state
1. useState키워드를 통해 상태값을 관리함
2. useState의 인자는 상태의 초기값 
3. useState의 반환값은 상태값을 가지는 변수와 변수를 변경시키는 함수
4. 상태가 변경되면 해당 화면을 rerender
5. 하나의 컴포넌트(Counter)에 여러개의 상태변수를 가져도 상관없음.
```javascript
import React, {useState} from "react";
...
const [count, setCount] = useState(props.initialValue);
const [count, setCount] = useState(props.initialValue);
const onIncrease = () => {
    setCount(count+1);
}
const onDecrease = () => {
    setCount(count-1);
}
...
return (
    <div>
        <h2>{count}</h2>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        {/* 부모요소가 rerender가 되면 자식 요소도 rerender가 된다 */}
        <OddEvenResult count={count}></OddEvenResult>
    </div>
);
```
#### props
1. 부모 컴포넌트에서 자식 컴포넌트로 값을 전달하기 위한 props
2. 부모 컴포넌트에서 자식 컴포넌트를 사용할 때 인자로 줄 수 있음
3. 객체를 스프레드 연산자를 통해 간편하게 전달 가능
```javascript
const counterProps = {
    initialValue : 5,
    a : 1,
    b : 2
  };
...
return (
    // 최상위 태그가 반드시 있어야 한다.
    // 컴포넌트를 props로 줄 수도 있다.
    <Container>
        <div className="App">
            <MyHeader></MyHeader>
            {/* 자식 컴포넌트에게 값 전달, 객체를 스프레드연산자(...)를 사용하여 편하게 넘길 수 있다.*/}
            <Counter {...counterProps}></Counter>
            <MyFooter></MyFooter>
        </div>
    </Container>

);
```
4. 자식 컴포넌트에서는 인자로 받아서 사용
5. 부모로 부터 받은 Props가 없는 경우 에러 방지를 위해 사용하는 Props 설정 가능
```javascript
const Counter = (props) => {
    ...
    const [count, setCount] = useState(props.initialValue);
}
...
// 부모로 부터 받은 Props가 없는 경우 에러 방지를 위해 사용하는 Props
Counter.defaultProps = {
    initialValue : 0,
}
```
6. 부모 컴포넌트가 rerender되면 자식 컴포넌트도 rerender됨

#### react 사용자 입력 처리
1. state변수를 입력받는 요소들의 객체로 구성할 수 있음.
```javascript
const [state, setState] = useState({
        author : "",
        content : "",
        emotion : 1,
    });
```
2. 객체로 구성 시 onChange 함수를 하나로 구성할 수 있음. 스프레드 연산자 활용
```javascript
// state변수를 객체로 묶으면 상태변화에 대한 처리를 공통화 할 수 있음
const handleChangeState = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
}
...
<div>
    <input name="author" ref={authorInput} value={state.author} onChange={handleChangeState}></input>
</div>
<div>
    <textarea name="content" ref={contentInput} value={state.content} onChange={handleChangeState}>
    </textarea>
</div>
```
3. DOM 조작은 useRef 키워드를 사용하여 처리함
4. 요소에 ref를 설정하여 어떤 변수가 해당 요소를 처리할 지 지정
```javascript
const authorInput = useRef();
const contentInput = useRef();
...
<input name="author" ref={authorInput} value={state.author} onChange={handleChangeState}></input>
<textarea name="content" ref={contentInput} value={state.content} onChange={handleChangeState}>
```
4. useRef 변수를 통해 DOM요소 편리하게 제어 (.current)
```javascript
if(state.author.length < 1){
    // ref로 가져와서 처리
    authorInput.current.focus();
    return;
}
if(state.content.length < 5){
    contentInput.current.focus();
    return;
}
```

#### react 배열 처리
1. 일반적으로 배열을 처리하는 컴포넌트 하위에 배열 row1개를 처리하는 컴포넌트를 두어 처리
   
    (App.js > DiaryList.js > DiaryItem)
2. 배열을 처리하는 컴포넌트에서는 부모 컴포넌트로 부터 배열 데이터를 props로 받음
3. map 내장함수를 활용하여 반복 처리하면서 DiaryItem.js render
```javascript
const DiaryList = ({diaryList}) => {
    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {/* map 내장 함수 사용 */}
                {diaryList.map((it)=>(
                    <DiaryItem key={it.id} {...it}></DiaryItem>
                ))}
            </div>
        </div>
    );
}
```
4. DiaryItem에서는 map내장 함수를 통해 row별로 전달 받은 데이터를 출력

#### 하나의 공통된 데이터셋을 여러 컴포넌트에서 활용해야 하는 경우

DiaryEditor.js에서 신규로 작성한 데이터를 DiaryList.js에서 출력해야하는 경우 처럼 공통된 데이터셋을 사용하는 경우

두 컴포넌트의 상위 컴포넌트인 App.js에 데이터셋에 대한 state변수를 생성하여 처리하면 rerender를 관리하기 편함

1. App.js에 state변수와 setData를 사용하는 create 함수 생성
```javascript
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
```
2. DiaryEditor.js에 create함수를 props로 전달해서 사용하도록 함
3. DiaryEditor.js에서 데이터 추가가 발생하면 App.js onCreate함수의 setData가 처리되어 DiaryList.js도 rerender 처리됨

#### props 중첩 전달
1. App.js에서 공통으로 관리하는 state변수를 하위 컴포넌트의 하위컴포넌트에 전달해야한다면 중첩으로 전달하면 된다.
   (App.js => DiaryList => DiaryItem)

#### React 라이프사이클
1. React Hooks
- 클래스형 컴포넌트에서만 사용가능한 기능들을 함수형 컴포넌트에서 사용 가능하도록 만들기 위한 기능
- useState, useRef, useEffect 등이 있음
2. useEffect를 이용하여 함수형 컴포넌트에서 React의 라이프사이클을 관리할 수 있음
3. 라이프사이클로는 mount, update, unmount 상태를 가짐
- mount : 컴포넌트가 생성되는 시점
```javascript
// dependency에 빈 배열을 전달하면 컴포넌트가 마운트될 때에만 동작한다.
useEffect(()=>{
   console.log("mount");
},[]);
```
- update : 컴포넌트가 변경되는 시점
```javascript
// dependency에 아무값을 전달하지 않으면 컴포넌트가 변경될 때마다 동작한다.
 useEffect(()=>{
     console.log("update");
 });

 // dependency에 state를 전달하면 해당 state가 변경될 때에만 동작한다.
 useEffect(()=>{
     console.log(`count is update : ${count}`);
     if(count > 5){
         alert("count가 5를 넘었습니다. 따라서 1로 초기화 합니다.");
         setCount(1);
     }
 },[count]);

 useEffect(()=>{
     console.log(`text is update : ${text}`);
 },[text]);
```
- unmount : 컴포넌트가 사라지는 시점, mount시 동작하는 useEffect에 return 함수를 활용
```javascript
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
```

#### React API 호출
1. fetch, async, await 키워드를 사용하여 api 호출 및 초기 데이터 세팅 가능
2. useEffect 키워드를 사용하여 mount 시점에 api 호출
```javascript
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
```

#### React 개발 시 크롬 확장프로그램 React Developer Toos 활용

#### useMemo 키워드를 사용한 메모이제이션, 최적화
1. useMemo 키워드를 사용하여 한번 계산한 값을 기억해서 연산을 최적화할 수 있다.
2. useMemo의 첫번째 인자에는 연산을 수행하는 콜백함수를 주고 두번째 인자에는 dependency Array를 준다.
3. dependency array가 변경되었을 때에만 연산을 재수행 한다.
4. useMemo의 반환 값은 함수가 아니라 콜백함수의 결과값 자체이다.
5. 일기가 수정되었을 때에는 연산을 수행하지 않고 신규등록, 삭제되었을 때에만 연산을 수행하도록 처리할 수 있다.
```javascript
// 메모이제이션, useMemo의 첫번째 인자인 콜백함수가 return하는 값을 기억해서 최적화
// data.length가 변화할 때만 콜백함수 실행, 변화하지 않으면 기억하는 값을 그대로 반환
// useMemo는 함수가 아닌 값을 리턴함, 결과값을 값으로 사용
const getDiaryAnalysis = useMemo(() => {
 console.log("일기 분석 시작");
 const goodCount = data.filter((it)=>it.emotion >= 3).length;
 const badCount = data.length - goodCount;
 const goodRatio = Math.floor((goodCount/data.length)*100);
 return {goodCount, badCount, goodRatio};
}, [data.length]);

const {goodCount, badCount, goodRatio} = getDiaryAnalysis;
```