// If a is equal to b return true.
function isEqual(a, b) {
    if(a === b){
       return true;
    }
}
module.exports = isEqual;


//If a is not equal to b return true.
function isNotEqual(a, b) {
    if(a!==b){
        return true;        
    }
    else{
        return false;
    }
}
module.exports = isNotEqual;


//If a is not equal to b return true. Otherwise, return false.
function isNotEqual(a, b) {
    if(a!==b){
        return true;        
    }
    else{
        return false;
    }
}
module.exports = isNotEqual;


//Given two arguments, first and last, determine which one is greater. If first is greater than last, return first!
//If last is greater than first, return last! If they are equal, do not return anything.
function greater(first, last) {
    if(first>last){
        return first;
    }
    if(last>first){
        return last;
    }
}
module.exports = greater;



//We have a function isEnough that has two parameters: cost and money. Your goal is to determine if the money is enough to cover the cost. 
//The money should be at least as great as the cost. If it's greater, no problem! Either way, return true. If the money isn't enough, return false. 
function isEnough(cost, money) {
    if(money>cost){
        return true;
    }
    if(money === cost){
        return true;
    }
    if(money<cost){
        return false;
    }
}
module.exports = isEnough;



//Let's imagine we're building a website that requires users to have a subscription to access content.
//We want to encourage users to try it out so we add a free trial. Let's update the canAccess function to allow access if the user has either a subscription
//or a free trial. If either purchasedSubscription or freeTrial are true, return true. Otherwise return false.
function canAccess(purchasedSubscription, freeTrial) {
    if(purchasedSubscription){
        return true;
    }
    else if (freeTrial){
        return true;
    }
    else{
        return false;
    }
}
module.exports = canAccess;
