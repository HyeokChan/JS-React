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