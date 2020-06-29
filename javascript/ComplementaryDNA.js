/*
[7 kyu]

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");

Note:  A to T , T to A , G to C, C to G.
from: https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
*/

function DNAStrand(dna) {
    const wordTransfer = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G',
    }
    let result = '';
    dna.split('').forEach(val => {
        result += wordTransfer[val]
    })
    return result
}

console.log(DNAStrand('GTAT'))