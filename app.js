var AccessTypes;
(function (AccessTypes) {
    AccessTypes[AccessTypes["ADMIN"] = 0] = "ADMIN";
    AccessTypes[AccessTypes["MODERATOR"] = 1] = "MODERATOR";
    AccessTypes[AccessTypes["USER"] = 2] = "USER";
})(AccessTypes || (AccessTypes = {}));
var student = {
    name: "Juan",
    age: 19,
    gender: "M",
    interests: ["Driving"],
    access: [1, "test"],
    sampleEnum: AccessTypes.ADMIN,
};
if (student.sampleEnum == AccessTypes.ADMIN) {
    console.log("Student is admin.");
}
console.table(student.interests);
