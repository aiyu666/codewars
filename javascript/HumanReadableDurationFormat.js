/** Human readable duration format
 * [4 kyu]
 * Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
 *
 * The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
 *
 * It is much easier to understand with an example:
 *
 * formatDuration(62)    // returns "1 minute and 2 seconds"
 * formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
 * For the purpose of this Kata, a year is 365 days and a day is 24 hours.
 *
 * Note that spaces are important.
 *
 * Detailed rules
 * The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
 *
 * The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
 *
 * A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
 *
 * Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
 *
 * A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
 *
 * A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
 *
 * from: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
 */

function formatDuration(seconds) {
    const yearSecond = 31104000;
    const daySecond = 86400;
    const hourSecond = 3600;
    const minute = 60;
    console.log(seconds)
    let result = ''
    if (Math.floor(seconds / yearSecond) > 1) result += `${Math.floor(seconds / yearSecond)} years, `;
    if (Math.floor(seconds / yearSecond) === 1) result += `${Math.floor(seconds / yearSecond)} year, `;
    seconds = seconds % yearSecond;
    if (Math.floor(seconds / daySecond) > 1) result += `${Math.floor(seconds / daySecond)} days, `;
    if (Math.floor(seconds / daySecond) === 1) result += `${Math.floor(seconds / daySecond)} day, `;
    seconds = seconds % daySecond;
    if (Math.floor(seconds / hourSecond) > 1) result += `${Math.floor(seconds / hourSecond)} hours, `;
    if (Math.floor(seconds / hourSecond) === 1) result += `${Math.floor(seconds / hourSecond)} hour, `;
    seconds = seconds % hourSecond;
    if (Math.floor(seconds / minute) > 1) result += `${Math.floor(seconds / minute)} minutes, `;
    if (Math.floor(seconds / minute) === 1) result += `${Math.floor(seconds / minute)} minute, `;
    seconds = seconds % minute;
    if (seconds > 1) result += `${seconds} seconds`;
    if (seconds === 1) result += `${seconds} second`;
    let resultList = result.split(', ')
    resultList = resultList.filter(val => {
        return val !== '';
    })
    if (resultList.length > 1) {
        const lastStr = resultList[resultList.length - 1]
        return `${resultList.slice(0, -1).join(', ')} and ${lastStr}`
    }
    return resultList[0];
}

console.log(formatDuration(1) === "1 second");
console.log(formatDuration(62) === "1 minute and 2 seconds");
console.log(formatDuration(120) === "2 minutes");
console.log(formatDuration(3600) === "1 hour");
console.log(formatDuration(3662) === "1 hour, 1 minute and 2 seconds");