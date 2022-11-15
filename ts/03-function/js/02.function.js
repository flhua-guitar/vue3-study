"use strict";
// 函数  基本参数的使用
// operator: + - * / % 如果用户在使用的时候，有传递op操作符，则使用用户传递的
// 如果没有则使用默认的+
function operatorA(a, b, op) {
    return a + b;
}
console.log(operatorA(1, 2, '+'));
// op？ 代表可选的  可传可不传
function operatorB(a, b, op) {
    if (op && (op === '*')) {
        return a * b;
    }
    else if (op && (op === '-')) {
        return a - b;
    }
    else {
        return a + b;
    }
}
console.log(operatorB(1, 2));
