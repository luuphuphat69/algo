//import initTwoSum from './twosum/twosum.js';
//import palindrome_number from './palindrome number/palindrome_number.js';
//import initRomanToInteger from "./roman to integer/roman_to_integer.js";
//import initLongestCommonPrefix from "./longest common prefix/longest_common_prefix.js";
//import initValidParentheses from "./valid parentheses/valid_parentheses.js";
import initRemoveDuplicateFromSortedArray from "./remove duplicate from sorted array/remove_duplicate_from_sorted_array.js";

const app = () =>{
    //initTwoSum();

    //palindrome_number(1000021);

    //initRomanToInteger('MCMXCIV');

    // var strs = ["cir","car"]
    // initLongestCommonPrefix(strs);

    //initValidParentheses(']')

    var nums = [0,0,1,1,1,2,2,3,3,4];
    initRemoveDuplicateFromSortedArray(nums);
}
app();