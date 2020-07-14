/** Snail
 * [4 kyu]
 * Snail Sort
 * Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
 *
 * array = [[1,2,3],
 *          [4,5,6],
 *          [7,8,9]]
 * snail(array) #=> [1,2,3,6,9,8,7,4,5]
 * For better understanding, please follow the numbers of the next array consecutively:
 *
 * array = [[1,2,3],
 *          [8,9,4],
 *          [7,6,5]]
 * snail(array) #=> [1,2,3,4,5,6,7,8,9]
 * This image will illustrate things more clearly:
 *
 *
 * NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
 *
 * NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
 * from: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
 */

snail = function(array) {
    return woker(array, [])
}

function woker(array, result) {
    if (array.length === 0) return result
    if (array.length === 1) return result.concat(array[0])
    result = result.concat(array[0]);
    array.splice(0, 1)
    // 加入並刪除右邊最後一排外層
    array.forEach(function(value) {
        result.push(value[value.length - 1])
        value.pop()
    })
    //  加入並刪除最下方最後一排外層
    result = result.concat(array[array.length - 1].reverse())
    array.pop()

    // 加入並刪除左方第一排外層
    const firstLine = []
    array.forEach(function(value) {
        firstLine.push(value[0])
        value.shift()
    })
    result = result.concat(firstLine.reverse())
    return woker(array, result)
}

// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) //[1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])) //
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]