/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    const result = [];

    const dfs = (i, S, slate) => {
        // base case
        if (i === S.length){
            result.push(slate.join(''));
            return;
        }

        // dfs recursive case
        let char = S[i]

        if(!Number.isInteger(parseInt(char))) {
            // uppercase 
            slate.push(char.toUpperCase());
            dfs(i + 1, S, slate);
            slate.pop()

            // lowercase
            slate.push(char.toLowerCase());
            dfs(i + 1, S, slate);
            slate.pop()
        } else {
            slate.push(char)
            dfs(i + 1, S, slate)
            slate.pop();
        }
    } 

    dfs(0, S, []);
    return result;
};