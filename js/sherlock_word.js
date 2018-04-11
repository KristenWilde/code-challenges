/*
Sherlock considers a string to be valid if it all characters 
of the string appear the same number of times. It is also valid 
if he can remove just  character at  index in the string, and 
the remaining characters will occur the same number of times. Print 
YES if a string  is valid, otherwise, print NO.
*/

// Examples:
// 'abc'   YES
// 'abcc'  YES
// 'abccc' NO

// Inefficient Solution:
function isValid(s){
  if (allCountsEqual(s)) {
      return 'YES'
  }
  let oneRemoved;
  for (let i = 0; i < s.length; i++) {
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

//Efficient Solution:
function isValid(s){
  const countsArr = Object.values(letterCounts(s))
  if (allEqual(countsArr)) { 
      return 'YES' 
  }
  let test;
  for (i = 0; i < countsArr.length; i++) {
      testCounts = countsArr.slice();
      testCounts[i] -= 1;
      if (allEqual(testCounts)) {
          return 'YES'
      }
  }
  return 'NO'
}

function allEqual(counts) {
  return counts.every( el => el === counts[0] || el === 0 )
}

function letterCounts(s) {
  counts = {};
  let letter;
  let uniqueCounts = [];
  for (let i = 0; i < s.length; i++) {
    letter = s[i];
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
  }
  return counts
}