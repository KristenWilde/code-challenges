/* https://www.hackerrank.com/challenges/larrys-array/problem
Larry has been given a permutation of a sequence of natural numbers incrementing 
from  as an array. He must determine whether the array can be sorted using the 
following operation any number of times:

Choose any  consecutive indices and rotate their elements in such a way that 
the array becomes sorted.
For example: 

Array         Rotate
[1,6,5,2,4,3] [6,5,2]
[1,5,2,6,4,3] [5,2,6]
[1,2,6,5,4,3] [5,4,3]
[1,2,6,3,5,4] [6,3,5]
[1,2,3,5,6,4] [5,6,4]
[1,2,3,4,5,6]

If it is possible to sort the array in this manner, print 'YES', otherwise 
print 'NO'.

- rotate the array of 3 by shifting off the first el, pushing to the end.

Approach1:
Attempt to sort the array. 
- Locate the 'next integer'
  start with index 0 and find the first index where A[i] != A[i + 1]
  - currentIdx initialized to 0,
  - desiredNum initialized to 1.
  find its earliest group of 3 
  - numIdx - the current index of desiredNum
  - the 2 indexes before it; if negative then 0).
  rotate that subarray.
  - splice 
  - helper function 'rotateSubArr'
  Check the iteration against iterationArray
  - helper function matchIteration() should return false.
  - if matchIteration(currentIteration), print 'NO' and return.
  Keep track of the iteration, 
  - by pushing to an array of iterations
  Repeat
  when done, print 'YES' and return.

Approach2:
Look at the array and try to figure out without actually performing the sorting.
Last 3 numbers? 

Note: the solution below seems to work but takes too long for many test cases.
To re-write see 
https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
*/

console.log('hello');

function larrysArray(A) {
  let currentIdx = 0;
  let desiredNum = 1;
  let numIdx;
  let currentArr = A.slice();
  const iterations = [A.slice()];

  while (currentIdx < A.length) {
    numIdx = currentArr.indexOf(desiredNum);
    if (numIdx + 1 === desiredNum) { 
      currentIdx += 1;
      desiredNum += 1;
      continue; 
    }
    if (!rotate()) {
      // console.log('rotatedNums')
      console.log('NO');

      return;
    }
    if (isDuplicate(currentArr)) {
      // console.log('isDuplicate');
      console.log('NO');
      return;
    }
    iterations.push(currentArr.slice());
  }

  function rotate() {
    let startIdx = numIdx - 2;
    if (startIdx <= currentIdx) {
      startIdx = currentIdx;
    }
    rotatedNums = currentArr.splice(startIdx, 3);
    if (rotatedNums.length !== 3) {
      return false;
    }
    rotatedNums.push(rotatedNums.shift());
    currentArr.splice(startIdx, 0, ...rotatedNums);
    return true;
  }

  function isDuplicate(arr) {
    for (let i = 0; i < iterations.length; i++) { // for each array
      if (arrayMatch(arr, iterations[i])) {
        return true;
      }
    }
    
    return false;
  }

  function arrayMatch(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) { // for each element
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  console.log('YES')
}

larrysArray([1, 6, 5, 2, 4, 3]) // yes
// even though the elements are very mixed up, we can always rotate something
larrysArray([1,2,3,5,4]) // no
// 354 - 543 - 435 - 354.
/* the last 2 numbers are out of order, can't be changed.
12435
14325
12435
12354
We know because we attempted, and we're back to where we started.
*/
larrysArray([3,2,1]) // no bcause if we attempt, we get back to the starting point.
// 1,3,2
larrysArray([4,1,3,2]) // yes
/*
1342
1234 yes
*/
larrysArray([4,3,2,1]); 
/* yes
4132
1342
1234
*/
