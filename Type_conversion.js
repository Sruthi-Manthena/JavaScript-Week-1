//Given a string, convert it to a number. If the string is not a number, return 0.
function toNumber(string) {
    return Number(string) || 0;
}
module.exports = toNumber;





//Given two values a and b, combine them together as strings and return the result. The values may be a number, a boolean or a string.
function combineToString(a, b) {
    return a + '' + b;
}
module.exports = combineToString;





//Given some value a return whether or not the value is truthy.
function isTruthy(a) {
    if(a){
        return true;
    }
    return false;    
}
module.exports = isTruthy;





//Return true if a and b are loosely equal to each other. If not, return false.
function looseEquals(a, b) {
    return a == b;
}
module.exports = looseEquals;





//Given an object, turn it into JSON and return the resulting string.
function toJSON(obj) {
    return JSON.stringify(obj);
}
module.exports = toJSON;




//Create JSON that can be parsed to a person object with 3 properties:
// name: with any string value
// age: with any number value
// isReal: with any boolean value
const personJSON = `
    {
        "name": "Dan",
        "age": 29,
        "isReal": true
    } 
`;
module.exports = personJSON;
