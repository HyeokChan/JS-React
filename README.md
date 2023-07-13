# JS-React

---
### JavaScript 기본
#### 함수선언식
```javascript
console.log(helloB());

function helloB() {
  return "Hello world B";
}
// => Hello world B
```
선언식함수는 함수 호이스팅으로 함수가 가장 위에서 처리된 것으로 적용되어 정상 동작함. 
```javascript
function helloB() {
    return "Hello world B";
}
console.log(helloB());
```
#### 함수표현식
```javascript
console.log(helloA());
let helloA = function () {
  return "Hello world A";
};
// => TypeError: helloA is not a function
```
표현식함수는 호이스팅 되지 않아서 함수를 먼저 호출할 시 에러 발생 

---

#### 객체
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
javascript 객체에는 다양한 타입의 변수 설정 가능함.

키 부분은 문자열로 구성되나, 생성시에는 "" 없이 이름 그대로 사용

```javascript
person.gender = "M";
person["location"] = "ko";
```
점표기법과 괄호표기법

괄호표기법 안에는 문자열 형태로 작성해야함. 그렇지 않으면 변수로 인식해서 에러 발생

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
객체 내 함수에서 this 키워드를 사용하여 객체가 가지고 있는 변수 접근 가능

``를 통해 문자열과 변수 한 문장으로 이어서 코딩 가능
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
in 키워드를 사용하여 객체안에 키가 존재하는지 확인 가능하지만,
undefined, null 값도 존재하는 것으로 체크함
