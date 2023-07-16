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
