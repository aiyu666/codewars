/* Catching Car Mileage Numbers
 * [4 kyu]
 * "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?
 *
 * Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).
 *
 * It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.
 *
 * Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
 *
 * "Interesting" Numbers
 * Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
 *
 * Any digit followed by all zeros: 100, 90000
 * Every digit is the same number: 1111
 * The digits are sequential, incementing†: 1234
 * The digits are sequential, decrementing‡: 4321
 * The digits are a palindrome: 1221 or 73837
 * The digits match one of the values in the awesomePhrases array
 * † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
 * ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
 *
 * So, you should expect these inputs and outputs:
 *
 * // "boring" numbers
 * isInteresting(3, [1337, 256]);    // 0
 * isInteresting(3236, [1337, 256]); // 0
 *
 * // progress as we near an "interesting" number
 * isInteresting(11207, []); // 0
 * isInteresting(11208, []); // 0
 * isInteresting(11209, []); // 1
 * isInteresting(11210, []); // 1
 * isInteresting(11211, []); // 2
 *
 * // nearing a provided "awesome phrase"
 * isInteresting(1335, [1337, 256]); // 1
 * isInteresting(1336, [1337, 256]); // 1
 * isInteresting(1337, [1337, 256]); // 2
 * Error Checking
 * A number is only interesting if it is greater than 99!
 * Input will always be an integer greater than 0, and less than 1,000,000,000.
 * The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
 * You should only ever output 0, 1, or 2.
 *
 * from: https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
*/

function isInteresting(number, awesomePhrases) {
    // invalid input
    if (number < 98 || number < 0 || number > 1000000000) return 0;
    const digits = number.toString().length;
    const firstNum = number.toString()[0];
    const middleNum = digits / 2
    const frontValue = Number(number.toString().split('').slice(0, parseInt(middleNum)).join(''))
    const backValue = Number(number.toString().split('').slice(parseInt(middleNum) + 1).join(''))
    const digitsAreAPalindrome = frontValue - backValue;

    // In the awesomePhrases array
    for (let index = 0; index < awesomePhrases.length; index++) {
        const inTheAwesomePhrasesArray = Math.abs(awesomePhrases[index] - number)
        if (inTheAwesomePhrasesArray < 3 && inTheAwesomePhrasesArray === 0) return 2;
        if (inTheAwesomePhrasesArray < 3) return 1;
    }

    // Every digit is the same number
    if (number > 100) {
        let initSameNumber = '1';
        for (let i = 1; i < digits; i++) initSameNumber += '1';
        const everyDigitIsTheSameNumber = Math.abs(firstNum * Number(initSameNumber) - number);
        if (everyDigitIsTheSameNumber < 3 && everyDigitIsTheSameNumber === 0) return 2;
        if (everyDigitIsTheSameNumber < 3) return 1;
    }
    // Any digit followed by all zeros
    let digitFollowedByAllZeros = number % (10 ** (digits - 1) * firstNum);
    if ((10 ** (digits - 1) - digitFollowedByAllZeros) < 3) return 1;
    if (digitFollowedByAllZeros < 3 && digitFollowedByAllZeros === 0) return 2;
    if (digitFollowedByAllZeros < 3 && !(digitsAreAPalindrome < 3 && digitsAreAPalindrome === 0)) return 1;
    digitFollowedByAllZeros = (10 ** (digits) * number.toString()[0]) - number;
    if (digitFollowedByAllZeros < 3) return 1;

    // The digits are sequential, incementing†
    let initIncementing = firstNum.toString();
    let incementingNumber = ''
    for (let i = 0; i < digits; i++) {
        incementingNumber += initIncementing.toString();
        initIncementing = Number(initIncementing) + 1
        if (initIncementing > 9) initIncementing = 0
    }
    const theDigitsArelIncementing = Math.abs(Number(incementingNumber) - number)
    if (theDigitsArelIncementing < 3 && theDigitsArelIncementing === 0) return 2;
    if (theDigitsArelIncementing < 3) return 1;

    // The digits are sequential, decrementing‡
    let initSequential = firstNum;
    let sequentialNumber = ''
    if (firstNum > 1) {
        for (let i = 0; i < digits; i++) {
            sequentialNumber += initSequential.toString();
            initSequential = Number(initSequential) - 1
            if (initSequential < 1) initSequential = 0
        }
        const theDigitsAreSequential = Math.abs(Number(sequentialNumber) - number)
        if (theDigitsAreSequential < 3 && theDigitsAreSequential === 0) return 2;
        if (theDigitsAreSequential < 3) return 1;
    }

    // The digits are a palindrome
    if (digitsAreAPalindrome < 3 && digitsAreAPalindrome === 0) return 2;
    if (digitsAreAPalindrome < 3) return 1;

    return 0;
}
console.log(`101, [] -> Expect get: 2 , Actually get: ${isInteresting(101, [])}, result: ${isInteresting(101, []) === 2}`)// 2
console.log(`98, [] -> Expect get: 1 , Actually get: ${isInteresting(98, [])}, result: ${isInteresting(98, []) === 1}`)// 1
console.log(`99, [] -> Expect get: 1 , Actually get: ${isInteresting(99, [])}, result: ${isInteresting(99, []) === 1}`)// 1
console.log(`256, [256] -> Expect get: 2 , Actually get: ${isInteresting(256, [256])}, result: ${isInteresting(256, [256]) === 2}`)// 2
console.log(`123456, [] -> Expect get: 2 , Actually get: ${isInteresting(123456, [])}, result: ${isInteresting(123456, []) === 2}`)// 2
console.log(`123454, [] -> Expect get: 1 , Actually get: ${isInteresting(123454, [])}, result: ${isInteresting(123454, []) === 1}`)// 2
console.log(`10000, [] -> Expect get: 2 , Actually get: ${isInteresting(10000, [])}, result: ${isInteresting(10000, []) === 2}`)// 2
console.log(`10001, [] -> Expect get: 1 , Actually get: ${isInteresting(10001, [])}, result: ${isInteresting(10001, []) === 1}`)// 1
console.log(`79999, [] -> Expect get: 1 , Actually get: ${isInteresting(79999, [])}, result: ${isInteresting(79999, []) === 1}`)// 1
console.log(`99999, [] -> Expect get: 2 , Actually get: ${isInteresting(99999, [])}, result: ${isInteresting(99999, []) === 2}`)// 2
console.log(`11211, [1337, 256] -> Expect get: 2 , Actually get: ${isInteresting(11211, [1337, 256])}, result: ${isInteresting(11211, [1337, 256]) === 2}`)// 2
console.log(`3, [1337, 256]) -> Expect get: 0 , Actually get: ${isInteresting(3, [1337, 256])} , result: ${isInteresting(3, [1337, 256]) === 0}`) //     0
console.log(`1336, [1337, 256]) -> Expect get: 1 , Actually get: ${isInteresting(1336, [1337, 256])} , result: ${isInteresting(1336, [1337, 256]) === 1}`) //  1
console.log(`1337, [1337, 256]) -> Expect get: 2 , Actually get: ${isInteresting(1337, [1337, 256])} , result: ${isInteresting(1337, [1337, 256]) === 2}`) //  2
console.log(`11208, [1337, 256]) -> Expect get: 0 , Actually get: ${isInteresting(11208, [1337, 256])} , result: ${isInteresting(11208, [1337, 256]) === 0}`) // 0
console.log(`11209, [1337, 256]) -> Expect get: 1 , Actually get: ${isInteresting(11209, [1337, 256])} , result: ${isInteresting(11209, [1337, 256]) === 1}`) // 1
console.log(`11211, [1337, 256]) -> Expect get: 2 , Actually get: ${isInteresting(11211, [1337, 256])} , result: ${isInteresting(11211, [1337, 256]) === 2}`) // 2
