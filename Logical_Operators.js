//We willEat if we have pizza, donuts or cookies! 
//Complete the willEat function. The three arguments will be boolean values (true or false). If any of them are true, return true.

function willEat(hasPizza, hasDonuts, hasCookies) {
    return hasPizza || hasDonuts || hasCookies;
}
module.exports = willEat;



//The double function here is almost complete! We also want double to be able to handle when x is undefined. If no value is provided for x, return 0.
function double(x) {
    return (x || 0) * 2;
}
module.exports = double;



//We need a function that can determine if the diver can breathe. The function canBreathe will be passed three boolean values:
// isConnected - Is true if the diver connected to the tank
// hasOxygen - Is true if the tank has oxygen
// aboveWater - Is true if the diver is still above water
// If the diver is still aboveWater, they can breathe regardless of the tank connection and oxygen, If they are not aboveWater, 
// they need to be connected to the tank and the tank needs oxygen in order to breathe

function canBreathe(isConnected, hasOxygen, aboveWater) {
    return (isConnected && hasOxygen) || aboveWater;
}
module.exports = canBreathe;




//The function friendName currently retrieves the name property from the friend.
// problem is, sometimes friend is undefined. When this is the case, let's return undefined without throwing an exception.

function friendName(friend) {
    return friend && friend.name;
}
module.exports = friendName;




//There's a river that runs right between two towns. In order for cars to cross the river, we built a bridge!
//Trouble is, there's only room for 1 car to cross the bridge at a time. This means that if both cars were to be crossing at the same time, neither would be able to cross.
//Complete the carCrossing function to return true if and only if one car is crossing.
function carCrossing(aCrossing, bCrossing) {
    return (aCrossing && !bCrossing) || (bCrossing && !aCrossing);
}
module.exports = carCrossing;


