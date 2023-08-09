// 계산 기능을 하는 파일
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// 다른 파일에서 calc.js를 사용하기 위해 module exports
module.exports = {
    moduleName : "calc module",
    add : add,
    sub : sub,
};