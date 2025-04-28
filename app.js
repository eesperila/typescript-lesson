function sum(num1, num2) {
    return num1 + num2;
}
function getResult(num) {
    return "Result: ".concat(num);
}
var addOrGetResult;
var getResultFunction;
addOrGetResult = sum;
getResultFunction = getResult;
console.log(addOrGetResult(3, 100));
