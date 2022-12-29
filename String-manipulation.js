//Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
//If the first character is x return true. If not, return false.
function startsWithX(string) {
    if(string[0] === "x") {
        return true;
    }
    if(string[0] === "X"){
        return true;
    }
    return false;
}
module.exports = startsWithX; 



//Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.
function startsWithX(string) {
    if(string[0] === "x") {
        return true;
    }
    if(string[0] === "X"){
        return true;
    }
    return false;
}
module.exports = startsWithX;   




//Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if it is, false if not.
function endsWithX(string) {
    if(string[string.length - 1].toLowerCase() === "x") {
        return true;
    }
    return false;
}
module.exports = endsWithX;




//Complete the function isAllX to determine if the entire string is made of lower-case x or upper-case X. Return true if they are, false if not.
function isAllX(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() !== "x") {
            return false;
        }
    }
    return true;
}
module.exports = isAllX;



//In the string argument find the index of the first lower-case "x" and return it.
function findFirstX(string) {
    return string.indexOf('x');
}
module.exports = findFirstX;





//Let's find the longer half of the string before and after the x! First, you'll need to find the lower-case x.
//Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
//Take the longer string and return it!
function splitAtX(string) {
    const index = string.indexOf('x');
    const a = string.slice(0, index);
    const b = string.slice(index + 1);
    return (a.length > b.length) ? a : b;
}

module.exports = splitAtX;
