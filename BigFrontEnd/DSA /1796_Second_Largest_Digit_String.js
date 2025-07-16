var secondHighest = function(s) {
    let digits = new Set()

    for(let char of s) {
        if(!isNaN(char)){
            digits.add(Number(char))
        }
    }

    let sorteddigits = Array.from(digits).sort((a, b) => b - a)

    return sorteddigits.length >= 2 ? sorteddigits[1] : -1 
};