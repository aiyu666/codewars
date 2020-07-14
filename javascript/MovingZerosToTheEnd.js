/* MovingZerosToTheEnd
 * [5 kyu]
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 *
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 * from: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
 * 
 * Clear Solution: 
 * var moveZeros = function (arr) {
 *  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
 *}
 */

var moveZeros = function(arr) {
    arr.forEach((val, index) => {
        if (val === 0) {
            arr.splice(arr.indexOf(0), 1)
            arr.push(0)
        }
    })
    return arr
}

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))// returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]))
//[9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]