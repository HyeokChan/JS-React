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
