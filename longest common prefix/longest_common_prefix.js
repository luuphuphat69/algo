/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let baseWord = strs[0]; 
    let commonPrefix = ""; 

    for (let i = 0; i < baseWord.length; i++) {
        const currentChar = baseWord[i];
        for (let j = 1; j < strs.length; j++) {
            // If character at current position doesn't match or the string is shorter
            if (strs[j][i] !== currentChar || i >= strs[j].length) {
                return commonPrefix;
            }
        }
        // If all strings have the same character at the current position
        commonPrefix += currentChar;
    }

    return commonPrefix;
};

const initLongestCommonPrefix = (strs) => {
    const init = longestCommonPrefix(strs);
    console.log(init);
}
export default initLongestCommonPrefix;