/*
[6 kyu]
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(str) {
    const result = []
    const strList = str.split(' ');
    for (let i = 0; i < strList.length; i++) {
        if (strList[i].length < 5) result.push(strList[i])
        else result.push(strList[i].split('').reverse().join(''));
    }
    return result.join(' ');
}

console.log(spinWords("This is another test")) //This is rehtona test