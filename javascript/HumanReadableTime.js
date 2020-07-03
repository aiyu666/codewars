/* Human Readable Time
 * [5 kyu]
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 *
 * HH = hours, padded to 2 digits, range: 00 - 99
 * MM = minutes, padded to 2 digits, range: 00 - 59
 * SS = seconds, padded to 2 digits, range: 00 - 59
 * The maximum time never exceeds 359999 (99:59:59)
 *
 * You can find some examples in the test fixtures.
 *
 * from: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
*/

function humanReadable(seconds) {
    if (seconds > 359999 || seconds < 0) return 'Invalid seconds';
    let hours = Math.floor(seconds / 3600);
    if (hours < 10) hours = `0${hours}`
    seconds -= hours * 3600;
    let minutes = Math.floor(seconds / 60);
    if (minutes < 10) minutes = `0${minutes}`
    seconds -= minutes * 60;
    if (seconds < 10) seconds = `0${seconds}`
    return `${hours}:${minutes}:${seconds}`
}
console.log(humanReadable(0)) // 00:00:00
console.log(humanReadable(5)) // 00:00:05
console.log(humanReadable(86399)) // 23: 59: 59
console.log(humanReadable(359999)) // 99:59:59