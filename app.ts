type NoS = number | string;

function addOrCombine(data1: NoS, data2: NoS) {
  let result: NoS;
  if (typeof data1 === "number" && typeof data2 === "number") {
    result = data1 + data2;
  } else {
    result = data1.toString() + data2.toString();
  }
  return result;
}

const combineNumbers = addOrCombine(5, 7);
console.log(combineNumbers);

const combineStrings = addOrCombine("Enrico", "Esperila");
console.log(combineStrings);
