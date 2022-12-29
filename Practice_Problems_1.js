//Given an integer value num, determine if it is even. If it is even, return true. Return false otherwise.
function isEven(num) {
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }   
}
module.exports = isEven;


//The function smallerNumber will be given two unequal numbers: num1 and num2.
//Your goal is to find the smaller number and return it!
function smallerNumber(num1, num2) {
if(num1<num2){
    return num1;
}
else{
    return num2;
}
}
module.exports = smallerNumber;


//A string is stored in the variable fakeName. Take this fake name and use it to replace every occurrence of "John" in the message.
//Do not change the message in other way.
const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;
module.exports = message;



//The function checkNumber takes a single argument: a number num.
//The function should return the string positive if the number is positive, negative if the number is negative, and zero if the number is zero.
function checkNumber(num) {
    if(num<0){
        return "negative";
    }
    if(num>0){
        return "positive";
    }
    else if(num === 0){
        return "zero";
    }
}
module.exports = checkNumber;





//The function maxSum takes a number argument num. Your goal is find the sum all of numbers, starting from 1, up to and including num.
//For example, if num is 5, your sum would be 1 + 2 + 3 + 4 + 5 or 15.
function maxSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
module.exports = maxSum;
