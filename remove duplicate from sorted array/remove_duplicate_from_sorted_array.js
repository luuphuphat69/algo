/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let diffValue = 0;
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] === nums[i-1]){
            continue;
        }else{
            diffValue++;
            nums[diffValue] = nums[i];
        }
    }
    console.log('New nums arr: ', nums);
    return diffValue;
};

const initRemoveDuplicateFromSortedArray = (nums) => {
    removeDuplicates(nums);
}
export default initRemoveDuplicateFromSortedArray;