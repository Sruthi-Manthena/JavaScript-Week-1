//Create a function which retrieves the property name on this. You can expect the property to exist. 
function thisName() {
    return this.name;
}
module.exports = thisName.bind({ name: 'Bob' });




//Create a new function from thisName that is bound to an object with the name "Bob".
//Export this new function instead of thisName. When it is called, it should return "Bob":
function thisName() {
    return this.name;
}
module.exports = thisName.bind({ name: 'Bob' });




//Add a function getName to the obj that will retrieve the name when it is called on an object.
const obj = {
    name: 'Bob',
    getName: function () {
        return this.name;
    }
}
module.exports = obj;




//Within the function Celebrity, a method is used to fetch the celebrity's age. 
//The second argument to fetchAge is a callback function. The callback function will receive age as an argument. Fix this.age to refer to the same this as the function Celebrity.
const fetchAge = require('./fetchAge');
function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, (age) => {
        this.age = age;
    });
}
module.exports = Celebrity;
