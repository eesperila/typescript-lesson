function addOrCombine(data1, data2) {
    var result;
    if (typeof data1 === "number" && typeof data2 === "number") {
        result = data1 + data2;
    }
    else {
        result = data1.toString() + data2.toString();
    }
    return result;
}
var combineNumbers = addOrCombine(5, 7);
console.log(combineNumbers);
var combineStrings = addOrCombine("Enrico", "Esperila");
console.log(combineStrings);
