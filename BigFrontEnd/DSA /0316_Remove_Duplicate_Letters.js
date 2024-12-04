var removeDuplicateLetters = function(s) {
    const stack = [];
    const seen = new Set();
    const lastIndex = {};

    // Record the last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Skip if the character is already in the result
        if (seen.has(char)) continue;

        // Remove characters from the stack if:
        // 1. They are lexicographically larger than the current character
        // 2. They still have occurrences later in the string
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > char &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            seen.delete(stack.pop());
        }

        // Add the current character to the stack and mark it as seen
        stack.push(char);
        seen.add(char);
    }

    // Join the stack to form the final string
    return stack.join('');
};