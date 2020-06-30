/*
[6 kyu]
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
    return A.reduce((a, b) => a ^ b)
};
console.log('==========')
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) //5