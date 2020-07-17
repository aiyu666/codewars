/** Recover a secret string from random triplets
 * [4 kyu]
 *
 * There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
 *
 * A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".
 *
 * As a simplification, you may assume that no letter occurs more than once in the secret string.
 *
 * You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
 *
 * from: https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript
 */

function searchAndApeend() {

}

var recoverSecret = function(triplets) {
    let result = []
    let checkList = []
    // list all word
    triplets.map(element => {
        for (let i = 0; i < element.length; i++) {
            if (checkList.indexOf(element[i]) === -1) checkList.push(element[i])
        }
    })
    console.log(checkList)

    // find first word
    const firstValue = checkList.filter(val => {
        let count = 0
        for (let i = 0; i < triplets.length; i++) {
            if (triplets[i][1] === val || triplets[i][2] === val) count++
        }
        if (count === 0) return val
    }).join('')
    result.push(firstValue)
    let preValue = firstValue
    for (let index = 0; index < checkList.length - 1; index++) {
        preValue = searchElement(preValue, triplets)
        result.push(preValue)
    }
    return result.join('')
}
function searchElement(preNum, triplets) {
    console.log(`preNum ${preNum}`)
    const res = triplets.filter(element => {
        return (element[0] === preNum)
    });
    if (res.length !== 0) return res[0][1]
    const resp = triplets.filter(element => {
        return (element[1] === preNum)
    });
    if (resp.length !== 0) return resp[0][2]
    return
}

// "whatisup"
const triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]


console.log(recoverSecret(triplets1)) // "whatisup"

//mathisfun

// const triplets2 = [
//     ['t', 's', 'f'],
//     ['a', 's', 'u'],
//     ['m', 'a', 'f'],
//     ['a', 'i', 'n'],
//     ['s', 'u', 'n'],
//     ['m', 'f', 'u'],
//     ['a', 't', 'h'],
//     ['t', 'h', 'i'],
//     ['h', 'i', 'f'],
//     ['m', 'h', 'f'],
//     ['a', 'u', 'n'],
//     ['m', 'a', 't'],
//     ['f', 'u', 'n'],
//     ['h', 's', 'n'],
//     ['a', 'i', 's'],
//     ['m', 's', 'n'],
//     ['m', 's', 'u']]

// console.log(recoverSecret(triplets2)) // "mathisfun"
