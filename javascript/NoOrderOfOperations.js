/*
[6 kyu]
Imagine if there were no order of operations. Instead, you would do the problem from left to right. For example, the equation a +b *c /da+b∗c/d would become (((a+b)*c)//d)(((a+b)∗c)//d) (Math.floor(((a+b)*c)/d) in JS). Return None/null (depending on your language) if the equation is "".

Task:
Given an equation with a random amount of spaces greater than or equal to zero between each number and operation, return the result without order of operations. Note that if two numbers are spaces apart, act as if they were one number: 1 3 = 13. However, if given something % 0 or something / 0, return None/null.

More about order of operations: here

Key:
^ represents **
/ should always be rounded down(Math.floor) because the result will always be an integer
Operations allowed:
+, -, * , /, ^, %

Example:
no_order(2 + 3 - 4 * 1 ^ 3) returns 1

because:

  2 + 3 - 4 * 1 ^ 3
= 2 + 3 - 4 * 1 ^ 3
= 5 - 4 * 1 ^ 3
= 1 * 1 ^ 3
= 1 ^ 3
= 1
*/

function noOrder(s) {
  let test = ''
  let result = 0;
  let status = true;
  const numList = [];
  const calculationList = [];
  s.split('').forEach((val) => {
    if (val.charCodeAt() === 32) return;
    test += val;
    if (status && Number.isInteger(Number(val))) {
      status = false;
      return numList.push(val);
    }
    if (!status && Number.isInteger(Number(val))) {
      return numList[numList.length - 1] += val;
    }
    if (!status && !Number.isInteger(Number(val))) {
      status = true;
      if (val === '^') val = '**';
      return calculationList.push(val);
    }
    return result = null;
  })
  console.log(numList);
  console.log(calculationList);
  console.log(test);
  console.log(`--------------`)
  if (result === null) return null;
  let preNum = numList[0];
  for (let i = 1; i < numList.length; i++) {
    console.log(`preNum= ${preNum} ,i = ${i}`)
    if ((calculationList[i - 1] === '%' || calculationList[i - 1] === '/') && numList[i] === '0') return result = null
    preNum = eval(preNum + calculationList[i - 1] + numList[i])
  }
  if (result !== 0) return result
  return Math.floor(preNum)
}

console.log(noOrder('2+38/81*35')) //1