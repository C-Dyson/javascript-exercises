const sumAll = function(n, x) {
    if ((n <= 0 || x <= 0) || (typeof n !== 'number' || typeof x !== 'number')) {
        return "ERROR";
    }

    else if (n > x) {
        [n, x] = [x, n];
    }

    let total = 0;
    while (n <= x) {
        total += n;
        n++;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
