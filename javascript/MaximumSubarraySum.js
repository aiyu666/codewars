/** Maximum subarray sum
 * [5 kyu]
 *
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
 * maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 * // should be 6: [4, -1, 2, 1]
 * Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
 *
 * Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 *
 * from: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
 */

function maxSequence(arr) {
    if (arr.length === 0) return 0
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let targetArray = []
    let maxValue = Math.max.apply(Math, arr)
    for (let i = 0; i < arr.length; i++) {
        targetArray = []
        for (let j = i; j < arr.length; j++) {
            targetArray.push(arr[j]);
            if (targetArray.reduce(reducer) > maxValue) maxValue = targetArray.reduce(reducer);
        }
    };
    if (maxValue < 0) return 0;
    return maxValue;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //  [4, -1, 2, 1] -> 6 
console.log(maxSequence([])) // 0