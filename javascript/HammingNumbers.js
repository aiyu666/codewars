/** Hamming Numbers
 * [4 kyu]
 * A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.
 *
 * Write a function that computes the nth smallest Hamming number.
 *
 * Specifically:
 *
 * The first smallest Hamming number is 1 = 203050
 * The second smallest Hamming number is 2 = 213050
 * The third smallest Hamming number is 3 = 203150
 * The fourth smallest Hamming number is 4 = 223050
 * The fifth smallest Hamming number is 5 = 203051
 * The 20 smallest Hamming numbers are given in example test fixture.
 *
 * Your code should be able to compute all of the smallest 5,000 (Clojure: 2000, NASM: 13282) Hamming numbers without timing out.
 * from: https://www.codewars.com/kata/526d84b98f428f14a60008da/train/javascript
 */

function hamming(n) {
    let result = [1];
    for (let i = 1; i <= 1000; i += 1) {
        if (i % 2 === 0) result.push(i)
        else if (i % 3 === 0) result.push(i)
        else if (i % 5 === 0) result.push(i)
    }
    console.log(result);
    return result[n - 1];
}
// 3 6 9 12 15 18 21 24 27 30 33 36 39
console.log(hamming(1) == 1);
console.log(hamming(2) == 2);
console.log(hamming(3) == 3);
console.log(hamming(4) == 4);
console.log(hamming(5) == 5);
console.log(hamming(6) == 6);
// console.log(hamming(7) == 8);
// console.log(hamming(8) == 9);
// console.log(hamming(9) == 10);
// console.log(hamming(10) == 12);
// console.log(hamming(11) == 15);
// console.log(hamming(12) == 16);
// console.log(hamming(13) == 18);
// console.log(hamming(14) == 20);
// console.log(hamming(15) == 24);
// console.log(hamming(16) == 25);
// console.log(hamming(17) == 27);
// console.log(hamming(18) == 30);
// console.log(hamming(19) == 32);