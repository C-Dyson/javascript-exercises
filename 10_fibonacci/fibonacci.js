const fibonacci = function(length) {
    if (length == 0) { 
    return 0;
    }

    if (length < 0) {
    return "OOPS";
    }

    let fibonacciArray = [1, 1];
    for (let i = 2; i < length; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i -2];
    }
    return fibonacciArray[length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
