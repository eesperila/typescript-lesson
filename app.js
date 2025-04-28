var userData;
var trueData;
userData = "now";
userData = 5;
if (typeof userData === "string")
    trueData = userData;
function generateErrorCode(description, errorCode) {
    throw {
        message: description,
        code: errorCode,
    };
}
function infiniteLoop() {
    while (true) { }
}
generateErrorCode("Error happened", 1009);
infiniteLoop();
