//Fill the array with the numbers 1, 2 and 3 in any order you choose!
const array = [2, 1, 3];// <-- create an array here!

module.exports = array;



//Complete the function hasOne which takes in an array of numbers. Return true if any of the numbers in the array are 1. Return false if not.
function hasOne(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            return true;
        }
    }
    return false;
}

module.exports = hasOne;




//Given an array, find the sum of all even values inside the array and return it.
function sumEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        sum += array[i];
    }
}
return sum;
}
module.exports = sumEven;




//Write a function that will take an array of numbers and return a new array that only contains unique numbers.
function unique(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (newArray.indexOf(element) === -1) {
            newArray.push(element);
        }
    }
    return newArray;
}
module.exports = unique;




//Complete the addOne function to add 1 to every element within the array. Since we are modifying the array directly do not return it.
function addOne(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
}
module.exports = addOne;





//Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.
//Modify the array directly and do not return anything from this function.
function removeOccurrences(array, num) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1);
        }
    }
}
module.exports = removeOccurrences;
