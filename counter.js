/**
 * @param {number} n
 * @return {Function} counter
 */
 
var createCounter = function(n) {
 var counter=0;   
    return function() {
        const result = n + counter;
        counter++;
        return result;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */