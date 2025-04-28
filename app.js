var Vehicle = /** @class */ (function () {
    function Vehicle(model) {
        this.modelType = model;
    }
    return Vehicle;
}());
var model_type = {
    type: "Car",
    color: "Red",
    event: function () { return console.log("trigger event"); },
};
var car = new Vehicle(model_type);
console.log(car);
