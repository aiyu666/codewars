/*
[7 kyu]

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

from: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
*/

function rowSumOddNumbers(n) {
    const totalLastLenth = (n + 1) * n / 2
    const totalLenth = (n) * (n - 1) / 2
    return (totalLastLenth + totalLenth) * n
}

console.log(rowSumOddNumbers(42)) 