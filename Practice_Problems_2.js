//The function shortestString takes two string arguments: str1 and str2. Determine which of the two strings is shorter, return that string.
function shortestString(str1, str2) {
if (str1.length < str2.length) {
        return str1;
    } else {
        return str2;
    }
}



//The function halfValue takes an array of numbers. It should return a new array with all the original values halved.
//Odd numbers should be rounded up to the nearest whole number.
function halfValue(numbers) {
    const newArr = [];

    for (let i = 0; i < numbers.length; i++) {
        newArr[i] = Math.round(numbers[i] / 2);
    }

    return newArr;
}



//The function countC takes a string str as its only argument.
//This function should return the number of c's found in the string. It must count both lower-case c and upper-case C
function countC(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "c") {
            count++;
        }
    }

    return count;
}




//Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".
//Handle lowercase and uppercase vowels.
 const vowels = ["a", "e", "i", "o", "u"];

    function countVowels(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i].toLowerCase())) count++;
        }

        return count;
    }




//Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.
//For example, reverse("cat") would return the string "tac".
function reverse(string) {
    let newStr = "";

    for(let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }

    return newStr;
}




//Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.
//A palindrome is a word that is spelled the same forwards as it is backwards.
function isPalindrome(string) 
{
    return string === reverse(string);
}

function reverse(string) 
{
    let newStr = "";

    for (let i = string.length - 1; i >= 0; i--) 
    {
        newStr += string[i]
    }

    return newStr;

}




//Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.
//Assume both arrays are the same length.
function sumTogether(arr1, arr2) 
{
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) 
    {
        const sum = arr1[i] + arr2[i];
        newArr.push(sum);                     //The push() method adds one or more elements to the end of an array
                                              // and returns the new length of the array.
    }
    return newArr;
}




//Write a function countElements that takes in an array and returns an object a count of each element in the array.
function countElements(elements) {
    let elementCount = {};
    for (let i = 0; i < elements.length; i++) {
        if (!elementCount[elements[i]]) 
            elementCount[elements[i]] = 1;
        } else {
            elementCount[elements[i]] += 1;
        }
    }

    return elementCount;
}




//The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.
//The cards are represented by the first letter in the name of the card:
//"K" is 4 points
//"Q" is 3 points
//"J" is 2 points

function playerHandScore(hand) {
    const scores = {
        "K": 4,
        "Q": 3,
        "J": 2
    }

    const handArr = hand.split("");
    let sum = 0;
    for (let i = 0; i < handArr.length; i++) {
        const score = scores[handArr[i]];
        sum += score;
    }

    return sum;
}





