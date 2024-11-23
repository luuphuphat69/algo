/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
An integer is a palindrome when it reads the same forward and backward.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let palindrome = 0;
    var numArr = [];

    if (x < 0) {
        return false;
    }
    const firstX = x;
    while(x > 0){
        let remainder= x % 10;
        numArr.push(remainder);

        x = Math.floor(x / 10);
        if(x === 0){
            break;
        }
    }
    
    var reverseArr = numArr.reverse();
    for(let i = 0; i < numArr.length; i++){
        palindrome += (reverseArr[i] * Math.pow(10, i));
    }
    if(palindrome - firstX != 0){
        return false;
    }
    return true;
};

const initPlaindromeNumber = (number) => {
    const checkIsPalindrome = isPalindrome(number);
    console.log(checkIsPalindrome);
}
export default initPlaindromeNumber;