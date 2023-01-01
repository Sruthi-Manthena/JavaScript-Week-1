

//Time to throw your first error! Simply throw a new error inside the throwError function.
//If you throw an error properly the tests will catch the error and you will pass the stage!
function catchError(fn) {
   try {
        fn();
    }
    catch(ex) {
        return ex;       
    }
    return false;
}
module.exports = catchError;





//The argument fn is a function that will throw an error when invoked. Catch the error that is thrown when invoking fn.
//The tests will pass as long as the function is called and the exception is caught.
function catchError(fn) {
   try {
        fn();
    }
    catch(ex) {
        return ex;       
    }
    return false;
}
module.exports = catchError;




//Modify catchError to return the error if one is thrown. If no error is thrown, return false.
function catchError(fn) {
   try {
        fn();
    }
    catch(ex) {
        return ex;       
    }
    return false;
}
module.exports = catchError;






//Pick an error from one of the situations mentioned in details. Write code that will make one of these errors occur.
//As long as any of the error types mentioned above are thrown, the test cases will pass.
function startError() {
    var x = 3;
    x();
}
module.exports = startError;
