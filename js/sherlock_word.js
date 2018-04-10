/*
Sherlock considers a string to be valid if it all characters 
of the string appear the same number of times. It is also valid 
if he can remove just  character at  index in the string, and 
the remaining characters will occur the same number of times. Print 
YES if a string  is valid, otherwise, print NO.
*/

// Examples:
// 'abc'   YES
// 'aabc'  YES
// 'aaabc' NO


function isValid(s){
  if (allCountsEqual(s)) {
      return 'YES'
  }
  let oneRemoved;
  for (let i = 0; i <= s.length; i++) {
      oneRemoved = s.slice(0, i) + s.slice(i + 1)
      if (allCountsEqual(oneRemoved)) {
          return 'YES'
      }
  }
  return 'NO'
}

function allCountsEqual(s) {
  const countsArr = Object.values(letterCounts(s))
  return countsArr.every( el => el === countsArr[0] )
}

function letterCounts(s) {
  result = {};
  let letter;
  for (let i = 0; i < s.length; i++) {
    letter = s[i];
    result[letter] = result[letter] ? result[letter] + 1 : 1;
  }
  return result
}