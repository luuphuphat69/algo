/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */
var isValid = function (s) {
    var arr = [];

    for (let i = 0; i < s.length; i++) {
        var element = s[i];
        if (element === '(' || element === '{' || element === '[') {
            arr.push(element);
        } else {
            var lastItem = arr.at(arr.length - 1);
            if(lastItem === undefined){
                return false;
            }else if (lastItem === '[' && element === ']'
                || lastItem === '(' && element === ')'
                || lastItem === '{' && element === '}') {
                arr.pop();
            }else{
                return false;
            }
        }
    }

    if (arr.length > 0) {
        return false;
    } else {
        return true;
    }
};

const initValidParentheses = (s) => {
    console.log(isValid(s));
}
export default initValidParentheses;