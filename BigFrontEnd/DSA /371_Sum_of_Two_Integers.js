var getSum = function(a, b) {
    let carry

    while(b!==0) {
        carry = a&b
        a = a^b
        b = carry << 1
    }

    return a
};
