//We want to write a function summation that will find the sum of all the values from 1 to (and including) n. The value n is passed into our function.
//Similar to the for loop above, you can initialize some value i to start at 1. The value should reach n but never exceed it.
function summation(n) {
    let sum = 0;

    for (let i=1;i<=n;i++) {
        sum = sum + i;
    }
    return sum;
}
module.exports = summation;



//Taking in some integer value n, find the factorial for that number and return it.
function factorial(n) {
    let result = 1;
    for(let i=1; i<=n; i++ ){
        result = result*i;
    }
    return result;
}
module.exports = factorial;




//Let's create a function scream which will take in a value n and return a string with the letter "a" repeated that many times. 
function scream(n) {
    let scream = "";
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            scream += "a";
        }
        else {
            scream += "A";
        }
    }
    return scream;
}
module.exports = scream;



//Let's modify our function to return a scream alternating between lower and capital case. 
function scream(n) {
    let scream = "";
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            scream += "a";
        }
        else {
            scream += "A";
        }
    }
    return scream;
}
module.exports = scream;


//Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.
function topDouble(value, top) {
    while(value < top) {
        value *= 2;
    }
    return value / 2;
}
module.exports = topDouble;



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
