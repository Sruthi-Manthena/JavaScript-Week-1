//Let's create an object representing a pizza order!  In the order object, add the following three keys with values accordingly.
//pizzas - Any number greater than zero.
//extraCheese - A boolean. Either true or false.
//deliveryInstructions - Any string of instructions.

const order = {
    pizzas: 3,
    extraCheese: false,
    deliveryInstructions: "urgent",
};

module.exports = order;


//Find the number of pizzas in an order object.
function numberOfPizzas(order) {
    return order['pizzas'];
}

module.exports = numberOfPizzas;



//Given an array of pizza orders, return the total number of pizzas ordered.
//The orders are an array of objects, each with pizzas key inside:

const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}
module.exports = numberOfPizzas;




//Let's create an enumeration like CARD_SUITS above. 
//Our enumeration will be named ORDER_TYPES and describe the different types of orders that are possible in our system.
//The first type should be PIZZA, with a value of 0. After that, create at least 2 more options of your choice!
const ORDER_TYPES = {
    PIZZA: 0,
    FRIES: 1,
    PASTA: 2,
}

module.exports = ORDER_TYPES;



//Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.
//The orders will have a type keyword:
const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}

module.exports = numberOfPizzas;




//Given an object, find the number of keys inside the object. Return this number.
function numberOfKeys(object) {

    return Object.keys(object).length;
}

module.exports = numberOfKeys;



//The object passed into removeSecret has a secret key that must be removed!
//Set the value of this key to undefined to pass the test cases. Modify the object directly, there is no need to return it.
function removeSecret(object) {
    delete object.secret;
}

module.exports = removeSecret;
