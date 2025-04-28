function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function getResult(num: number): string {
  return `Result: ${num}`;
}

let addOrGetResult: (num1: number, num2: number) => number;
let getResultFunction: (num1: number) => string;

addOrGetResult = sum;
getResultFunction = getResult;

console.log(addOrGetResult(3, 100));
